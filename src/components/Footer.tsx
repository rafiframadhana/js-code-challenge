import { ExternalLink, Github, Globe } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t px-6 py-3 mt-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2">
          {/* Developer Links */}
          <div className="flex items-center justify-center space-x-4">
            {/* GitHub Link */}
            <a
              href="https://github.com/rafiframadhana"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            
            {/* Portfolio Link */}
            <a
              href="https://rafiframadhana.site"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">Portfolio</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2025 Rafif Ramadhana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
