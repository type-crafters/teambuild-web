import adapter from "svelte-adapter-bun";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
export default {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        alias: {
            "$components": "./src/lib/components",
            "$components/*": "./src/lib/components/*",
            "$styles": "./src/styles",
            "$styles/*": "./src/styles/*"
        }
    },
    compilerOptions: {
        runes: true
    }
};