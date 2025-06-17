import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Crestone',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/logo.svg',

  url: 'https://crestone.seidoranalytics.com/',
  baseUrl: '/',

  organizationName: 'seidoran alytics',
  projectName: 'Crestone Docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'realece', 
        path: 'ReleaseNotes',
        routeBasePath: 'ReleaseNotes',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Crestone',
      logo: {
        alt: 'Crestone',
        src: 'img/logo.svg',
        srcDark: 'img/logoWT.svg', // Cambia esta línea: agrega la imagen para dark theme
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/ReleaseNotes',
          label: 'Release Notes',
        },
        {
          label: 'Sign Up',
          href: 'https://crestone.seidoranalytics.com/',
          position: 'right',
          className: 'button button--primary',
        },
      ],
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
