import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw } from 'lucide-react';
import type { Challenge } from '../data/challenges';

interface CodeEditorProps {
  challenge: Challenge;
  onCodeEvaluate: (code: string, results: TestResult[]) => void;
  isDarkMode: boolean;
}

interface TestResult {
  passed: boolean;
  input: string;
  expected: any;
  actual: any;
  error?: string;
  description?: string;
}

export default function CodeEditor({ challenge, onCodeEvaluate, isDarkMode }: CodeEditorProps) {
  const [code, setCode] = useState(challenge.starterCode || '');
  const [results, setResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const editorRef = useRef<any>(null);

  const resetCode = () => {
    setCode(challenge.starterCode || '');
    setResults([]);
    setConsoleOutput([]);
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    
    // Add custom keybinding for formatting (Ctrl+Alt+F)
    editor.addAction({
      id: 'format-code',
      label: 'Format Code',
      keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KeyF],
      run: () => {
        editor.getAction('editor.action.formatDocument').run();
      }
    });

    // Configure editor options
    editor.updateOptions({
      fontSize: 14,
      lineHeight: 20,
      fontFamily: "'Fira Code', 'JetBrains Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
      fontLigatures: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 2,
      insertSpaces: true,
      wordWrap: 'on',
      lineNumbers: 'on',
      glyphMargin: false,
      folding: true,
      lineDecorationsWidth: 10,
      lineNumbersMinChars: 3,
      renderLineHighlight: 'line',
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: true,
      formatOnPaste: true,
      formatOnType: true,
      suggestOnTriggerCharacters: true,
      acceptSuggestionOnEnter: 'on',
      tabCompletion: 'on',
      wordBasedSuggestions: true,
      parameterHints: { enabled: true },
      quickSuggestions: {
        other: true,
        comments: true,
        strings: true
      }
    });
  };
  const evaluateCode = async () => {
    setIsRunning(true);
    setConsoleOutput([]);
    
    const testResults: TestResult[] = [];
    const logs: string[] = [];
    
    // Mock console.log to capture output
    const originalLog = console.log;
    console.log = (...args: any[]) => {
      logs.push(args.map(arg => String(arg)).join(' '));
      originalLog(...args);
    };

    try {
      // Create a safe evaluation environment
      const createSafeFunction = (userCode: string) => {
        try {
          // Extract function name from the code
          const functionMatch = userCode.match(/function\s+(\w+)/);
          if (!functionMatch) {
            throw new Error('No function declaration found. Please make sure your function is declared with the "function" keyword.');
          }
          
          const functionName = functionMatch[1];
          
          // Create function in isolated scope
          const func = new Function(`
            ${userCode}
            return ${functionName};
          `);
          
          return func();
        } catch (error) {
          throw new Error(`Code compilation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      };

      const userFunction = createSafeFunction(code);

      for (const testCase of challenge.testCases) {
        try {
          // Parse input more carefully
          const parseInput = (input: string): any[] => {
            try {
              // Handle multiple parameters separated by commas (but not within arrays/objects)
              const params: any[] = [];
              let currentParam = '';
              let depth = 0;
              let inString = false;
              let stringChar = '';
              
              for (let i = 0; i < input.length; i++) {
                const char = input[i];
                
                if (!inString && (char === '"' || char === "'")) {
                  inString = true;
                  stringChar = char;
                  currentParam += char;
                } else if (inString && char === stringChar) {
                  inString = false;
                  currentParam += char;
                } else if (!inString && (char === '[' || char === '{' || char === '(')) {
                  depth++;
                  currentParam += char;
                } else if (!inString && (char === ']' || char === '}' || char === ')')) {
                  depth--;
                  currentParam += char;
                } else if (!inString && char === ',' && depth === 0) {
                  // This is a parameter separator
                  params.push(currentParam.trim());
                  currentParam = '';
                } else {
                  currentParam += char;
                }
              }
              
              if (currentParam.trim()) {
                params.push(currentParam.trim());
              }
              
              // Parse each parameter
              return params.map(param => {
                try {
                  // Use Function constructor for safer evaluation
                  return new Function(`"use strict"; return (${param})`)();
                } catch {
                  // If parsing fails, return as string (remove quotes if present)
                  return param.replace(/^['"]|['"]$/g, '');
                }
              });
            } catch (error) {
              // Fallback: try to parse the entire input as a single parameter
              try {
                return [new Function(`"use strict"; return (${input})`)()];
              } catch {
                return [input.replace(/^['"]|['"]$/g, '')];
              }
            }
          };
          
          const functionArgs = parseInput(testCase.input);
          const actual = userFunction(...functionArgs);
          
          // Deep comparison for arrays and objects
          const deepEqual = (a: any, b: any): boolean => {
            if (a === b) return true;
            if (a == null || b == null) return false;
            if (Array.isArray(a) && Array.isArray(b)) {
              if (a.length !== b.length) return false;
              return a.every((val, index) => deepEqual(val, b[index]));
            }
            if (typeof a === 'object' && typeof b === 'object') {
              const keysA = Object.keys(a);
              const keysB = Object.keys(b);
              if (keysA.length !== keysB.length) return false;
              return keysA.every(key => deepEqual(a[key], b[key]));
            }
            return false;
          };

          testResults.push({
            passed: deepEqual(actual, testCase.expected),
            input: testCase.input,
            expected: testCase.expected,
            actual,
            description: testCase.description
          });
        } catch (error) {
          testResults.push({
            passed: false,
            input: testCase.input,
            expected: testCase.expected,
            actual: undefined,
            error: error instanceof Error ? error.message : 'Unknown error',
            description: testCase.description
          });
        }
      }
    } catch (error) {
      // If there's a global error, mark all tests as failed
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      logs.push(`Error: ${errorMessage}`);
      
      challenge.testCases.forEach(testCase => {
        testResults.push({
          passed: false,
          input: testCase.input,
          expected: testCase.expected,
          actual: undefined,
          error: errorMessage,
          description: testCase.description
        });
      });
    } finally {
      console.log = originalLog;
      setConsoleOutput(logs);
      setResults(testResults);
      setIsRunning(false);
      onCodeEvaluate(code, testResults);
    }
  };

  const allTestsPassed = results.length > 0 && results.every(r => r.passed);

  return (
    <div className="flex flex-col h-full space-y-4 lg:space-y-4">
      {/* Code Editor */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 space-y-2 sm:space-y-0">
          <h3 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Code Editor
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={resetCode}
              className={`flex items-center space-x-1 px-3 lg:px-3 py-1.5 rounded-md text-sm transition-colors ${
                isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={evaluateCode}
              disabled={isRunning}
              className="flex items-center space-x-1 px-3 lg:px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors disabled:opacity-50"
            >
              <Play className="w-4 h-4" />
              <span>{isRunning ? 'Running...' : 'Evaluate'}</span>
            </button>
          </div>
        </div>
        
        <div className={`relative rounded-lg overflow-hidden border ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <Editor
            height="300px"
            defaultLanguage="javascript"
            value={code}
            onChange={(value) => setCode(value || '')}
            onMount={handleEditorDidMount}
            theme={isDarkMode ? 'vs-dark' : 'light'}
            options={{
              fontSize: 14,
              lineHeight: 20,
              fontFamily: "'Fira Code', 'JetBrains Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              fontLigatures: true,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              insertSpaces: true,
              wordWrap: 'on',
              lineNumbers: 'on',
              glyphMargin: false,
              folding: true,
              lineDecorationsWidth: 10,
              lineNumbersMinChars: 3,
              renderLineHighlight: 'line',
              selectOnLineNumbers: true,
              roundedSelection: false,
              readOnly: false,
              cursorStyle: 'line',
              formatOnPaste: true,
              formatOnType: true,
              suggestOnTriggerCharacters: true,
              acceptSuggestionOnEnter: 'on',
              tabCompletion: 'on',
              wordBasedSuggestions: true,
              parameterHints: { enabled: true },
              quickSuggestions: {
                other: true,
                comments: true,
                strings: true
              }
            }}
          />
        </div>
        
        <div className={`mt-2 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <span>💡 Press </span>
          <kbd className={`px-1 py-0.5 rounded text-xs font-mono ${
            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
          }`}>
            Shift+Alt+F
          </kbd>
          <span> to format your code</span>
        </div>
      </div>

      {/* Test Results */}
      {results.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Test Results
            </h3>
            {allTestsPassed && (
              <div className="flex items-center space-x-2 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">All tests passed!</span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border ${
                  result.passed
                    ? isDarkMode
                      ? 'bg-green-900/20 border-green-700 text-green-200'
                      : 'bg-green-50 border-green-200 text-green-800'
                    : isDarkMode
                      ? 'bg-red-900/20 border-red-700 text-red-200'
                      : 'bg-red-50 border-red-200 text-red-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">
                    {result.description || `Test ${index + 1}`}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    result.passed
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}>
                    {result.passed ? 'PASS' : 'FAIL'}
                  </span>
                </div>
                <div className="text-sm space-y-1">
                  <div>Input: <code className="font-mono">{result.input}</code></div>
                  <div>Expected: <code className="font-mono">{JSON.stringify(result.expected)}</code></div>
                  {result.error ? (
                    <div>Error: <code className="font-mono text-red-600">{result.error}</code></div>
                  ) : (
                    <div>Actual: <code className="font-mono">{JSON.stringify(result.actual)}</code></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Console Output */}
      {consoleOutput.length > 0 && (
        <div className="space-y-2">
          <h3 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Console Output
          </h3>
          <div className={`p-3 rounded-lg font-mono text-sm ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
            {consoleOutput.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}