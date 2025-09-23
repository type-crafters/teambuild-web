import type { JSX, ReactNode } from "react";
import type { Metadata } from "next";
import "@styles/index.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

export const metadata: Metadata = {
    title: "TeamBuild"
}

export default function IndexLayout({
    children
}: IndexLayoutProps): JSX.Element {
    return (
        <html lang="en">
        <head>
            <link rel="shortcut icon" href="/img/favicon.svg" type="image/svg+xml" />
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