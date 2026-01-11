import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  language = '', 
  title = '',
  showLineNumbers = false 
}) => {
  const codeString = React.Children.toArray(children)[0] as string || '';
  
  return (
    <div className="code-block-wrapper">
      {title && (
        <div className="code-block-title" style={{ 
          backgroundColor: '#f6f8fa', 
          padding: '0.5rem 1rem', 
          borderTopLeftRadius: '0.5rem',
          borderTopRightRadius: '0.5rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          color: '#57606a'
        }}>
          {title}
        </div>
      )}
      <pre 
        className={`language-${language}`}
        style={{ 
          margin: 0,
          borderRadius: title ? '0 0 0.5rem 0.5rem' : '0.5rem',
          overflowX: 'auto'
        }}
      >
        <code 
          className={`language-${language}`}
          style={{ 
            display: 'block',
            padding: '1rem',
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            fontSize: '0.875rem',
            lineHeight: '1.5'
          }}
        >
          {codeString}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;