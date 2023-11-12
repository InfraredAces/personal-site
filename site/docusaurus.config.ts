import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "InfraredAces",
  tagline: "",
  favicon: "InfraredAces-Logo.svg",

  // Set the production url of your site here
  url: "https://infrared-aces.com/",
  baseUrl: "/",

  organizationName: "InfraredAces", // Usually your GitHub org/user name.
  projectName: "personal-site", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          routeBasePath: "/",
          blogTitle: "Personal Blog",
          blogDescription:
            "Personal blog and documentation for personal projects",
          showReadingTime: false,
          // postsPerPage: "ALL",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "InfraredAces-Logo.svg",
    navbar: {
      title: "InfraredAces",
      logo: {
        alt: "InfraredAces Logo",
        src: "InfraredAces-Logo.svg",
      },
      items: [
        { to: "/", label: "Blog", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Project Docs",
        },
        {
          href: "https://github.com/InfraredAces/personal-site",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
