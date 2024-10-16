<script>
    import Navigation from "$lib/page/Navigation.svelte";

</script>
<svelte:head>
    <link rel="stylesheet" href="/css/theme.default.css"/>
</svelte:head>

<div class="layout-wrapper">
    <header>
        <h1>MAGIC CHOP</h1>
        <Navigation/>
    </header>
    <main>
        <slot/>
    </main>
    <footer></footer>
</div>

<style>
</style>