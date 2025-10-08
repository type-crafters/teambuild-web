<script lang="ts">
    interface TextboxProps {
        id: string;
        name?: string;
        placeholder?: string;
        title?: string;
        class?: string;
        defaultRows?: number;
        required?: boolean;
        value: string;
    }

    let {
        id,
        name = id,
        placeholder,
        title,
        class: className,
        required = false,
        defaultRows = 3,
        value = $bindable(),
    }: TextboxProps = $props();
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
    <textarea
        {name}
        {id}
        {placeholder}
        rows={defaultRows}
        bind:value
        class="w-full border border-neutral-300 rounded-lg outline-2 outline-transparent focus:outline-gray-400 duration-200 px-2 py-1"
    ></textarea>
</div>
