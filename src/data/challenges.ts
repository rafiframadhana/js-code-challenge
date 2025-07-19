export interface TestCase {
  input: string;
  expected: any;
  description?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  hint: string;
  testCases: TestCase[];
  starterCode?: string;
}

export interface Topic {
  [key: string]: Challenge[];
}

export interface Level {
  [key: string]: Topic;
}

export interface ChallengeData {
  levels: Level;
}

export const challengeData: ChallengeData = {
  levels: {
    "Beginner": {
      "Arrays": [
        {
          id: "arr-1",
          title: "Reverse an Array",
          description: "Write a function that takes an array and returns a new array with the elements in reverse order. Do not modify the original array.",
          hint: "You can use a for loop starting from the last index, or try the built-in reverse() method on a copy of the array.",
          starterCode: "function reverseArray(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: [5, 4, 3, 2, 1], description: "Basic number array" },
            { input: "['a', 'b', 'c']", expected: ['c', 'b', 'a'], description: "String array" },
            { input: "[]", expected: [], description: "Empty array" },
            { input: "[42]", expected: [42], description: "Single element" }
          ]
        },
        {
          id: "arr-2",
          title: "Find Maximum Value",
          description: "Write a function that finds and returns the maximum value in an array of numbers.",
          hint: "You can use Math.max() with the spread operator, or iterate through the array keeping track of the current maximum.",
          starterCode: "function findMax(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 5, 3, 9, 2]", expected: 9, description: "Positive numbers" },
            { input: "[-1, -5, -3, -2]", expected: -1, description: "Negative numbers" },
            { input: "[42]", expected: 42, description: "Single element" },
            { input: "[0, 0, 0]", expected: 0, description: "All zeros" }
          ]
        },
        {
          id: "arr-3",
          title: "Sum Array Elements",
          description: "Write a function that calculates and returns the sum of all elements in an array of numbers.",
          hint: "Use a for loop or the reduce() method to add up all the elements.",
          starterCode: "function sumArray(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: 15, description: "Positive numbers" },
            { input: "[-1, -2, 3, 4]", expected: 4, description: "Mixed positive and negative" },
            { input: "[]", expected: 0, description: "Empty array" },
            { input: "[0, 0, 0]", expected: 0, description: "All zeros" }
          ]
        },
        {
          id: "arr-4",
          title: "Find Element Index",
          description: "Write a function that finds the index of a specific element in an array. Return -1 if not found.",
          hint: "Use indexOf() method or a for loop to search through the array.",
          starterCode: "function findIndex(arr, element) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5], 3", expected: 2, description: "Element found" },
            { input: "['a', 'b', 'c'], 'b'", expected: 1, description: "String element found" },
            { input: "[1, 2, 3], 5", expected: -1, description: "Element not found" },
            { input: "[], 1", expected: -1, description: "Empty array" }
          ]
        },
        {
          id: "arr-5",
          title: "Remove Duplicates",
          description: "Write a function that removes duplicate elements from an array and returns a new array with unique elements only.",
          hint: "You can use Set to remove duplicates, or use filter with indexOf to keep only first occurrences.",
          starterCode: "function removeDuplicates(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 2, 3, 3, 3, 4]", expected: [1, 2, 3, 4], description: "Number duplicates" },
            { input: "['a', 'b', 'a', 'c', 'b']", expected: ['a', 'b', 'c'], description: "String duplicates" },
            { input: "[1, 2, 3]", expected: [1, 2, 3], description: "No duplicates" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "arr-6",
          title: "Array Contains Element",
          description: "Write a function that checks if an array contains a specific element. Return true if found, false otherwise.",
          hint: "Use the includes() method or a for loop to check each element.",
          starterCode: "function containsElement(arr, element) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5], 3", expected: true, description: "Element exists" },
            { input: "['apple', 'banana', 'orange'], 'banana'", expected: true, description: "String element exists" },
            { input: "[1, 2, 3], 5", expected: false, description: "Element doesn't exist" },
            { input: "[], 1", expected: false, description: "Empty array" }
          ]
        },
        {
          id: "arr-7",
          title: "First and Last Elements",
          description: "Write a function that returns an array containing the first and last elements of the input array.",
          hint: "Access elements using index 0 for first and arr.length - 1 for last.",
          starterCode: "function firstAndLast(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: [1, 5], description: "Multiple elements" },
            { input: "['a', 'b', 'c']", expected: ['a', 'c'], description: "String array" },
            { input: "[42]", expected: [42, 42], description: "Single element" },
            { input: "[10, 20]", expected: [10, 20], description: "Two elements" }
          ]
        },
        {
          id: "arr-8",
          title: "Array Length",
          description: "Write a function that returns the length of an array without using the built-in length property.",
          hint: "Use a counter variable and iterate through the array until you reach the end.",
          starterCode: "function getArrayLength(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: 5, description: "Five elements" },
            { input: "['a', 'b']", expected: 2, description: "Two elements" },
            { input: "[]", expected: 0, description: "Empty array" },
            { input: "[null, undefined, 0, false]", expected: 4, description: "Falsy elements" }
          ]
        }
      ],
      "Loops": [
        {
          id: "loop-1",
          title: "Count to N",
          description: "Write a function that takes a number n and returns an array containing all numbers from 1 to n (inclusive).",
          hint: "Use a for loop starting from 1 and push each number to an array.",
          starterCode: "function countToN(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "5", expected: [1, 2, 3, 4, 5], description: "Count to 5" },
            { input: "1", expected: [1], description: "Count to 1" },
            { input: "0", expected: [], description: "Count to 0" },
            { input: "3", expected: [1, 2, 3], description: "Count to 3" }
          ]
        },
        {
          id: "loop-2",
          title: "Even Numbers Only",
          description: "Write a function that takes an array and returns a new array containing only the even numbers.",
          hint: "Use the modulo operator (%) to check if a number is even. A number is even if number % 2 === 0.",
          starterCode: "function getEvenNumbers(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5, 6]", expected: [2, 4, 6], description: "Mixed numbers" },
            { input: "[1, 3, 5]", expected: [], description: "All odd numbers" },
            { input: "[2, 4, 6]", expected: [2, 4, 6], description: "All even numbers" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "loop-3",
          title: "Multiplication Table",
          description: "Write a function that generates a multiplication table for a given number up to 10.",
          hint: "Use a for loop from 1 to 10 and multiply each number by the input.",
          starterCode: "function multiplicationTable(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "3", expected: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30], description: "Table of 3" },
            { input: "5", expected: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], description: "Table of 5" },
            { input: "1", expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], description: "Table of 1" },
            { input: "0", expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "Table of 0" }
          ]
        },
        {
          id: "loop-4",
          title: "Count Vowels",
          description: "Write a function that counts the number of vowels (a, e, i, o, u) in a string.",
          hint: "Loop through each character and check if it's a vowel. Don't forget to handle both uppercase and lowercase.",
          starterCode: "function countVowels(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: 2, description: "Two vowels" },
            { input: "'JavaScript'", expected: 3, description: "Mixed case" },
            { input: "'xyz'", expected: 0, description: "No vowels" },
            { input: "'AEIOU'", expected: 5, description: "All vowels uppercase" }
          ]
        },
        {
          id: "loop-5",
          title: "Sum of Squares",
          description: "Write a function that calculates the sum of squares of numbers from 1 to n.",
          hint: "Use a for loop and add the square of each number to a running total.",
          starterCode: "function sumOfSquares(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "3", expected: 14, description: "1² + 2² + 3² = 14" },
            { input: "4", expected: 30, description: "1² + 2² + 3² + 4² = 30" },
            { input: "1", expected: 1, description: "Just 1²" },
            { input: "0", expected: 0, description: "No numbers to square" }
          ]
        },
        {
          id: "loop-6",
          title: "Reverse String",
          description: "Write a function that reverses a string using a loop (don't use built-in reverse methods).",
          hint: "Loop through the string from the end to the beginning and build a new string.",
          starterCode: "function reverseString(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: "olleh", description: "Basic string" },
            { input: "'JavaScript'", expected: "tpircSavaJ", description: "Longer string" },
            { input: "'a'", expected: "a", description: "Single character" },
            { input: "''", expected: "", description: "Empty string" }
          ]
        },
        {
          id: "loop-7",
          title: "Find Prime Numbers",
          description: "Write a function that finds all prime numbers up to a given number n.",
          hint: "A prime number is only divisible by 1 and itself. Check each number by testing divisibility.",
          starterCode: "function findPrimes(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "10", expected: [2, 3, 5, 7], description: "Primes up to 10" },
            { input: "20", expected: [2, 3, 5, 7, 11, 13, 17, 19], description: "Primes up to 20" },
            { input: "2", expected: [2], description: "Just 2" },
            { input: "1", expected: [], description: "No primes up to 1" }
          ]
        }
      ],
      "Strings": [
        {
          id: "str-1",
          title: "String Length",
          description: "Write a function that returns the length of a string without using the built-in length property.",
          hint: "Use a loop to count characters until you reach the end of the string.",
          starterCode: "function getStringLength(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: 5, description: "Five characters" },
            { input: "'JavaScript'", expected: 10, description: "Ten characters" },
            { input: "''", expected: 0, description: "Empty string" },
            { input: "'a'", expected: 1, description: "Single character" }
          ]
        },
        {
          id: "str-2",
          title: "First Character",
          description: "Write a function that returns the first character of a string. Return empty string if input is empty.",
          hint: "Access the character at index 0, but check if the string is not empty first.",
          starterCode: "function firstCharacter(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: "h", description: "First of 'hello'" },
            { input: "'JavaScript'", expected: "J", description: "First of 'JavaScript'" },
            { input: "''", expected: "", description: "Empty string" },
            { input: "'a'", expected: "a", description: "Single character" }
          ]
        },
        {
          id: "str-3",
          title: "Uppercase First Letter",
          description: "Write a function that capitalizes the first letter of a string and makes the rest lowercase.",
          hint: "Use charAt(0).toUpperCase() for the first character and slice(1).toLowerCase() for the rest.",
          starterCode: "function capitalizeFirst(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: "Hello", description: "Capitalize 'hello'" },
            { input: "'jAVAsCRIPT'", expected: "Javascript", description: "Fix 'jAVAsCRIPT'" },
            { input: "'a'", expected: "A", description: "Single character" },
            { input: "''", expected: "", description: "Empty string" }
          ]
        },
        {
          id: "str-4",
          title: "Count Character",
          description: "Write a function that counts how many times a specific character appears in a string.",
          hint: "Loop through the string and increment a counter when you find the target character.",
          starterCode: "function countCharacter(str, char) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello', 'l'", expected: 2, description: "Count 'l' in 'hello'" },
            { input: "'JavaScript', 'a'", expected: 2, description: "Count 'a' in 'JavaScript'" },
            { input: "'test', 'x'", expected: 0, description: "Character not found" },
            { input: "'aaa', 'a'", expected: 3, description: "All same character" }
          ]
        },
        {
          id: "str-5",
          title: "Remove Spaces",
          description: "Write a function that removes all spaces from a string.",
          hint: "You can use replace() with a regular expression, or loop through and build a new string without spaces.",
          starterCode: "function removeSpaces(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello world'", expected: "helloworld", description: "Remove single space" },
            { input: "'Java Script'", expected: "JavaScript", description: "Remove space in middle" },
            { input: "'  test  '", expected: "test", description: "Remove leading and trailing spaces" },
            { input: "'nospaces'", expected: "nospaces", description: "No spaces to remove" }
          ]
        }
      ]
    },
    "Intermediate": {
      "Objects": [
        {
          id: "obj-1",
          title: "Object Property Sum",
          description: "Write a function that takes an object with numeric values and returns the sum of all values.",
          hint: "Use Object.values() to get all values, then sum them up.",
          starterCode: "function sumObjectValues(obj) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2, c: 3}", expected: 6, description: "Simple object" },
            { input: "{x: 10, y: -5, z: 15}", expected: 20, description: "Mixed positive and negative" },
            { input: "{}", expected: 0, description: "Empty object" },
            { input: "{single: 42}", expected: 42, description: "Single property" }
          ]
        },
        {
          id: "obj-2",
          title: "Count Object Properties",
          description: "Write a function that counts the number of properties in an object.",
          hint: "Use Object.keys() to get all property names, then check the length.",
          starterCode: "function countProperties(obj) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2, c: 3}", expected: 3, description: "Three properties" },
            { input: "{}", expected: 0, description: "Empty object" },
            { input: "{name: 'John', age: 30}", expected: 2, description: "Two properties" },
            { input: "{single: true}", expected: 1, description: "Single property" }
          ]
        },
        {
          id: "obj-3",
          title: "Get Object Keys",
          description: "Write a function that returns an array of all keys in an object.",
          hint: "Use Object.keys() method or iterate through the object using for...in loop.",
          starterCode: "function getObjectKeys(obj) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2, c: 3}", expected: ["a", "b", "c"], description: "Three keys" },
            { input: "{name: 'John', age: 30}", expected: ["name", "age"], description: "String keys" },
            { input: "{}", expected: [], description: "Empty object" },
            { input: "{x: 10}", expected: ["x"], description: "Single key" }
          ]
        },
        {
          id: "obj-4",
          title: "Object Has Property",
          description: "Write a function that checks if an object has a specific property.",
          hint: "Use the 'in' operator or hasOwnProperty() method.",
          starterCode: "function hasProperty(obj, prop) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2}, 'a'", expected: true, description: "Property exists" },
            { input: "{name: 'John', age: 30}, 'email'", expected: false, description: "Property doesn't exist" },
            { input: "{}, 'test'", expected: false, description: "Empty object" },
            { input: "{x: undefined}, 'x'", expected: true, description: "Property with undefined value" }
          ]
        },
        {
          id: "obj-5",
          title: "Merge Objects",
          description: "Write a function that merges two objects into a new object. If both objects have the same key, use the value from the second object.",
          hint: "Use Object.assign() or the spread operator to merge objects.",
          starterCode: "function mergeObjects(obj1, obj2) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2}, {c: 3, d: 4}", expected: {a: 1, b: 2, c: 3, d: 4}, description: "No overlapping keys" },
            { input: "{a: 1, b: 2}, {b: 3, c: 4}", expected: {a: 1, b: 3, c: 4}, description: "Overlapping keys" },
            { input: "{}, {a: 1}", expected: {a: 1}, description: "Empty first object" },
            { input: "{a: 1}, {}", expected: {a: 1}, description: "Empty second object" }
          ]
        },
        {
          id: "obj-6",
          title: "Object to Array",
          description: "Write a function that converts an object to an array of [key, value] pairs.",
          hint: "Use Object.entries() or iterate through the object and build the array manually.",
          starterCode: "function objectToArray(obj) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2}", expected: [["a", 1], ["b", 2]], description: "Simple object" },
            { input: "{name: 'John', age: 30}", expected: [["name", "John"], ["age", 30]], description: "Mixed types" },
            { input: "{}", expected: [], description: "Empty object" },
            { input: "{x: true}", expected: [["x", true]], description: "Single property" }
          ]
        },
        {
          id: "obj-7",
          title: "Filter Object by Value",
          description: "Write a function that creates a new object containing only properties whose values are greater than a given threshold.",
          hint: "Iterate through the object and only include properties that meet the condition.",
          starterCode: "function filterObjectByValue(obj, threshold) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 5, c: 3}, 2", expected: {b: 5, c: 3}, description: "Filter values > 2" },
            { input: "{x: 10, y: 1, z: 8}, 5", expected: {x: 10, z: 8}, description: "Filter values > 5" },
            { input: "{a: 1, b: 2}, 10", expected: {}, description: "No values meet threshold" },
            { input: "{}, 0", expected: {}, description: "Empty object" }
          ]
        }
      ],
      "Functions": [
        {
          id: "func-1",
          title: "Function Composition",
          description: "Write a function that takes two functions and returns a new function that applies them in sequence (compose).",
          hint: "Return a function that calls the first function with the input, then calls the second function with that result.",
          starterCode: "function compose(f1, f2) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "(x => x * 2), (x => x + 1)", expected: "function", description: "Should return a function" },
          ]
        },
        {
          id: "func-2",
          title: "Curry Function",
          description: "Write a function that takes a function and returns a curried version of it.",
          hint: "Return a function that collects arguments until it has enough, then calls the original function.",
          starterCode: "function curry(fn) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "(a, b, c) => a + b + c", expected: "function", description: "Should return a function" },
          ]
        },
        {
          id: "func-3",
          title: "Memoization",
          description: "Write a function that memoizes (caches) the results of expensive function calls.",
          hint: "Use an object or Map to store previously computed results based on the input.",
          starterCode: "function memoize(fn) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "x => x * x", expected: "function", description: "Should return a function" },
          ]
        },
        {
          id: "func-4",
          title: "Partial Application",
          description: "Write a function that partially applies arguments to another function.",
          hint: "Return a function that combines the pre-applied arguments with new arguments.",
          starterCode: "function partial(fn, ...args1) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "(a, b, c) => a + b + c, 1, 2", expected: "function", description: "Should return a function" },
          ]
        }
      ],
      "Recursion": [
        {
          id: "rec-1",
          title: "Factorial",
          description: "Write a recursive function that calculates the factorial of a positive integer n. Factorial of n (n!) is n × (n-1) × (n-2) × ... × 1.",
          hint: "Base case: factorial of 0 or 1 is 1. Recursive case: n * factorial(n-1).",
          starterCode: "function factorial(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "5", expected: 120, description: "5! = 5 × 4 × 3 × 2 × 1" },
            { input: "0", expected: 1, description: "0! = 1 by definition" },
            { input: "1", expected: 1, description: "1! = 1" },
            { input: "4", expected: 24, description: "4! = 4 × 3 × 2 × 1" }
          ]
        },
        {
          id: "rec-2",
          title: "Fibonacci",
          description: "Write a recursive function to find the nth Fibonacci number. The Fibonacci sequence starts with 0, 1 and each subsequent number is the sum of the previous two.",
          hint: "Base cases: fib(0) = 0, fib(1) = 1. Recursive case: fib(n) = fib(n-1) + fib(n-2).",
          starterCode: "function fibonacci(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "0", expected: 0, description: "First Fibonacci number" },
            { input: "1", expected: 1, description: "Second Fibonacci number" },
            { input: "5", expected: 5, description: "Sixth Fibonacci number" },
            { input: "8", expected: 21, description: "Ninth Fibonacci number" }
          ]
        },
        {
          id: "rec-3",
          title: "Power Function",
          description: "Write a recursive function that calculates base raised to the power of exponent (base^exponent).",
          hint: "Base case: any number to the power of 0 is 1. Recursive case: base * power(base, exponent-1).",
          starterCode: "function power(base, exponent) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "2, 3", expected: 8, description: "2^3 = 8" },
            { input: "5, 0", expected: 1, description: "5^0 = 1" },
            { input: "3, 4", expected: 81, description: "3^4 = 81" },
            { input: "10, 2", expected: 100, description: "10^2 = 100" }
          ]
        },
        {
          id: "rec-4",
          title: "Sum of Digits",
          description: "Write a recursive function that calculates the sum of all digits in a positive integer.",
          hint: "Base case: if number is less than 10, return the number. Recursive case: last digit + sum of remaining digits.",
          starterCode: "function sumOfDigits(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "123", expected: 6, description: "1 + 2 + 3 = 6" },
            { input: "456", expected: 15, description: "4 + 5 + 6 = 15" },
            { input: "9", expected: 9, description: "Single digit" },
            { input: "1000", expected: 1, description: "1 + 0 + 0 + 0 = 1" }
          ]
        },
        {
          id: "rec-5",
          title: "Array Sum Recursive",
          description: "Write a recursive function that calculates the sum of all elements in an array.",
          hint: "Base case: empty array returns 0. Recursive case: first element + sum of rest of array.",
          starterCode: "function recursiveSum(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: 15, description: "Sum of 1 to 5" },
            { input: "[10, 20, 30]", expected: 60, description: "Sum of multiples of 10" },
            { input: "[]", expected: 0, description: "Empty array" },
            { input: "[42]", expected: 42, description: "Single element" }
          ]
        },
        {
          id: "rec-6",
          title: "Palindrome Check",
          description: "Write a recursive function that checks if a string is a palindrome (reads the same forwards and backwards).",
          hint: "Base case: empty string or single character is a palindrome. Recursive case: first and last characters match and middle is palindrome.",
          starterCode: "function isPalindrome(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'racecar'", expected: true, description: "Classic palindrome" },
            { input: "'hello'", expected: false, description: "Not a palindrome" },
            { input: "'a'", expected: true, description: "Single character" },
            { input: "'madam'", expected: true, description: "Another palindrome" }
          ]
        }
      ],
      "Array Methods": [
        {
          id: "arr-methods-1",
          title: "Custom Map Function",
          description: "Implement your own version of the Array.map() method that applies a function to each element.",
          hint: "Create a new array and iterate through the original array, applying the function to each element.",
          starterCode: "function customMap(arr, callback) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3], x => x * 2", expected: [2, 4, 6], description: "Double each number" },
            { input: "['a', 'b', 'c'], x => x.toUpperCase()", expected: ['A', 'B', 'C'], description: "Uppercase strings" },
            { input: "[], x => x", expected: [], description: "Empty array" },
            { input: "[5], x => x + 1", expected: [6], description: "Single element" }
          ]
        },
        {
          id: "arr-methods-2",
          title: "Custom Filter Function",
          description: "Implement your own version of the Array.filter() method that returns elements that pass a test.",
          hint: "Create a new array and only add elements that make the callback function return true.",
          starterCode: "function customFilter(arr, callback) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5], x => x % 2 === 0", expected: [2, 4], description: "Filter even numbers" },
            { input: "['apple', 'banana', 'cherry'], x => x.length > 5", expected: ['banana', 'cherry'], description: "Filter by length" },
            { input: "[1, 2, 3], x => x > 10", expected: [], description: "No elements pass test" },
            { input: "[], x => true", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "arr-methods-3",
          title: "Custom Reduce Function",
          description: "Implement your own version of the Array.reduce() method that reduces an array to a single value.",
          hint: "Start with an accumulator value and iterate through the array, updating the accumulator with each element.",
          starterCode: "function customReduce(arr, callback, initialValue) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4], (acc, curr) => acc + curr, 0", expected: 10, description: "Sum array elements" },
            { input: "[1, 2, 3], (acc, curr) => acc * curr, 1", expected: 6, description: "Multiply array elements" },
            { input: "['a', 'b', 'c'], (acc, curr) => acc + curr, ''", expected: "abc", description: "Concatenate strings" },
            { input: "[], (acc, curr) => acc + curr, 5", expected: 5, description: "Empty array with initial value" }
          ]
        },
        {
          id: "arr-methods-4",
          title: "Custom Find Function",
          description: "Implement your own version of the Array.find() method that returns the first element that passes a test.",
          hint: "Iterate through the array and return the first element that makes the callback return true.",
          starterCode: "function customFind(arr, callback) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5], x => x > 3", expected: 4, description: "Find first number > 3" },
            { input: "['apple', 'banana', 'cherry'], x => x.startsWith('b')", expected: "banana", description: "Find string starting with 'b'" },
            { input: "[1, 2, 3], x => x > 10", expected: undefined, description: "No element found" },
            { input: "[], x => true", expected: undefined, description: "Empty array" }
          ]
        }
      ]
    },
    "Advanced": {
      "Algorithms": [
        {
          id: "alg-1",
          title: "Binary Search",
          description: "Implement binary search to find the index of a target value in a sorted array. Return -1 if not found.",
          hint: "Use two pointers (left and right). Compare the middle element with the target and adjust the search range accordingly.",
          starterCode: "function binarySearch(arr, target) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5, 6, 7, 8, 9], 5", expected: 4, description: "Target found in middle" },
            { input: "[1, 3, 5, 7, 9], 7", expected: 3, description: "Target found" },
            { input: "[1, 3, 5, 7, 9], 4", expected: -1, description: "Target not found" },
            { input: "[2, 4, 6], 2", expected: 0, description: "Target at beginning" }
          ]
        },
        {
          id: "alg-2",
          title: "Bubble Sort",
          description: "Implement the bubble sort algorithm to sort an array of numbers in ascending order.",
          hint: "Compare adjacent elements and swap them if they're in wrong order. Repeat until no swaps are needed.",
          starterCode: "function bubbleSort(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[64, 34, 25, 12, 22, 11, 90]", expected: [11, 12, 22, 25, 34, 64, 90], description: "Unsorted array" },
            { input: "[5, 2, 8, 1, 9]", expected: [1, 2, 5, 8, 9], description: "Random order" },
            { input: "[1, 2, 3, 4, 5]", expected: [1, 2, 3, 4, 5], description: "Already sorted" },
            { input: "[3]", expected: [3], description: "Single element" }
          ]
        },
        {
          id: "alg-3",
          title: "Quick Sort",
          description: "Implement the quicksort algorithm to sort an array of numbers in ascending order.",
          hint: "Choose a pivot, partition the array around it, then recursively sort the sub-arrays.",
          starterCode: "function quickSort(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[3, 6, 8, 10, 1, 2, 1]", expected: [1, 1, 2, 3, 6, 8, 10], description: "Unsorted with duplicates" },
            { input: "[5, 2, 8, 1, 9]", expected: [1, 2, 5, 8, 9], description: "Random order" },
            { input: "[1]", expected: [1], description: "Single element" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "alg-4",
          title: "Merge Sort",
          description: "Implement the merge sort algorithm to sort an array of numbers in ascending order.",
          hint: "Divide the array into halves, recursively sort each half, then merge the sorted halves.",
          starterCode: "function mergeSort(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[38, 27, 43, 3, 9, 82, 10]", expected: [3, 9, 10, 27, 38, 43, 82], description: "Unsorted array" },
            { input: "[5, 2, 8, 1, 9]", expected: [1, 2, 5, 8, 9], description: "Random order" },
            { input: "[1, 2, 3]", expected: [1, 2, 3], description: "Already sorted" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "alg-5",
          title: "Linear Search",
          description: "Implement linear search to find the index of a target value in an array. Return -1 if not found.",
          hint: "Iterate through the array from start to end, checking each element against the target.",
          starterCode: "function linearSearch(arr, target) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[4, 2, 7, 1, 9, 3], 7", expected: 2, description: "Target found" },
            { input: "[1, 3, 5, 7, 9], 4", expected: -1, description: "Target not found" },
            { input: "[5], 5", expected: 0, description: "Single element found" },
            { input: "[], 1", expected: -1, description: "Empty array" }
          ]
        },
        {
          id: "alg-6",
          title: "Selection Sort",
          description: "Implement the selection sort algorithm to sort an array of numbers in ascending order.",
          hint: "Find the minimum element and swap it with the first element, then repeat for the rest of the array.",
          starterCode: "function selectionSort(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[64, 25, 12, 22, 11]", expected: [11, 12, 22, 25, 64], description: "Unsorted array" },
            { input: "[5, 2, 8, 1, 9]", expected: [1, 2, 5, 8, 9], description: "Random order" },
            { input: "[1, 2, 3]", expected: [1, 2, 3], description: "Already sorted" },
            { input: "[3]", expected: [3], description: "Single element" }
          ]
        },
        {
          id: "alg-7",
          title: "Insertion Sort",
          description: "Implement the insertion sort algorithm to sort an array of numbers in ascending order.",
          hint: "Build the sorted array one element at a time by inserting each element into its correct position.",
          starterCode: "function insertionSort(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[5, 2, 4, 6, 1, 3]", expected: [1, 2, 3, 4, 5, 6], description: "Unsorted array" },
            { input: "[31, 41, 59, 26, 41, 58]", expected: [26, 31, 41, 41, 58, 59], description: "With duplicates" },
            { input: "[1]", expected: [1], description: "Single element" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        }
      ],
      "Data Structures": [
        {
          id: "ds-1",
          title: "Stack Implementation",
          description: "Implement a Stack data structure with push, pop, peek, and isEmpty methods.",
          hint: "Use an array to store elements. Push adds to the end, pop removes from the end.",
          starterCode: "class Stack {\n  constructor() {\n    // Your code here\n  }\n  \n  push(element) {\n    // Your code here\n  }\n  \n  pop() {\n    // Your code here\n  }\n  \n  peek() {\n    // Your code here\n  }\n  \n  isEmpty() {\n    // Your code here\n  }\n}",
          testCases: [
            { input: "new Stack()", expected: "object", description: "Create stack instance" },
          ]
        },
        {
          id: "ds-2",
          title: "Queue Implementation",
          description: "Implement a Queue data structure with enqueue, dequeue, front, and isEmpty methods.",
          hint: "Use an array to store elements. Enqueue adds to the end, dequeue removes from the beginning.",
          starterCode: "class Queue {\n  constructor() {\n    // Your code here\n  }\n  \n  enqueue(element) {\n    // Your code here\n  }\n  \n  dequeue() {\n    // Your code here\n  }\n  \n  front() {\n    // Your code here\n  }\n  \n  isEmpty() {\n    // Your code here\n  }\n}",
          testCases: [
            { input: "new Queue()", expected: "object", description: "Create queue instance" },
          ]
        },
        {
          id: "ds-3",
          title: "Linked List Implementation",
          description: "Implement a simple Linked List with append, prepend, and find methods.",
          hint: "Create a Node class first, then implement the LinkedList class that manages nodes.",
          starterCode: "class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n  \n  append(data) {\n    // Your code here\n  }\n  \n  prepend(data) {\n    // Your code here\n  }\n  \n  find(data) {\n    // Your code here\n  }\n}",
          testCases: [
            { input: "new LinkedList()", expected: "object", description: "Create linked list instance" },
          ]
        },
        {
          id: "ds-4",
          title: "Binary Tree Traversal",
          description: "Implement in-order traversal for a binary tree.",
          hint: "For in-order traversal: visit left subtree, visit root, visit right subtree.",
          starterCode: "class TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nfunction inorderTraversal(root) {\n  // Your code here\n}",
          testCases: [
            { input: "null", expected: [], description: "Empty tree" },
          ]
        },
        {
          id: "ds-5",
          title: "Hash Table Implementation",
          description: "Implement a simple Hash Table with set, get, and remove methods.",
          hint: "Use an array of buckets and a hash function to determine where to store key-value pairs.",
          starterCode: "class HashTable {\n  constructor(size = 10) {\n    this.size = size;\n    this.buckets = new Array(size);\n  }\n  \n  hash(key) {\n    // Your code here\n  }\n  \n  set(key, value) {\n    // Your code here\n  }\n  \n  get(key) {\n    // Your code here\n  }\n  \n  remove(key) {\n    // Your code here\n  }\n}",
          testCases: [
            { input: "new HashTable()", expected: "object", description: "Create hash table instance" },
          ]
        }
      ],
      "Dynamic Programming": [
        {
          id: "dp-1",
          title: "Fibonacci with Memoization",
          description: "Implement the Fibonacci sequence using dynamic programming with memoization to improve performance.",
          hint: "Store previously calculated values in an object or array to avoid recalculating them.",
          starterCode: "function fibonacciMemo(n, memo = {}) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "10", expected: 55, description: "10th Fibonacci number" },
            { input: "0", expected: 0, description: "0th Fibonacci number" },
            { input: "1", expected: 1, description: "1st Fibonacci number" },
            { input: "15", expected: 610, description: "15th Fibonacci number" }
          ]
        },
        {
          id: "dp-2",
          title: "Climbing Stairs",
          description: "You're climbing stairs and can take either 1 or 2 steps at a time. How many distinct ways can you climb n stairs?",
          hint: "This is similar to Fibonacci. The number of ways to reach step n is the sum of ways to reach step n-1 and n-2.",
          starterCode: "function climbStairs(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "2", expected: 2, description: "2 stairs: 1+1 or 2" },
            { input: "3", expected: 3, description: "3 stairs: 1+1+1, 1+2, or 2+1" },
            { input: "4", expected: 5, description: "4 stairs: 5 different ways" },
            { input: "1", expected: 1, description: "1 stair: only one way" }
          ]
        },
        {
          id: "dp-3",
          title: "Coin Change",
          description: "Given coins of different denominations and a total amount, find the minimum number of coins needed to make that amount.",
          hint: "Use dynamic programming. For each amount, try each coin and take the minimum.",
          starterCode: "function coinChange(coins, amount) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 3, 4], 6", expected: 2, description: "6 = 3 + 3" },
            { input: "[2], 3", expected: -1, description: "Cannot make 3 with only 2s" },
            { input: "[1, 2, 5], 11", expected: 3, description: "11 = 5 + 5 + 1" },
            { input: "[1], 0", expected: 0, description: "Amount 0 needs 0 coins" }
          ]
        },
        {
          id: "dp-4",
          title: "Longest Common Subsequence",
          description: "Find the length of the longest common subsequence between two strings.",
          hint: "Use a 2D array to store results. If characters match, add 1 to diagonal. Otherwise, take max of left or top.",
          starterCode: "function longestCommonSubsequence(text1, text2) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'abcde', 'ace'", expected: 3, description: "LCS is 'ace'" },
            { input: "'abc', 'abc'", expected: 3, description: "Identical strings" },
            { input: "'abc', 'def'", expected: 0, description: "No common subsequence" },
            { input: "'', 'abc'", expected: 0, description: "Empty string" }
          ]
        },
        {
          id: "dp-5",
          title: "Maximum Subarray Sum",
          description: "Find the contiguous subarray with the largest sum (Kadane's algorithm).",
          hint: "Keep track of the maximum sum ending at each position. The answer is the maximum of all these values.",
          starterCode: "function maxSubarraySum(nums) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[-2, 1, -3, 4, -1, 2, 1, -5, 4]", expected: 6, description: "Subarray [4,-1,2,1] has sum 6" },
            { input: "[1]", expected: 1, description: "Single element" },
            { input: "[5, 4, -1, 7, 8]", expected: 23, description: "All positive except one" },
            { input: "[-1, -2, -3]", expected: -1, description: "All negative numbers" }
          ]
        }
      ],
      "Graph Algorithms": [
        {
          id: "graph-1",
          title: "Depth-First Search",
          description: "Implement depth-first search (DFS) for a graph represented as an adjacency list.",
          hint: "Use recursion or a stack. Mark visited nodes to avoid cycles.",
          starterCode: "function dfs(graph, start, visited = new Set()) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{A: ['B', 'C'], B: ['D'], C: ['E'], D: [], E: []}, 'A'", expected: ['A', 'B', 'D', 'C', 'E'], description: "Simple graph traversal" },
          ]
        },
        {
          id: "graph-2",
          title: "Breadth-First Search",
          description: "Implement breadth-first search (BFS) for a graph represented as an adjacency list.",
          hint: "Use a queue to process nodes level by level. Mark visited nodes to avoid cycles.",
          starterCode: "function bfs(graph, start) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{A: ['B', 'C'], B: ['D'], C: ['E'], D: [], E: []}, 'A'", expected: ['A', 'B', 'C', 'D', 'E'], description: "Level-order traversal" },
          ]
        },
        {
          id: "graph-3",
          title: "Find Path Between Nodes",
          description: "Find if there's a path between two nodes in a graph using BFS.",
          hint: "Use BFS and check if you can reach the target node from the start node.",
          starterCode: "function hasPath(graph, start, target) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{A: ['B'], B: ['C'], C: []}, 'A', 'C'", expected: true, description: "Path exists A->B->C" },
            { input: "{A: ['B'], B: [], C: []}, 'A', 'C'", expected: false, description: "No path from A to C" },
            { input: "{A: ['A']}, 'A', 'A'", expected: true, description: "Self loop" },
          ]
        },
        {
          id: "graph-4",
          title: "Shortest Path Length",
          description: "Find the shortest path length between two nodes in an unweighted graph.",
          hint: "Use BFS and keep track of the distance/level for each node.",
          starterCode: "function shortestPath(graph, start, target) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{A: ['B', 'C'], B: ['D'], C: ['D'], D: []}, 'A', 'D'", expected: 2, description: "Shortest path A->B->D or A->C->D" },
            { input: "{A: ['B'], B: ['C'], C: []}, 'A', 'C'", expected: 2, description: "Path A->B->C" },
            { input: "{A: [], B: []}, 'A', 'B'", expected: -1, description: "No path exists" },
          ]
        }
      ],
      "String Algorithms": [
        {
          id: "str-alg-1",
          title: "Longest Palindromic Substring",
          description: "Find the longest palindromic substring in a given string.",
          hint: "For each character, expand around it to find the longest palindrome centered at that position.",
          starterCode: "function longestPalindrome(s) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'babad'", expected: "bab", description: "Either 'bab' or 'aba'" },
            { input: "'cbbd'", expected: "bb", description: "Longest palindrome is 'bb'" },
            { input: "'a'", expected: "a", description: "Single character" },
            { input: "'ac'", expected: "a", description: "No palindrome longer than 1" }
          ]
        },
        {
          id: "str-alg-2",
          title: "Valid Anagram",
          description: "Check if two strings are anagrams of each other (contain the same characters with the same frequency).",
          hint: "Count the frequency of each character in both strings and compare, or sort both strings and compare.",
          starterCode: "function isAnagram(s, t) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'anagram', 'nagaram'", expected: true, description: "Valid anagram" },
            { input: "'rat', 'car'", expected: false, description: "Not an anagram" },
            { input: "'listen', 'silent'", expected: true, description: "Another valid anagram" },
            { input: "'a', 'ab'", expected: false, description: "Different lengths" }
          ]
        },
        {
          id: "str-alg-3",
          title: "String Compression",
          description: "Compress a string by replacing repeated characters with the character followed by the count.",
          hint: "Iterate through the string and count consecutive characters. Add character and count to result.",
          starterCode: "function compressString(s) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'aabcccccaaa'", expected: "a2b1c5a3", description: "Compress repeated characters" },
            { input: "'abcdef'", expected: "a1b1c1d1e1f1", description: "No repeated characters" },
            { input: "'aaa'", expected: "a3", description: "All same character" },
            { input: "''", expected: "", description: "Empty string" }
          ]
        },
        {
          id: "str-alg-4",
          title: "Longest Substring Without Repeating Characters",
          description: "Find the length of the longest substring without repeating characters.",
          hint: "Use sliding window technique with two pointers and a set to track characters in current window.",
          starterCode: "function lengthOfLongestSubstring(s) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'abcabcbb'", expected: 3, description: "Longest is 'abc'" },
            { input: "'bbbbb'", expected: 1, description: "All same character" },
            { input: "'pwwkew'", expected: 3, description: "Longest is 'wke'" },
            { input: "''", expected: 0, description: "Empty string" }
          ]
        }
      ]
    }
  }
};