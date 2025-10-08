<script lang="ts">
    import type { Snippet } from "svelte";

    interface CheckboxProps {
        id: string;
        name?: string;
        children?: Snippet;
        class?: string;
        checked: boolean;
    }

    let { 
        children,
        id,
        name = id,
        class: className,
        checked = $bindable()
    }: CheckboxProps = $props();
</script>

<div class={className}>
    <label for={id} class="flex w-fit gap-2 cursor-pointer items-center">
        <div class="group border border-neutral-300 size-4 flex justify-center items-center">
            <i class="bi bi-check scale-0 group-has-checked:scale-100 duration-100"></i>
            <input type="checkbox" {name} {id} class="hidden" bind:checked={checked} />
        </div>
        <h4 class="flex">{@render children?.()}</h4>
    </label>
</div>
