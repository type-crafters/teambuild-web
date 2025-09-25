import { FlatCompat } from "@eslint/eslintrc";

export default [
    ...new FlatCompat({ baseDirectory: import.meta.dirname }).extends("next/core-web-vitals", "next/typescript"),
    {
        "rules": {
            "@typescript-eslint/no-explicit-any": "off"
        }
    }
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "dist/**",
            "build/**",
            "next-env.d.ts"
        ]
    }
];