import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Agentic AI Research Book',
  tagline: 'Comprehensive Documentation for Agentic AI Concepts',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://agentic-ai-documentation.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'agentic-ai-research', // Usually your GitHub org/user name.
  projectName: 'agentic-ai-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/agentic-ai-research/agentic-ai-documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/agentic-ai-research/agentic-ai-documentation/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@docusaurus/theme-mermaid',
      {
        mermaid: {
          theme: 'default',
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      {name: 'keywords', content: 'agentic AI, artificial intelligence, multi-agent systems, AI planning, AI tools, AI research, machine learning'},
      {name: 'author', content: 'Agentic AI Research Project'},
      {name: 'robots', content: 'index, follow'},
      {name: 'og:type', content: 'website'},
      {name: 'og:image', content: 'img/docusaurus-social-card.jpg'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    ...(process.env.NODE_ENV === 'production' && {
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.ALGOLIA_APP_ID || 'YOUR_APP_ID',

        // Public API key: it is safe to commit it
        apiKey: process.env.ALGOLIA_API_KEY || 'YOUR_SEARCH_API_KEY',

        indexName: process.env.ALGOLIA_INDEX_NAME || 'agentic-ai-docs',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'agentic-ai-documentation\\.example\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),
    navbar: {
      title: 'Agentic AI Research Book',
      logo: {
        alt: 'Agentic AI Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'agenticAISidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Research Blog', position: 'left'},
        {
          href: 'https://github.com/Muzamilshah11',
          label: 'My GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: '8-Chapter Guide',
              to: '/docs/category/chapter-1-setup',
            },
          ],
        },
        {
          title: 'Research',
          items: [
            {
              label: 'Research Blog',
              to: '/blog',
            },
            {
              label: 'Agentic AI Papers',
              href: 'https://example.com/agentic-ai-papers',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'My GitHub',
              href: 'https://github.com/Muzamilshah11',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/agentic-ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Created by Muzammil Shah. Agentic AI Research Book. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
