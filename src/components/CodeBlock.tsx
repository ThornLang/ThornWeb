import React from 'react';
import { highlightThorn } from '../utils/thornHighlighter';

interface CodeBlockProps {
  code: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, className = '' }) => {
  const highlightedCode = highlightThorn(code);
  
  return (
    <pre className={`text-sm md:text-base overflow-x-auto ${className}`}>
      <code 
        className="text-gray-100 font-mono"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
};

export default CodeBlock;