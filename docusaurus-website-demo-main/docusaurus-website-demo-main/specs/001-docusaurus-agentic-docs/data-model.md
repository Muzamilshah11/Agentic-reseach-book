# Data Model: Docusaurus Documentation Site for Agentic AI Systems Research Project

## Overview
This document defines the data structures and content models for the Docusaurus documentation site. It outlines the entities, their attributes, and relationships based on the feature requirements.

## Content Entities

### 1. DocumentationChapter
**Description**: Represents a major section of the documentation following the 8-chapter book-style structure

**Fields**:
- id: string (unique identifier for the chapter)
- title: string (chapter title)
- slug: string (URL-friendly version of title)
- position: number (order in the book sequence: 1-8)
- category: string (main topic area: "Introduction", "Setup", "Constitution", etc.)
- authors: array of strings (contributors to the chapter)
- publishedDate: date (date of publication)
- lastUpdated: date (last modification date)
- summary: string (brief overview of chapter content)
- tags: array of strings (relevant topics and concepts)
- prerequisites: array of strings (other chapters/content that should be read first)

**Validation Rules**:
- title must be 5-100 characters
- position must be between 1-8
- publishedDate must be in the past
- summary must be 50-300 characters

### 2. DocumentationSection
**Description**: Represents a subsection within a chapter

**Fields**:
- id: string (unique identifier for the section)
- chapterId: string (reference to parent chapter)
- title: string (section title)
- slug: string (URL-friendly version of title)
- position: number (order within the chapter)
- content: string (main content in Markdown format)
- authors: array of strings (contributors to the section)
- publishedDate: date (date of publication)
- lastUpdated: date (last modification date)
- relatedSections: array of strings (IDs of related sections)
- difficultyLevel: enum ("beginner", "intermediate", "advanced")

**Validation Rules**:
- title must be 5-100 characters
- position must be positive integer
- content must be valid Markdown
- difficultyLevel must be one of the allowed values

### 3. CodeExample
**Description**: Represents practical code examples integrated throughout the documentation

**Fields**:
- id: string (unique identifier for the example)
- sectionId: string (reference to parent section)
- title: string (descriptive title for the example)
- description: string (explanation of what the code does)
- code: string (actual code snippet)
- language: string (programming language or framework)
- tags: array of strings (relevant concepts demonstrated)
- createdAt: date (creation timestamp)
- updatedAt: date (last update timestamp)
- isExecutable: boolean (whether the example can be run directly)

**Validation Rules**:
- title must be 5-100 characters
- code must be syntactically valid for the specified language
- language must be from approved list (typescript, javascript, python, etc.)

### 4. Diagram
**Description**: Represents Mermaid diagrams that illustrate system architecture and concepts

**Fields**:
- id: string (unique identifier for the diagram)
- sectionId: string (reference to parent section)
- title: string (descriptive title for the diagram)
- description: string (explanation of what the diagram illustrates)
- mermaidCode: string (Mermaid syntax code)
- diagramType: enum ("flowchart", "sequence", "class", "state", "gantt", "pie")
- createdAt: date (creation timestamp)
- updatedAt: date (last update timestamp)

**Validation Rules**:
- title must be 5-100 characters
- mermaidCode must be valid Mermaid syntax
- diagramType must be one of the allowed values

### 5. BlogPost
**Description**: Represents articles and updates related to the Agentic AI Systems Research Project

**Fields**:
- id: string (unique identifier for the post)
- title: string (post title)
- slug: string (URL-friendly version of title)
- author: string (author of the post)
- publishedDate: date (publication date)
- lastUpdated: date (last modification date)
- content: string (main content in Markdown format)
- excerpt: string (summary for listing pages)
- tags: array of strings (relevant topics)
- isFeatured: boolean (whether to highlight in listings)

**Validation Rules**:
- title must be 10-100 characters
- content must be valid Markdown
- publishedDate must be in the past for published posts

### 6. NavigationItem
**Description**: Represents items in the sidebar navigation system

**Fields**:
- id: string (unique identifier for the navigation item)
- label: string (display text for the navigation item)
- href: string (URL path or external link)
- parentId: string (reference to parent item for nested structure)
- position: number (order in the navigation)
- icon: string (optional icon identifier)
- isExternal: boolean (whether this links to an external resource)

**Validation Rules**:
- label must be 2-50 characters
- href must be a valid URL path or external URL
- position must be a non-negative integer

## Relationships

### DocumentationChapter -> DocumentationSection
- One-to-many relationship
- A chapter contains multiple sections
- Sections belong to exactly one chapter

### DocumentationSection -> CodeExample
- One-to-many relationship
- A section can contain multiple code examples
- Code examples belong to exactly one section

### DocumentationSection -> Diagram
- One-to-many relationship
- A section can contain multiple diagrams
- Diagrams belong to exactly one section

### DocumentationSection -> DocumentationSection (related)
- Many-to-many relationship
- Sections can be related to other sections across chapters
- Used for cross-references and suggested reading

## State Transitions

### DocumentationChapter States
- draft → review → published → archived
- Only published chapters are visible to end users
- Archived chapters are kept for historical reference

### BlogPost States
- draft → review → published → archived
- Draft posts are only visible to editors
- Published posts are visible to all users

## Content Validation Rules

### Citation Requirements
- All content claiming research-based facts must include citations
- Citations must follow a consistent format
- External links must be validated periodically

### Academic Language Standards
- Content must use professional academic language
- Complex concepts must be explained with sufficient context
- Terminology must be defined when first introduced

### Quality Assurance
- All code examples must be tested and validated
- Diagrams must accurately represent described concepts
- Cross-references between sections must be verified