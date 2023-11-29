// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'pulsatrix documentation',
  tagline: 'Documentation for the pulsatrix e-mobility components',
  favicon: 'img/favicon_V3.png',

  // Set the production url of your site here
  url: 'https://pulsatrix-emobility.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pulsatrix-emobility', // Usually your GitHub org/user name.
  projectName: 'docs-pulsatrix-com', // Usually your repo name.

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
          editUrl:
            'https://github.com/pulsatrix-emobility/docs-pulsatrix-com',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/openapi.yaml',
            route: '/user-api/swagger/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#2cb5a3',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: ' Home',
        logo: {
          alt: 'pulsatrix logo',
          src: 'img/jelly.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/pulsatrix-emobility/docs-pulsatrix-com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                html: `
                <a href="https://www.pulsatrix.de" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.pulsatrix.de/wp-content/uploads/2021/10/pulsatrix_450.png" alt="Deploys by Netlify" height="45" />
                </a>
                <p>
                pulsatrix gmbh<br>
                Bebelsbergstraße 31<br>
                D-71088 Holzgerlingen<br>
                <br>
                hallo@pulsatrix.de<br>
                +49 7031 416130<br>
                <br>
                Ein Unternehmen der <a href="https://www.levigo.de">levigo gruppe</a>.</p>
              `,
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact us',
                href: 'https://www.pulsatrix.de/kontakt/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pulsatrix-emobility/docs-pulsatrix-com',
              },
              {
                html: `
                <br><br><br>
                <a href="https://www.pulsatrix.de" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.pulsatrix.de/wp-content/uploads/2021/10/BEM_trans.png" alt="Deploys by Netlify" height="60" />
                </a>
                <p><a href="https://www.levigo.de">Member of the Bundesverband eMobilität e.V.</a></p>                
              `,
              },
            ],
          },
          {
            title: 'Legal',
            // Please don't remove the privacy and terms, it's a legal
            // requirement.
            items: [
              {
                label: 'Privacy',
                href: 'https://www.pulsatrix.de/datenschutz/',
              },
              {
                label: 'Legal Notice',
                href: 'https://www.pulsatrix.de/impressum/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} pulsatrix gmbh, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
