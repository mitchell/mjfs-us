import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mitchell Simon",
  description: "Software Engineer",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "mjfs.us",

    nav: [
      { text: "Home", link: "/" },
      { text: "Experience", link: "/jobs/mystro" },
      { text: "Contact", link: "/contact" },
      {
        text: "Git",
        link: "http://git.mjfs.us/explore/repos",
        target: "_self",
      },
    ],

    sidebar: [
      {
        text: "Work Experience",
        items: [
          { text: "Mystro", link: "/jobs/mystro" },
          { text: "Rotabull", link: "/jobs/rotabull" },
          { text: "TV Time", link: "/jobs/tv-time" },
          { text: "Hypremium", link: "/jobs/hypremium" },
        ],
      },
      {
        text: "Personal Projects",
        items: [
          { text: "mjfs.us", link: "/projects/mjfs-us" },
          { text: "mjfs.us (Old)", link: "/projects/mjfs-us-react" },
          { text: "lambdarouter", link: "/projects/lambdarouter" },
          { text: "selfpass", link: "/projects/selfpass" },
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
