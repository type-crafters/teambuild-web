<script lang="ts">
    import Divider from "./Divider.svelte";

    interface MarkdownEditorProps {
        id: string;
        name?: string;
        title?: string;
        placeholder?: string;
        required?: boolean;
        value: string;
    }

    let {
        id,
        name = id,
        title,
        placeholder,
        required = false,
        value = $bindable(),
    }: MarkdownEditorProps = $props();

    let view: "write" | "preview" = $state("write");
</script>

<div class="w-full">
    {#if title}
        <h4 class="font-semibold mb-2">
            {title}
            {#if required}
                <em class="text-red-600 pl-1">*</em>
            {/if}
        </h4>
    {/if}
    <div
        class="rounded-lg border border-neutral-300 outline-2 outline-transparent has-focus:outline-blue-500 duration-200"
    >
        <div
            role="tablist"
            class="w-full flex bg-neutral-100 rounded-t-lg overflow-hidden"
        >
            <label
                for="write"
                class="flex items-center cursor-pointer px-4 border-b bg-inherit has-checked:bg-white has-checked:border has-checked:border-b-0 first:has-checked:border-l-0 last:has-checked:border-r-0 border-neutral-300 rounded-t-lg"
            >
                <input
                    type="radio"
                    role="tab"
                    id="write"
                    class="hidden"
                    bind:group={view}
                    value="write"
                />
                <span>Write</span>
            </label>
            <label
                for="preview"
                class="flex items-center cursor-pointer px-4 border-b bg-inherit has-checked:bg-white has-checked:border has-checked:border-b-0 first:has-checked:border-l-0 last:has-checked:border-r-0 border-neutral-300 rounded-t-lg"
            >
                <input
                    type="radio"
                    role="tab"
                    id="preview"
                    class="hidden"
                    bind:group={view}
                    value="preview"
                />
                <span>Preview</span>
            </label>
            <div
                class="flex flex-1 px-4 border-b bg-inherit border-neutral-300 first:has-checked:border-l-0 last:has-checked:border-r-0"
            >
                {#if view === "write"}
                    <div class="flex-1">&nbsp;</div>
                    <div class="flex gap-2 text-lg">
                        <Divider horizontal />
                        <div class="flex gap-2 py-1">
                            <button
                                type="button"
                                title="Add heading"
                                class="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                            >
                                <i class="bi bi-type-h3"></i>
                            </button>
                            <button
                                type="button"
                                title="Add bold text"
                                class="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                            >
                                <i class="bi bi-type-bold"></i>
                            </button>
                            <button
                                type="button"
                                title="Add italic text"
                                class="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                            >
                                <i class="bi bi-type-italic"></i>
                            </button>
                        </div>
                        <Divider horizontal />
                        <div class="flex gap-2 py-1">
                            <button
                                type="button"
                                title="Add quote"
                                class="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                            >
                                <i class="bi bi-quote"></i>
                            </button>
                            <button
                                type="button"
                                title="Add code snippet"
                                class="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                            >
                                <i class="bi bi-code-slash"></i>
                            </button>
                            <button
                                type="button"
                                title="Add hyperlink"
                                class="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                            >
                                <i class="bi bi-link"></i>
                            </button>
                        </div>
                        <Divider horizontal />
                        <div class="flex gap-2 py-1">
                            <button
                                type="button"
                                title="Add unordered list item"
                                class="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                            >
                                <i class="bi bi-list-ul"></i>
                            </button>
                            <button
                                type="button"
                                title="Add ordered list item"
                                class="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                            >
                                <i class="bi bi-list-ol"></i>
                            </button>
                            <button
                                type="button"
                                title="Add checklist item"
                                class="p-1 flex justify-center items-center rounded hover:bg-neutral-300 duration-200 cursor-pointer"
                            >
                                <i class="bi bi-list-check"></i>
                            </button>
                        </div>
                    </div>
                {:else}
                    <div class="py-1">
                        <i class="bi bi-0-circle p-1 invisible"></i>
                    </div>
                {/if}
            </div>
        </div>
        <div class="relative interpolate-keywords">
            {#if view === "write"}
                <textarea
                    {name}
                    {id}
                    {placeholder}
                    class="w-full p-2 rounded-b-lg -mb-1 focus:outline-none duration-100 min-h-16"
                    bind:value={value}
                ></textarea>
            {:else if view === "preview"}
                <div class="w-full p-2 rounded-b-lg">
                    <p>Nothing to preview.</p>
                </div>
            {/if}
        </div>
    </div>
    <div class="flex px-2 gap-1 opacity-60">
        <i class="bi bi-markdown"></i>
        <p>
            Supports
            <a href="https://www.markdownguide.org" class="text-blue-500 hover:underline">Markdown</a>
        </p>
    </div>
</div>
