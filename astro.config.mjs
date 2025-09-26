// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/such-demo1/",
  build: {
    assetsPrefix: "./",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `_astro/[hash].js`,
          chunkFileNames: `_astro/[hash].js`,
          assetFileNames: (assetInfo) => {
            // 画像はimagesフォルダへ
            if (
              /\.(png|jpg|jpeg|gif|svg|webp|avif)$/.test(assetInfo.name ?? "")
            ) {
              return "images/[name].[hash][extname]";
            }
            // 画像以外(css/jsなど)は_astroフォルダへ
            return "_astro/[name].[hash][extname]";
          },
        },
      },
    },
  },
});
