import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check } from 'lucide-react';

const Playground: React.FC = () => {
  const [code, setCode] = useState(`fn main() {
  let name = "World"
  println("Hello, {name}!")
  
  let numbers = [1, 2, 3, 4, 5]
  let doubled = numbers.map(|x| x * 2)
  println("Doubled: {doubled}")
  
  let result = fibonacci(10)
  println("Fibonacci(10) = {result}")
}

fn fibonacci(n: Int) -> Int {
  match n {
    0 | 1 -> n
    _ -> fibonacci(n - 1) + fibonacci(n - 2)
  }
}`);

  const [output, setOutput] = useState(`Hello, World!
Doubled: [2, 4, 6, 8, 10]
Fibonacci(10) = 55`);

  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const runCode = async () => {
    setIsRunning(true);
    // TODO: Implement real Thorn code execution
    // For now, just show a coming soon message
    await new Promise(resolve => setTimeout(resolve, 500));
    setOutput(`⚠️ Playground execution coming soon!

The Thorn playground is currently under development.
For now, you can:
- Write and edit Thorn code
- Copy code examples
- Visit our GitHub to run Thorn locally

Stay tuned for live code execution!`);
    setIsRunning(false);
  };

  const resetCode = () => {
    setCode(`fn main() {
  let name = "World"
  println("Hello, {name}!")
  
  let numbers = [1, 2, 3, 4, 5]
  let doubled = numbers.map(|x| x * 2)
  println("Doubled: {doubled}")
  
  let result = fibonacci(10)
  println("Fibonacci(10) = {result}")
}

fn fibonacci(n: Int) -> Int {
  match n {
    0 | 1 -> n
    _ -> fibonacci(n - 1) + fibonacci(n - 2)
  }
}`);
    setOutput(`Hello, World!
Doubled: [2, 4, 6, 8, 10]
Fibonacci(10) = 55`);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <section id="playground" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Try Thorn Online
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experiment with Thorn directly in your browser. No installation required.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Code Editor */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    main.thorn
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyCode}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                    title="Copy code"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                  <button
                    onClick={resetCode}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    title="Reset code"
                  >
                    <RotateCcw size={18} />
                  </button>
                </div>
              </div>
              <div className="flex-1 p-6">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-96 font-mono text-sm bg-transparent text-gray-900 dark:text-gray-100 resize-none focus:outline-none"
                  placeholder="Write your Thorn code here..."
                  spellCheck={false}
                />
              </div>
            </div>

            {/* Output Panel */}
            <div className="flex-1 flex flex-col border-l border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Output
                </span>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isRunning
                      ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transform hover:scale-105'
                  }`}
                >
                  <Play size={16} />
                  <span>{isRunning ? 'Running...' : 'Run'}</span>
                </button>
              </div>
              <div className="flex-1 p-6">
                <pre className="font-mono text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
                  {output}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Examples */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-200 text-left">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Hello World
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Basic program structure and output
            </p>
          </button>
          <button className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-200 text-left">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Data Types
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Working with different data types
            </p>
          </button>
          <button className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-200 text-left">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Control Flow
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Conditionals and loops
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Playground;