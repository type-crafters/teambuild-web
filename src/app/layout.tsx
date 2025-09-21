import type { JSX, ReactNode } from "react";
import type { Metadata } from "next";
import "@styles/index.css";

export const metadata: Metadata = {
    title: "TeamBuild"
}

export default function IndexLayout({
    children
}: IndexLayoutProps): JSX.Element {
    return (
        <html lang="en">
        <head>

        </head>
        <body>
            {children}
        </body>
        </html>
    );
}

interface IndexLayoutProps {
    children: ReactNode;
}