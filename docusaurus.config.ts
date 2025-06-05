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
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Crestone',
          items: [
            {
              label: 'Quickstart',
              to: '/docs/start',
            },{
              label: 'Release Notes',
              to: '/ReleaseNotes'
            }
          ],
        },
        {
          title: 'Sections',
          items: [
            {
              label: 'Connections',
              href: 'docs/sections/Conections/',
            },
            {
              label: 'Node',
              href: 'docs/sections/Nodes/',
            },
            {
              label: 'Jobs',
              href: 'docs/sections/Jobss',
            },
            {
              label: 'Monitor',
              href: 'docs/sections/Monitor',
            },
            {
              label: 'Settings',
              href: 'docs/sections/Settings',
            },
          ],
        },{
          title: 'Sources',
          items: [
            {
              label: 'SAP S/4HANA',
              to: 'docs/sections/Conections/Source/SAP4hanna',
            },{
              label: 'SAP ABAP',
              to: 'docs/sections/Conections/Source/SAPAbap',
            },{
              label: 'ODATA',
              to: 'docs/sections/Conections/Source/ODATA',
            },{
              label: 'SAP ERP',
              to: 'docs/sections/Conections/Source/ODATA',
            },{
              label: 'SAP Business ONE',
              to: 'docs/sections/Conections/Source/ODATA',
            },{
              label: 'SAP ByDesign',
              to: 'docs/sections/Conections/Source/ODATA',
            }
        ]},
        {
          title: 'Destinations',
          items: [
            {
              label: 'AWS',
              to: 'docs/sections/Conections/Detinations/aws',
            },
            {
              label: 'Azure',
              to: 'docs/sections/Conections/Detinations/azure',
            },
            {
              label: 'Azure SQL',
              to: 'docs/sections/Conections/Detinations/AzureSQL',
            },
            {
              label: 'Snowflake',
              to: 'docs/sections/Conections/Detinations/snowflake',
            },{
              label: 'Teradata',
              to: 'docs/sections/Conections/Detinations/teradata',
            },{
              label: 'Databricks',
              to: 'docs/sections/Conections/Detinations/databricks',
            }
          ],
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
