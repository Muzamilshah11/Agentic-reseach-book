---
title: 'Environment Setup'
---

# Environment Setup

This section provides detailed instructions for setting up your development environment to work with agentic AI systems.

## Prerequisites

Before beginning your journey with agentic AI systems, ensure you have the following prerequisites installed:

- Node.js (v18 or higher)
- Python 3.9+
- Git version control system
- A modern web browser
- Basic knowledge of TypeScript/JavaScript

## Development Tools

### Docusaurus Documentation Framework

This documentation site is built with Docusaurus, a modern static site generator. To work with the documentation:

```bash
npm install
npm start
```

### Qwen CLI Integration

For dynamic content generation, we use the Qwen CLI:

```bash
# Install Qwen CLI globally
npm install -g @qwen/cli

# Generate content based on specifications
qwen generate --spec path/to/specification.md
```

### SpecifyPlus Workflow

For maintaining specification consistency:

```bash
# Install SpecifyPlus
npm install --save-dev specify-plus

# Validate specifications
specify-plus validate specs/
```

## Recommended IDE Setup

For the best development experience, we recommend:

- VS Code with the following extensions:
  - Docusaurus Markdown
  - TypeScript
  - Mermaid Preview
  - GitLens

## Repository Structure

The project follows a structured approach:

```
docs/ - All documentation content
├── intro.md - Introduction to agentic AI
├── chapter-1/ - Setup and environment
├── chapter-2/ - Constitutional principles
├── chapter-3/ - Specification approaches
├── chapter-4/ - Planning methodologies
├── chapter-5/ - Implementation patterns
├── chapter-6/ - Advanced patterns
├── chapter-7/ - Evaluation techniques
└── chapter-8/ - Future directions

src/ - Custom components and styling
├── components/ - Reusable React components
├── css/ - Custom styles
└── pages/ - Custom pages

blog/ - Research updates and articles
```

## Next Steps

After setting up your environment, proceed to Chapter 2: Constitution to understand the foundational principles that guide our approach to agentic AI development.

## Related Sections

- [Chapter 2: Constitution Framework](../chapter-2/constitution) - Understand the constitutional principles
- [Chapter 3: Specification Process](../chapter-3/specification) - Learn about specification methodologies
- [Chapter 5: Implementation Patterns](../chapter-5/implementation) - Explore implementation best practices