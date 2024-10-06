// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ALPS SSG PROTOTYPE',
  tagline: '도큐사우루스를 이용해 쉽고 빠르게 만들자',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  //url: 'https://soonwon-jung.github.io',
  //baseUrl: '/my-website/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  url: 'https://ssg-alps-init.netlify.app/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'soonwon-jung', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ALPS SSG PROTOTYPE',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'alpsFAQSidebar',
            position: 'left',
            label: 'ALPS FAQ🎁',
          },
          {
            type: 'docSidebar',
            sidebarId: 'alpsConventionSidebar',
            position: 'left',
            label: 'ALPS Convention🚀',
          },
          {
            label: '즐겨찾기📌',
            position: 'left',
            items: [
              {
                label: '담당자 안내📢',
                to: '/docs/ALPS/system_contacts',
              },
              {
                label: 'docusaurus 가이드🎫',
                href: 'https://docusaurus.io/docs',
              },
              {
                label: 'ALPS🚚',
                href: 'https://alps.llogis.com/main/pages/sec/authentication',
              },
            ],
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docusaurus Tutorial🎈',
          },
          {to: '/blog', label: '기술 Blog📄', position: 'right'}
        
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'ALPS FAQ🎁',
                to: '/docs/ALPS/system_contacts',
              },
              {
                label: 'ALPS Convention🚀',
                to: '/docs/convention/intro',
              },          
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'ALPS',
                href: 'https://alps.llogis.com/main/pages/sec/authentication',
              },
              {
                label: 'MOIN',
                href: 'https://dwp.lotte.net/',
              },
              {
                label: 'docusaurus',
                href: 'https://docusaurus.io/docs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '기술 Blog📄',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 롯데 이노베이트 ALPS, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      announcementBar: {
        id: 'SSG Celebration',
        content:
        '<b>✨ SSG의 무한한 가능성에 첫 발을 내딛다! | 지금 바로 <a href="/docs/ALPS/system_contacts">ALPS FAQ</a>를 확인하세요! 🚀</b>',
        backgroundColor: '#4CAF50', 
        textColor: '#ffffff',
        isCloseable: true,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'KQNIV3SFYK',

      // Public API key: it is safe to commit it
      apiKey: '99fe4251373231216598895ff71bcf6b',

      indexName: 'ALPS_SSG',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

    },
  }),
};

export default config;
