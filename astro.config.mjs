import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

import packageJson from "./package.json";
// https://astro.build/config
export default defineConfig({
  base: "accessibility-guidelines",
  integrations: [
    starlight({
      components: {
        Footer: "./src/components/footer.astro",
      },
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      sidebar: [
        {
          items: [
            { label: "はじめに", slug: "about/introduction" },
            { label: "利用方法", slug: "about/usage" },
            {
              label: "コントリビューションガイド",
              slug: "about/contribution-guide",
            },
          ],
          label: "ガイドラインについて",
        },
        {
          autogenerate: { directory: "guidelines" },
          label: "ガイドライン",
        },
      ],
      social: {
        github: "https://github.com/yumemi-inc/accessibility-guidelines",
      },
      title: `YUMEMI  Accessibility Guidelines v${packageJson.version}`,
    }),
  ],
  site: "https://yumemi-inc.github.io",
});
