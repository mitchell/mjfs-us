import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mitchell Simon",
  description: "Software Engineer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "mjfs.us",
    nav: [
      { text: "Home", link: "/" },
      { text: "Experience", link: "/mystro" },
      { text: "Contact", link: "/contact" },
    ],

    sidebar: [
      {
        text: "Work Experience",
        items: [
          { text: "Mystro", link: "/mystro" },
          { text: "Rotabull", link: "/rotabull" },
          { text: "TV Time", link: "/tv-time" },
          { text: "Hypremium", link: "/hypremium" },
        ],
      },
      {
        text: "Personal Projects",
        items: [
          { text: "mjfs.us", link: "/mjfs-us" },
          { text: "mjfs.us (Old)", link: "/mjfs-us-react" },
          { text: "lambdarouter", link: "/lambdarouter" },
          { text: "selfpass", link: "/selfpass" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mitchell" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/mitchelljfsimon/",
      },
    ],
  },
});
