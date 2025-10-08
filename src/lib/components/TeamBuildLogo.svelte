<script lang="ts">
    interface TeamBuildLogoProps {
        useLink?: string;
    }

    const { useLink }: TeamBuildLogoProps = $props();
</script>

{#snippet logo()}
    <h1 class="text-3xl font-semibold flex justify-center items-center gap-2">
        <i class="bi bi-bar-chart-line-fill text-blue-500"></i>
        TeamBuild
    </h1>
{/snippet}

{#if useLink}
    <a href={useLink}>
        {@render logo()}
    </a>
{:else}
    {@render logo()}
{/if}