import { DocsConfig } from "types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation",
        },
        {
          title: "Contentlayer",
          href: "/docs/documentation/contentlayer",
        },
        {
          title: "Components",
          href: "/docs/documentation/components",
        },
        {
          title: "Code Blocks",
          href: "/docs/documentation/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/docs/documentation/style-guide",
        },
        {
          title: "Github",
          href: "/docs/documentation/github",
        },
      ],
    },

    {
      title: "Guides",
      items: [
        {
          title: "Introduction",
          href: "/docs/guides",
        },
        {
          title: "Terms of Service",
          href: "/docs/guides/terms",
        },
        {
          title: "Privacy Policy",
          href: "/docs/guides/privacy",
        },
      ],
    },
  ],
};
