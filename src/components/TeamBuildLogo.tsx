import type { JSX } from "react";

export default function TeamBuildLogo({
    useLink
}: TeamBuildLogoProps): JSX.Element {
    if (useLink) {
        <a href={useLink}>
            <h1 className="text-3xl font-semibold">
                <i className="bi bi-bar-chart-line-fill text-blue-500"></i>
                &nbsp;TeamBuild
            </h1>
        </a>
    } else {
        return (
            <h1 className="text-3xl font-semibold">
                <i className="bi bi-bar-chart-line-fill text-blue-500"></i>
                &nbsp;TeamBuild
            </h1>
        )
    }
}

interface TeamBuildLogoProps {
    useLink?: string;
}