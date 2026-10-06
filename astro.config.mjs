import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://pittaims.com",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") })],
  // Old URLs from the previous site.
  redirects: {
    "/about": "/people/",
    "/events": "/",
  },
});
