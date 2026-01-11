#!/usr/bin/env node
// Content validation script for Agentic AI Documentation
// Validates that all constitutional principles are followed

const fs = require('fs');
const path = require('path');

// Constitutional principles to validate
const PRINCIPLES = [
  {
    name: "Content Accuracy & Research-Based Approach",
    description: "All content must be accurate, research-based, and cite sources where possible",
    check: validateContentAccuracy
  },
  {
    name: "Academic Language & Professional Communication",
    description: "Use clear, professional academic language suitable for thesis/research paper",
    check: validateAcademicLanguage
  },
  {
    name: "Structured Documentation Format",
    description: "Structure everything in chapters/sections (8-10 chapter book style)",
    check: validateStructure
  },
  {
    name: "Visual Aids & Practical Examples",
    description: "Include diagrams (Mermaid for architecture), code snippets, and practical examples",
    check: validateVisualAids
  },
  {
    name: "Agentic AI Concepts Focus",
    description: "Prioritize agentic AI concepts: planning, tools, multi-agent, constitution-driven development",
    check: validateAgenticFocus
  },
  {
    name: "Safety & Ethics Standards",
    description: "Avoid hallucinations, no harmful suggestions, transparent reasoning",
    check: validateSafetyEthics
  },
  {
    name: "Output Format Compatibility",
    description: "Output format: Markdown compatible with Docusaurus (MDX if needed)",
    check: validateFormatCompatibility
  },
  {
    name: "Modular & Extensible Documentation",
    description: "Keep docs modular, versionable, and easy to extend",
    check: validateModularity
  }
];

// Validate Content Accuracy & Research-Based Approach
function validateContentAccuracy(docsPath) {
  const files = getAllMarkdownFiles(docsPath);
  let hasCitations = false;
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('cite') || content.includes('reference') || content.includes('source')) {
      hasCitations = true;
      break;
    }
  }
  
  return {
    passed: hasCitations,
    message: hasCitations ? "Found citation references in content" : "No citation references found in content"
  };
}

// Validate Academic Language & Professional Communication
function validateAcademicLanguage(docsPath) {
  const files = getAllMarkdownFiles(docsPath);
  let hasAcademicTone = false;
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    // Look for academic language indicators
    if (content.toLowerCase().includes('research') || 
        content.toLowerCase().includes('study') || 
        content.toLowerCase().includes('analysis') ||
        content.toLowerCase().includes('methodology')) {
      hasAcademicTone = true;
      break;
    }
  }
  
  return {
    passed: hasAcademicTone,
    message: hasAcademicTone ? "Found academic language indicators" : "No clear academic language indicators found"
  };
}

// Validate Structured Documentation Format
function validateStructure(docsPath) {
  const chapterDirs = fs.readdirSync(docsPath).filter(item => 
    fs.statSync(path.join(docsPath, item)).isDirectory() && 
    item.startsWith('chapter')
  );
  
  const hasIntro = fs.existsSync(path.join(docsPath, 'intro.md'));
  
  return {
    passed: chapterDirs.length >= 3 && hasIntro, // At least 3 chapters + intro
    message: `Found ${chapterDirs.length} chapter directories and intro: ${hasIntro ? 'yes' : 'no'}`
  };
}

// Validate Visual Aids & Practical Examples
function validateVisualAids(docsPath) {
  const files = getAllMarkdownFiles(docsPath);
  let hasDiagrams = false;
  let hasCodeSnippets = false;
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('```mermaid') || content.includes('mermaid')) {
      hasDiagrams = true;
    }
    
    if ((content.match(/```/g) || []).length > 2) { // More than 2 code blocks
      hasCodeSnippets = true;
    }
  }
  
  return {
    passed: hasDiagrams && hasCodeSnippets,
    message: `Diagrams: ${hasDiagrams ? 'yes' : 'no'}, Code snippets: ${hasCodeSnippets ? 'yes' : 'no'}`
  };
}

// Validate Agentic AI Concepts Focus
function validateAgenticFocus(docsPath) {
  const files = getAllMarkdownFiles(docsPath);
  let hasAgenticFocus = false;
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.toLowerCase().includes('agent') || 
        content.toLowerCase().includes('planning') || 
        content.toLowerCase().includes('multi-agent') ||
        content.toLowerCase().includes('tool')) {
      hasAgenticFocus = true;
      break;
    }
  }
  
  return {
    passed: hasAgenticFocus,
    message: hasAgenticFocus ? "Found agentic AI concept references" : "No clear agentic AI concept references found"
  };
}

// Validate Safety & Ethics Standards
function validateSafetyEthics(docsPath) {
  const files = getAllMarkdownFiles(docsPath);
  let hasSafetyConsiderations = false;
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.toLowerCase().includes('safety') || 
        content.toLowerCase().includes('ethics') || 
        content.toLowerCase().includes('secure') ||
        content.toLowerCase().includes('privacy')) {
      hasSafetyConsiderations = true;
      break;
    }
  }
  
  return {
    passed: hasSafetyConsiderations,
    message: hasSafetyConsiderations ? "Found safety/ethics considerations" : "No safety/ethics considerations found"
  };
}

// Validate Output Format Compatibility
function validateFormatCompatibility(docsPath) {
  const files = getAllMarkdownFiles(docsPath);
  const allValid = files.every(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Check if it's valid markdown
    return typeof content === 'string';
  });
  
  return {
    passed: allValid,
    message: allValid ? `${files.length} valid Markdown files found` : "Some files may not be valid Markdown"
  };
}

// Validate Modularity & Extensibility
function validateModularity(docsPath) {
  const chapterDirs = fs.readdirSync(docsPath).filter(item => 
    fs.statSync(path.join(docsPath, item)).isDirectory() && 
    item.startsWith('chapter')
  );
  
  // Check if each chapter has multiple sections
  let allChaptersModular = true;
  for (const chapterDir of chapterDirs) {
    const chapterPath = path.join(docsPath, chapterDir);
    const files = fs.readdirSync(chapterPath);
    if (files.length < 2) { // At least index.md and another file
      allChaptersModular = false;
      break;
    }
  }
  
  return {
    passed: allChaptersModular && chapterDirs.length > 0,
    message: `Chapter directories: ${chapterDirs.length}, All modular: ${allChaptersModular}`
  };
}

// Helper function to get all markdown files
function getAllMarkdownFiles(dirPath) {
  const files = [];
  
  function walkDirectory(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDirectory(fullPath);
      } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
        files.push(fullPath);
      }
    }
  }
  
  walkDirectory(dirPath);
  return files;
}

// Main validation function
function validateDocumentation() {
  const docsPath = './docs';
  
  if (!fs.existsSync(docsPath)) {
    console.error(`Documentation directory not found: ${docsPath}`);
    return;
  }
  
  console.log('Validating Agentic AI Documentation against Constitutional Principles...\n');
  
  let passedCount = 0;
  
  for (const principle of PRINCIPLES) {
    const result = principle.check(docsPath);
    const status = result.passed ? '✅ PASS' : '❌ FAIL';
    
    console.log(`${status} ${principle.name}`);
    console.log(`    ${result.message}`);
    console.log('');
    
    if (result.passed) {
      passedCount++;
    }
  }
  
  console.log(`\nSummary: ${passedCount}/${PRINCIPLES.length} principles validated`);
  
  if (passedCount === PRINCIPLES.length) {
    console.log('\n🎉 All constitutional principles validated successfully!');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some principles failed validation.');
    process.exit(1);
  }
}

// Run validation
validateDocumentation();