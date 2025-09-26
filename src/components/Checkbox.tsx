import { type Dispatch, type JSX, type ReactNode, type SetStateAction } from "react";

export default function Checkbox({
    children: legend,
    name,
    id = name,
    column = false,
    className,
    state,
    setState
}: CheckboxProps): JSX.Element {
    return (
        <fieldset className={className}>
            <label htmlFor={id} className={`flex w-fit gap-2 cursor-pointer ${column ? "flex-col" : "flex-row items-center"}`}>
                <div className="group border-2 border-neutral-300 w-4 h-4 flex justify-center items-center">
                    <i className="bi bi-check text-blue-500 text-lg scale-0 group-has-checked:scale-100 duration-100"></i>
                    <input type="checkbox" name={name} id={id} className="hidden" checked={state} onChange={(e) => setState(e.currentTarget.checked)} />
                </div>
                <legend className="flex">{legend}</legend>
            </label>
        </fieldset>
    );
}

interface CheckboxProps {
    id?: string;
    className?: string;
    children: ReactNode;
    name: string;
    column?: boolean;
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
}