import React from 'react';
import Mermaid from 'mdx-mermaid/Mermaid';

interface MermaidDiagramProps {
  chart: string;
  alt?: string;
  className?: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, alt = 'Mermaid diagram', className = '' }) => {
  return (
    <div className={`mermaid-diagram ${className}`} style={{ margin: '1rem 0' }}>
      <Mermaid chart={chart} />
      {alt && (
        <div className="mermaid-diagram-alt" style={{ fontSize: '0.85rem', color: '#666', textAlign: 'center', marginTop: '0.5rem' }}>
          {alt}
        </div>
      )}
    </div>
  );
};

export default MermaidDiagram;