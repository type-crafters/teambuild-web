<script lang="ts">
    interface CollectionControlProps {
        title?: string;
        bi?: string;
        id: string;
        name?: string;
        distinct?: boolean;
        class?: string;
        value: string[];
    }

    let {
        title,
        id,
        name = id,
        bi,
        distinct = false,
        class: className,
        value = $bindable(),
    }: CollectionControlProps = $props();

    let current: string = $state("");

    const append = () => {
        value = distinct && value.includes(current) ? value : [...value, current];
        current = "";
    };
</script>

<div class={["space-y-2", className]}>
    {#if title}
        <h4 class="font-semibold">{title}</h4>
    {/if}
    <div class="flex items-center gap-4">
        <label
            for={id}
            class="w-full flex items-center gap-2 border border-neutral-300 rounded-lg px-2 py-1 outline-2 outline-transparent has-focus:outline-gray-400 duration-200"
        >
            {#if bi}
                <i class={["bi", bi, "opacity-60"]}></i>
            {/if}
            <input
                type="text"
                {name}
                {id}
                class="flex-1 focus:outline-none"
                bind:value={current}
                onkeydown={(e) => e.key === "Enter" && append()}
            />
        </label>
        <button
            type="button"
            onclick={append}
            class="rounded-lg border border-neutral-300 px-4 py-1 font-medium hover:bg-neutral-100 duration-200 cursor-pointer"
            >Add</button
        >
    </div>
</div>
<!-- import { useState, type Dispatch, type JSX, type SetStateAction } from "react";

export default function CollectionControl({
    legend,
    bi,
    name,
    id = name,
    distinct = false,
    autoComplete = "off",
    state,
    setState
}: CollectionControlProps): JSX.Element {
    const [current, setCurrent] = useState<string>("");
    void state;
    const append = () => {
        setState((value: string[]) => distinct && value.includes(current) ? value : [...value, current]);
        setCurrent("");
    };

    return (
        <div>
            {legend && (
                <h4 className="font-semibold">
                    {legend}
                </h4>
            )}
            <div className="flex items-center gap-4">
                <label htmlFor={id} className="flex items-center gap-2 w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent hover:outline-transparent has-focus:outline-gray-400 duration-200">
                    {bi && <i className={`bi ${bi} opacity-60`} />}
                    <input
                        type="text"
                        name={name}
                        id={id}
                        className="flex-1 focus:outline-none"
                        value={current}
                        autoComplete={autoComplete}
                        onKeyDown={(e) => e.key === "Enter" && append()}
                        onChange={(e) => setCurrent(e.currentTarget.value)} />
                </label>
                <button
                    className="rounded-lg border border-neutral-300 px-4 py-1 font-medium hover:bg-neutral-100 duration-200 cursor-pointer"
                    type="button"
                    onClick={append}
                >Add</button>
            </div>
        </div>
    );
}

interface CollectionControlProps {
    legend?: string;
    bi?: string;
    name: string;
    id?: string;
    state: Array<string>;
    distinct?: boolean;
    autoComplete?: string;
    setState: Dispatch<SetStateAction<Array<string>>>;
} -->
