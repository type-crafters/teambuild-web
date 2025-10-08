<script lang="ts">
    interface FormControlProps {
        type:
            | "text"
            | "email"
            | "tel"
            | "number"
            | "password"
            | "search"
            | "date"
            | "url";
        placeholder?: string;
        id: string;
        name?: string;
        class?: string;
        title?: string;
        bi?: string;
        required?: boolean;
        
        min?: number;
        max?: number;
        step?: number;

        value: string | number;
    }

    let {
        type,
        id,
        name = id,
        class: className,
        title,
        placeholder,
        bi,
        required = false,
        min,
        max,
        step,
        value = $bindable(),
    }: FormControlProps = $props();
    let show = $state(false);
</script>

<div class={["w-full space-y-2", className]}>
    {#if title}
        <h4 class="font-semibold">
            {title}
            {#if required}
                <em class="text-red-500 pl-1">*</em>
            {/if}
        </h4>
    {/if}
    <label
        for={id}
        class="flex items-center gap-2 w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent hover:outline-transparent has-focus:outline-gray-400 duration-200"
    >
        {#if bi}
            <i class={["bi", bi, "opacity-60"]}></i>
        {/if}
        <input
            type={type === "password" && show ? "text" : type}
            {placeholder}
            class="w-full flex-1 focus:outline-none date-picker:opacity-60"
            {name}
            {id}
            {min}
            {max}
            {step}
            bind:value
            {required}
        />
        {#if type === "password"}
            <button
                type="button"
                aria-label={show ? "hide password" : "show password"}
                class="px-1 cursor-pointer flex items-center"
                onclick={() => (show = !show)}
            >
                <i class={[ "bi bi-eye", show ? "text-blue-500" : "text-gray-500", "duration-200"]}></i>
            </button>
        {/if}
    </label>
</div>
