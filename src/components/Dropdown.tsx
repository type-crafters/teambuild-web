"use client";

import { type Dispatch, type JSX, type SetStateAction } from "react";

export default function Dropdown({
    bi,
    legend,
    name,
    id = name,
    required = false,
    placeholder,
    options,
    className,
    state,
    setState
}: DropdownProps): JSX.Element {
    return (
        <fieldset className={`w-full space-y-2 ${className ?? ""}`}>
            <legend className="font-semibold">
                {legend}
                {required && <em className="text-red-600 pl-2">*</em>}
            </legend>
            <label htmlFor={id} className="flex items-center gap-2 w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent hover:outline-transparent has-focus:outline-gray-400 duration-200 relative">
                {bi && <i className={`bi ${bi} opacity-60`} />}
                <select
                    name={name}
                    id={id}
                    className={`appearance-base-select picker:appearance-base-select flex-1 focus:outline-none picker:p-1 picker:rounded-lg picker:border-neutral-300 picker-icon:hidden picker:anchor-t-bottom picker:anchor-l-left ${!state && "opacity-60"}`}
                    value={state}
                    onChange={(e) => setState(e.currentTarget.value)}
                >
                    <option value="" disabled={required} hidden={required}>{placeholder}</option>
                    {options.map((opt, i) => <option key={i} value={opt.value} className="py-1 rounded-lg">{opt.text ?? opt.value}</option>)}
                </select>
                <i className="absolute right-2 bi bi-chevron-down pointer-events-none opacity-60"></i>
            </label>
        </fieldset>
    );
}

interface DropdownProps {
    bi?: string;
    name: string;
    id?: string;
    legend: string;
    required?: boolean;
    placeholder?: string;
    className?: string;
    options: DropdownOption[];
    state: any;
    setState: Dispatch<SetStateAction<any>>;
}

interface DropdownOption {
    text?: string;
    value: number | string;
}