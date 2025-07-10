// Thorn syntax highlighter based on tree-sitter-thorn token definitions

export interface Token {
  type: string;
  value: string;
}

export function tokenizeThorn(code: string): Token[] {
  const tokens: Token[] = [];
  
  // Keywords
  const keywords = new Set([
    'if', 'else', 'while', 'for', 'in', 'return', 'import', 'export', 
    'from', 'class', 'this', 'match', 'void'
  ]);
  
  // Operators
  const operators = /^(==|!=|<=|>=|&&|\|\||<<|>>|\*\*|[+\-*/%<>=!&|^~])/;
  
  // Regular expressions for different token types
  const patterns = [
    { regex: /^\/\/.*$/m, type: 'comment' },
    { regex: /^\/\*[\s\S]*?\*\//m, type: 'comment' },
    { regex: /^@immut\b/, type: 'attribute' },
    { regex: /^\$/, type: 'punctuation.special' },
    { regex: /^(true|false)\b/, type: 'boolean' },
    { regex: /^null\b/, type: 'constant.builtin' },
    { regex: /^[0-9]+(\.[0-9]+)?/, type: 'number' },
    { regex: /^"([^"\\]|\\.)*"/, type: 'string' },
    { regex: /^'([^'\\]|\\.)*'/, type: 'string' },
    { regex: /^`([^`\\]|\\.|\$\{[^}]*\})*`/, type: 'string' },
    { regex: /^[a-zA-Z_][a-zA-Z0-9_]*/, type: 'identifier' },
    { regex: /^[\[\]{}(),;:]/, type: 'punctuation' },
    { regex: /^=>/, type: 'operator' },
    { regex: /^->/, type: 'operator' },
    { regex: operators, type: 'operator' },
    { regex: /^\s+/, type: 'whitespace' },
    { regex: /^./, type: 'text' }
  ];
  
  let remaining = code;
  let lastIdentifier = '';
  
  while (remaining.length > 0) {
    let matched = false;
    
    for (const pattern of patterns) {
      const match = remaining.match(pattern.regex);
      if (match) {
        const value = match[0];
        let type = pattern.type;
        
        // Special handling for identifiers
        if (type === 'identifier') {
          if (keywords.has(value)) {
            type = 'keyword';
          } else if (lastIdentifier === 'class' || lastIdentifier === 'new') {
            type = 'type';
          } else if (remaining.slice(value.length).trimLeft().startsWith('(')) {
            // Check if it's a function call
            type = 'function.call';
          } else if (lastIdentifier === '$') {
            // Function declaration
            type = 'function';
          }
          lastIdentifier = value;
        } else if (type !== 'whitespace') {
          lastIdentifier = '';
        }
        
        tokens.push({ type, value });
        remaining = remaining.slice(value.length);
        matched = true;
        break;
      }
    }
    
    if (!matched) {
      tokens.push({ type: 'text', value: remaining[0] });
      remaining = remaining.slice(1);
    }
  }
  
  return tokens;
}

export function highlightThorn(code: string): string {
  const tokens = tokenizeThorn(code);
  
  const colorMap: { [key: string]: string } = {
    'keyword': 'text-purple-400',
    'function': 'text-blue-400',
    'function.call': 'text-blue-400',
    'type': 'text-green-400',
    'operator': 'text-white',
    'punctuation': 'text-gray-300',
    'punctuation.special': 'text-purple-400',
    'attribute': 'text-pink-400',
    'number': 'text-yellow-400',
    'string': 'text-green-400',
    'boolean': 'text-orange-400',
    'constant.builtin': 'text-orange-400',
    'comment': 'text-gray-500',
    'identifier': 'text-orange-400',
    'whitespace': '',
    'text': 'text-gray-100'
  };
  
  return tokens
    .map(token => {
      const colorClass = colorMap[token.type] || 'text-gray-100';
      if (token.type === 'whitespace') {
        return token.value;
      }
      return `<span class="${colorClass}">${escapeHtml(token.value)}</span>`;
    })
    .join('');
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}