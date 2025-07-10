import React from 'react';
import { ArrowRight, Download, Play } from 'lucide-react';
import CodeBlock from './CodeBlock';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-6">
            Meet{' '}
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text font-angelos transform -skew-x-2" style={{ letterSpacing: '0.02em', fontWeight: '300' }}>
              Thorn
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A modern language blending functional elegance with practical simplicity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a href="https://github.com/ThornLang/JavaThorn" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a href="https://github.com/ThornLang/JavaThorn/releases" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
              <Download size={20} />
              <span>Download</span>
            </a>
            <a href="#playground" className="group flex items-center space-x-2 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200">
              <Play size={20} />
              <span>Try Online</span>
            </a>
          </div>
          
          {/* Hero Code Example */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 text-left overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">hello.thorn</span>
              </div>
              <CodeBlock code={`$ hello(name: string): void {
    print("Hello, " + name + "!")
}

hello("World")
hello("Thorn")`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;