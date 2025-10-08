<script lang="ts">
    import "$styles/index.css";
    import "bootstrap-icons/font/bootstrap-icons.min.css";
    import type { Snippet } from "svelte";

    interface IndexLayoutProps {
        children: Snippet;
    }

    let { children }: IndexLayoutProps = $props();
</script>

<svelte:head>
    <link rel="shortcut icon" href="/img/favicon.svg" type="image/svg+xml" />
    <title>TeamBuild</title>
</svelte:head>

{@render children()}
