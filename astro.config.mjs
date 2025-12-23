// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://keith1101.github.io",
  base: "/huyit1101",
  vite: {
    plugins: [tailwindcss()],
  },
});
