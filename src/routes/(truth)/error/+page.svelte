<script>
	import "$lib/styles/truth.css"
    import "$lib/styles/resets.css"
	import { page } from '$app/stores';
</script>

<blockquote>
	<h1>{$page.error.message}</h1>
	<a href="/" rel="external">Return</a>
</blockquote>