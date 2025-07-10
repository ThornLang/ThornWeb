import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import CodeBlock from './CodeBlock';

const CodeExamples: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const examples = [
    {
      title: 'Hello World',
      code: `$ main(): void {
  print("Hello, World!")
}`,
      description: 'Simple and clean syntax for getting started'
    },
    {
      title: 'Functions & Variables',
      code: `$ greet(name: string): string {
  return \`Hello, \${name}!\`
}

// Variable declaration with type annotation
name: string = "Alice"
message: string = greet(name)
print(message)`,
      description: 'Functions use $ symbol, variables use type annotations'
    },
    {
      title: 'Classes',
      code: `class Person {
  name: string
  age: number
  
  $ init(name: string, age: number) {
    this.name = name
    this.age = age
  }
  
  $ greet(): string {
    return \`Hi, I'm \${this.name} and I'm \${this.age} years old\`
  }
}`,
      description: 'Object-oriented programming with classes'
    },
    {
      title: 'Control Flow & Arrays',
      code: `$ fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Arrays and for-in loops
numbers: Array[number] = [1, 2, 3, 4, 5]
for num in numbers {
  print(\`Fibonacci(\${num}) = \${fibonacci(num)}\`)
}`,
      description: 'Conditional logic and array iteration'
    },
    {
      title: 'Lambdas',
      code: `// Lambda function syntax
square = $(x) => x * x
add = $(a, b) => a + b

// Using lambdas with arrays
numbers: Array[number] = [1, 2, 3, 4, 5]
for num in numbers {
  print(\`\${num} squared is \${square(num)}\`)
}`,
      description: 'Lambda expressions for functional programming'
    },
    {
      title: 'Modules',
      code: `// math_utils.thorn
export $ add(a: number, b: number): number {
  return a + b
}

export $ multiply(a: number, b: number): number {
  return a * b
}

// main.thorn
import { add, multiply } from "./math_utils"

result: number = add(5, multiply(3, 4))
print(\`Result: \${result}\`)`,
      description: 'Module system for code organization'
    }
  ];

  const copyToClipboard = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See Thorn in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the clean syntax and powerful features that make Thorn a joy to work with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {example.title}
                  </h3>
                  <button
                    onClick={() => copyToClipboard(example.code, index)}
                    className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check size={16} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {example.description}
                </p>
              </div>
              <div className="p-6">
                <CodeBlock code={example.code} className="text-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;