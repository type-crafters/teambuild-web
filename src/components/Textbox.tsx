"use client";
import { type Dispatch, type JSX, type SetStateAction } from "react";

export default function Textbox({
    name,
    id = name,
    legend,
    required = false,
    placeholder,
    defaultRows = 3,
    className,
    state,
    setState
}: TextboxProps): JSX.Element {
    return (
        <div className={`w-full space-y-2 ${className ?? ""}`}>
            <h4 className="font-semibold">
                {legend}
                {required && <em className="text-red-600 pl-2">*</em>}
            </h4>
            <textarea
                name={name}
                id={id}
                placeholder={placeholder}
                rows={defaultRows}
                value={state}
                onChange={(e) => setState(e.currentTarget.value)}
                className="w-full border border-neutral-300 rounded-lg outline-2 outline-transparent focus:outline-gray-400 duration-200 px-2 py-1"
            ></textarea>
        </div>
    );
}

interface TextboxProps {
    name: string;
    id?: string; 
    legend: string;
    required?: boolean;
    placeholder?: string;
    defaultRows?: number;
    className?: string;
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}