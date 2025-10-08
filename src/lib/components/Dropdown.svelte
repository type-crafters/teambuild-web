<script lang="ts">
    interface DropdownProps {
        id: string;
        name?: string;
        title?: string;
        class?: string;
        placeholder?: string;
        required?: boolean;
        bi?: string;
        value: string;
        options: Array<{value: string; text?: string}>;
    }

    let {
        id,
        name = id,
        title,
        bi,
        placeholder="Select an option",
        class: className,
        required = false,
        options,
        value = $bindable()
    }: DropdownProps = $props();
</script>
<div class={["w-full space-y-2", className]}>
    {#if title}
        <h4 class="font-semibold">
            {title}
            {#if required}
                <em class="text-red-600 pl-1">*</em>
            {/if}
        </h4>
    {/if}
                <label for={id} class="flex items-center gap-2 w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent hover:outline-transparent has-focus:outline-gray-400 duration-200 relative">
                {#if bi}
                    <i class={["bi", bi, "opacity-60"]}></i>
                {/if}
                <select
                    {name}
                    {id} 
                    class={["appearance-base-select picker:appearance-base-select flex-1 focus:outline-none picker:p-1 picker:rounded-lg picker:border-neutral-300 picker-icon:hidden picker:anchor-t-bottom picker:anchor-l-left", value ? "" : "opacity-60"]}
                    bind:value={value} 
                >
                    <option value="" disabled={required} hidden={required}>{placeholder}</option>
                    {#each options as {text, value}, i (i)}
                        <option {value} class="py-1 rounded-lg">{text ?? value}</option>
                    {/each}
                </select>
                <i class="absolute right-2 bi bi-chevron-down pointer-events-none opacity-60"></i>
            </label>
</div>