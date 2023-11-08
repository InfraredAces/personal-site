import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '',
  tagline: '',
  favicon: '',

  // Set the production url of your site here
  url: 'https://infraredaces.github.io',
  baseUrl: '/personal-site/',

  organizationName: 'InfraredAces', // Usually your GitHub org/user name.
  projectName: 'personal-site', // Usually your repo name.

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: '',
    navbar: {
      title: '',
      logo: {
        alt: '',
        src: '',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: '',
          position: 'left',
          label: '',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/InfraredAces/personal-site',
          label: 'GitHub',
          position: 'right',
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
