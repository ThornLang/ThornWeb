import React from 'react';
import { Zap, Shield, Cpu, Code, Layers, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Modern Syntax',
      description: 'Clean syntax with $ for functions, intuitive type annotations, and template literals.',
      color: 'text-purple-500'
    },
    {
      icon: Layers,
      title: 'Pattern Matching',
      description: 'Powerful pattern matching with match expressions for elegant control flow.',
      color: 'text-indigo-500'
    },
    {
      icon: Zap,
      title: 'Lambda Expressions',
      description: 'First-class functions with concise lambda syntax for functional programming.',
      color: 'text-yellow-500'
    },
    {
      icon: Shield,
      title: 'Type Annotations',
      description: 'Optional type annotations for better code documentation and future type checking.',
      color: 'text-green-500'
    },
    {
      icon: Cpu,
      title: 'Object-Oriented',
      description: 'Full support for classes with constructors, methods, and inheritance.',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: 'Module System',
      description: 'Built-in module system with import/export for organizing large codebases.',
      color: 'text-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Thorn?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A modern interpreted language that combines functional and object-oriented paradigms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;