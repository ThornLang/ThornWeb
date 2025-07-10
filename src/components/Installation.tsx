import React, { useState } from 'react';
import { Terminal, Download, Copy, Check, ChevronRight } from 'lucide-react';

const Installation: React.FC = () => {
  const [selectedOS, setSelectedOS] = useState<'windows' | 'macos' | 'linux'>('linux');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const installCommands = {
    windows: 'winget install Thorn.Thorn',
    macos: 'brew install thorn',
    linux: 'curl -fsSL https://install.thorn.dev | sh'
  };

  const copyCommand = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy command:', err);
    }
  };

  const quickStartSteps = [
    {
      step: 1,
      title: 'Install ThornLang',
      description: 'Download and install the ThornLang compiler and tools'
    },
    {
      step: 2,
      title: 'Create a new project',
      description: 'Use the built-in project generator to scaffold your app'
    },
    {
      step: 3,
      title: 'Write your first program',
      description: 'Start coding with ThornLang\'s intuitive syntax'
    },
    {
      step: 4,
      title: 'Run and deploy',
      description: 'Compile and run your application with a single command'
    }
  ];

  return (
    <section id="docs" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get Started with Thorn
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Install Thorn and start building amazing applications in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Installation */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <Terminal className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Installation
              </h3>
            </div>

            {/* OS Selector */}
            <div className="flex space-x-4 mb-6">
              {(['linux', 'macos', 'windows'] as const).map((os) => (
                <button
                  key={os}
                  onClick={() => setSelectedOS(os)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedOS === os
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {os.charAt(0).toUpperCase() + os.slice(1)}
                </button>
              ))}
            </div>

            {/* Command */}
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Terminal</span>
                <button
                  onClick={() => copyCommand(installCommands[selectedOS])}
                  className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {copiedCommand === installCommands[selectedOS] ? (
                    <>
                      <Check size={14} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <code className="text-green-400 font-mono text-sm">
                $ {installCommands[selectedOS]}
              </code>
            </div>

            {/* Verify Installation */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Verify Installation
              </h4>
              <div className="bg-gray-900 dark:bg-gray-700 rounded p-3">
                <code className="text-green-400 font-mono text-sm">
                  $ thorn --version
                </code>
              </div>
            </div>
          </div>

          {/* Quick Start */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <Download className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Quick Start
              </h3>
            </div>

            <div className="space-y-4">
              {quickStartSteps.map((item) => (
                <div key={item.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Create Your First Project
              </h4>
              <div className="space-y-2">
                <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
                  <code className="text-green-400 font-mono text-sm">
                    $ thorn new hello-world
                  </code>
                </div>
                <div className="bg-gray-900 dark:bg-gray-800 rounded p-3">
                  <code className="text-green-400 font-mono text-sm">
                    $ cd hello-world && thorn run
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;