import { useEffect, useRef, useState, type Dispatch, type JSX, type SetStateAction } from "react";
import Divider from "./Divider";

export default function MarkdownEditor({
    name,
    id = name,
    placeholder,
    legend,
    required,
    state,
    setState
}: MarkdownEditorProps): JSX.Element {
    const [view, setView] = useState<"write" | "preview">("write");
    const textboxref = useRef<HTMLTextAreaElement>(null);
    const heightref = useRef<HTMLDivElement>(null);

    const editContent = (prefix: string, suffix: string = "") => {
        const textbox = textboxref.current;
        if (!textbox) return;

        const start = textbox.selectionStart;
        const end = textbox.selectionEnd;
        const selecting = start !== end;

        if (selecting) {
            const currentPrefix = state.slice(start - prefix.length, start);
            console.log(currentPrefix);
            const currentSuffix = state.slice(end, end + suffix.length);
            console.log(currentSuffix);
            const undo = ((prefix === currentPrefix) && (!suffix || (suffix === currentSuffix)));

            if (undo) {
                setState(state.slice(0, start - prefix.length) + state.slice(start, end) + state.slice(end + suffix.length));
                setTimeout(() => {
                    textbox.focus();
                    textbox.setSelectionRange(start - prefix.length, end - prefix.length);
                }, 0);
            } else {
                setState(state.slice(0, start) + prefix + state.slice(start, end) + (suffix ?? "") + state.slice(end + suffix.length));
                setTimeout(() => {
                    textbox.focus();
                    textbox.setSelectionRange(start + prefix.length, end + prefix.length);
                }, 0);
            }

        } else {
            setState(state.slice(0, start) + prefix + state.slice(start, end) + (suffix ?? "") + state.slice(end));

            setTimeout(() => {
                textbox.focus();
                textbox.setSelectionRange(start + prefix.length, start + prefix.length);
            }, 0);
        }
    };

    useEffect(() => {
        if (!textboxref.current || !heightref.current) return;

        heightref.current.textContent = state.replaceAll("\n", "\n_") ?? " ";
        const height = heightref.current.offsetHeight;

        textboxref.current.style.height = `${height}px`;
    }, [state]);

    return (
        <div>
            {legend && (
                <h4 className="font-semibold">
                    {legend}
                    {required && <em className="text-red-600 pl-1">*</em>}
                </h4>
            )}
            <div className="rounded-lg border border-neutral-300 outline-2 outline-transparent has-focus:outline-blue-500 duration-200">
                <div role="tablist" className="w-full flex bg-neutral-100 rounded-t-lg overflow-hidden">
                    <label
                        role="tab"
                        htmlFor="write"
                        className="flex items-center cursor-pointer px-4 border-b bg-inherit has-checked:bg-white has-checked:border has-checked:border-b-0 first:has-checked:border-l-0 last:has-checked:border-r-0 border-neutral-300 rounded-t-lg"
                    >
                        <input
                            type="radio"
                            name="view"
                            id="write"
                            value="write"
                            checked={view === "write"}
                            onChange={e => setView(e.currentTarget.value as "write" | "preview")}
                            className="hidden"
                        />
                        Write
                    </label>
                    <label
                        role="tab"
                        htmlFor="preview"
                        className="flex items-center cursor-pointer px-4 border-b bg-inherit has-checked:bg-white has-checked:border has-checked:border-b-0 first:has-checked:border-l-0 last:has-checked:border-r-0 border-neutral-300 rounded-t-lg"
                    >
                        <input
                            type="radio"
                            name="view"
                            id="preview"
                            value="preview"
                            checked={view === "preview"}
                            onChange={e => setView(e.currentTarget.value as "write" | "preview")}
                            className="hidden"
                        />
                        Preview
                    </label>
                    <div className="flex flex-1 px-4 border-b bg-inherit border-neutral-300 first:has-checked:border-l-0 last:has-checked:border-r-0">
                        {view === "write" ? (
                            <>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex gap-2 text-lg">
                                    <Divider horizontal />
                                    <div className="flex gap-2 py-1">
                                        <button
                                            type="button"
                                            title="Add heading"
                                            className="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                                            onClick={() => editContent("### ")}
                                        >
                                            <i className="bi bi-type-h3"></i>
                                        </button>
                                        <button
                                            type="button"
                                            title="Add bold text"
                                            className="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                                            onClick={() => editContent("**", "**")}
                                        >
                                            <i className="bi bi-type-bold"></i>
                                        </button>
                                        <button
                                            type="button"
                                            title="Add italic text"
                                            className="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                                            onClick={() => editContent("_", "_")}
                                        >
                                            <i className="bi bi-type-italic"></i>
                                        </button>
                                    </div>
                                    <Divider horizontal />
                                    <div className="flex gap-2 py-1">
                                        <button
                                            type="button"
                                            className="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                                        >
                                            <i className="bi bi-quote"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                                        >
                                            <i className="bi bi-code-slash"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                                        >
                                            <i className="bi bi-link"></i>
                                        </button>
                                    </div>
                                    <Divider horizontal />
                                    <div className="flex gap-2 py-1">
                                        <button
                                            type="button"
                                            className="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                                        >
                                            <i className="bi bi-list-ul"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                                        >
                                            <i className="bi bi-list-ol"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                                        >
                                            <i className="bi bi-list-check"></i>
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) :
                            <div className="py-1">
                                <i className="bi bi-0-circle p-1 invisible"></i>
                            </div>
                        }
                    </div>
                </div>
                <div className="relative interpolate-keywords">
                    {view === "write" ? (
                        <>
                            <textarea
                                name={name}
                                id={id}
                                ref={textboxref}
                                placeholder={placeholder}
                                className="w-full p-2 rounded-b-lg -mb-1 focus:outline-none duration-100 min-h-16"
                                value={state}
                                onChange={e => setState(e.currentTarget.value)}
                            ></textarea>
                            <div
                                ref={heightref}
                                className="absolute invisible whitespace-pre-wrap break-words w-full p-2 rounded-b-lg" inert></div>
                        </>
                    ) : view === "preview" ? (
                        <div className="w-full p-2 rounded-b-lg">
                            <p>Nothing to preview.</p>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="flex px-2 gap-1 opacity-60">
                <i className="bi bi-markdown"></i>
                <p>Supports&nbsp;<a href="https://www.markdownguide.org" className="text-blue-500 hover:underline ">Markdown</a></p>
            </div>
        </div>
    );
}

interface MarkdownEditorProps {
    legend?: string;
    required?: boolean;
    name: string;
    id?: string;
    placeholder: string;
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}