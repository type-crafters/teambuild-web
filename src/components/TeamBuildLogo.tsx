import type { JSX } from "react";

export default function TeamBuildLogo({
    useLink
}: TeamBuildLogoProps): JSX.Element {
    const logo: JSX.IntrinsicElements.h1 = (
        <h1 className="text-3xl font-semibold">
            <i className="bi bi-bar-chart-line-fill text-blue-500"></i>
            &nbsp;TeamBuild
        </h1>
    );

    if (useLink) {
        return <a href={useLink}>{logo}</a>
    } else {
        return logo
    }
}

interface TeamBuildLogoProps {
    useLink?: string;
}