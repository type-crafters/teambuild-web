<script lang="ts">
    interface DividerProps {
        text?: string;
        horizontal?: boolean;
    }

    const { text, horizontal }: DividerProps = $props();
</script>
<div class={horizontal ? "px-2" : "py-2"}>
    <div class={["flex justify-center items-center bg-neutral-300", horizontal ? "h-full w-px" : "w-full h-px"]}>
        {#if text}
            <span class="bg-white rounded-full px-2 text-neutral-500 text-sm">{text}</span>
        {/if}
    </div>
</div>