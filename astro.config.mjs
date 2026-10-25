import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // The GitHub Pages workflow sets these automatically. With a custom domain
  // (pgse.co.uk) the base is "/"; on username.github.io/repo it is "/repo".
  site: process.env.SITE_ORIGIN || "https://pgse.co.uk",
  base: process.env.BASE_PATH || "/",
  // Astro 7 defaults to "jsx" whitespace handling, which can remove spaces
  // between inline elements. Keep the previous behaviour.
  compressHTML: true,
  integrations: [
    mdx(),
    sitemap(),
    react(),
    icon(),
    partytown({
      config: { forward: ["dataLayer.push"], debug: false },
    }),
  ],
});
