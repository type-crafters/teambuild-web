"use client";
import type { InputType } from "@common/types";
import { useState, type JSX, type Dispatch, type SetStateAction } from "react";

export default function FormControl({
    legend,
    name,
    id = name,
    placeholder,
    type,
    bi,
    className,
    required = false,
    state,
    setState
}: FormControlProps): JSX.Element {
    const [showValue, setShowValue] = useState<boolean>(false);

    return (
        <fieldset className={`w-full space-y-2 ${className ?? ""}`}>
            <legend className="font-semibold">
                {legend}
                {required && <em className="text-red-600 pl-2">*</em>}
            </legend>
            <label
                htmlFor={id}
                className="flex items-center gap-2 w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent hover:outline-transparent has-focus:outline-gray-400 duration-200"
            >
                {bi && <i className={`bi ${bi} opacity-60`} />}
                <input
                    type={type === "password" && showValue ? "text" : type}
                    placeholder={placeholder}
                    className="flex-1 focus:outline-none"
                    name={id}
                    id={id}
                    value={state}
                    required={required}
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
        </fieldset>
    );
}

interface FormControlProps {
    bi?: string;
    name: string;
    id?: string;
    legend: string;
    placeholder?: string;
    className?: string;
    type: InputType;
    required?: boolean;
    state: any;
    setState: Dispatch<SetStateAction<any>>;
}
