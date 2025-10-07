import type { JSX } from "react";

export default function Divider({
    text,
    horizontal=false
}: DividerProps): JSX.Element {
    return (
        <div className={`${horizontal ? "px-2" : "py-2"}`}>
            <div className={`${horizontal ? "h-full w-px" : "w-full h-px"} bg-neutral-300 flex justify-center items-center`}>
                { text && <span className="bg-white rounded-full px-2 text-neutral-500 text-sm">{text}</span> }
            </div>
        </div>
    );
}

interface DividerProps {
    text?: string;
    horizontal?: boolean;
}