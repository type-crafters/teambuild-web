"use client";
import type { InputType } from "@common/types";
import { useState, type JSX, type Dispatch, type SetStateAction } from "react";

export default function FormControl({
    legend,
    name,
    id = name,
    placeholder,
    type = "text",
    bi,
    className,
    required = false,
    min,
    max,
    step,
    state,
    setState
}: FormControlProps): JSX.Element {
    const [showValue, setShowValue] = useState<boolean>(false);

    return (
        <div className={`w-full space-y-2 ${className ?? ""}`}>
            {legend && (
                <h4 className="font-semibold">
                    {legend}
                    {required && <em className="text-red-600 pl-1">*</em>}
                </h4>
            )}
            <label
                htmlFor={id}
                className="flex items-center gap-2 w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent hover:outline-transparent has-focus:outline-gray-400 duration-200"
            >
                {bi && <i className={`bi ${bi} opacity-60`} />}
                <input
                    type={type === "password" && showValue ? "text" : type}
                    placeholder={placeholder}
                    className="w-full flex-1 focus:outline-none date-picker:opacity-60"
                    name={id}
                    id={id}
                    value={state}
                    required={required}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(e) => setState(e.currentTarget.value)} />
                {type === "password" && (
                    <button
                        type="button"
                        aria-label={showValue ? "hide password" : "show password"}
                        onClick={() => setShowValue(!showValue)}
                        className="cursor-pointer px-1"
                    >
                        <i className={`bi bi-eye duration-200 ${showValue ? "text-blue-500" : "text-gray-500"}`}></i>
                    </button>
                )}
            </label>
        </div>
    );
}

interface FormControlProps {
    bi?: string;
    name: string;
    id?: string;
    legend?: string;
    placeholder?: string;
    className?: string;
    type?: InputType;
    required?: boolean;

    /* input[type="number"] exclusive attributes */
    min?: number;
    max?: number;
    step?: number;

    /* Parent-determined value through state */
    state: any;
    setState: Dispatch<SetStateAction<any>>;
}
