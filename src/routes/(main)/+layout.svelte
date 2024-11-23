<script>
    import { wrapper } from "$lib/layouts/smack-magic";
    import { createUserStore } from "$lib/services/user/user.svelte";
    import { setContext } from "svelte";

    let { children } = $props()
</script>

<wrapper {user}>
    {@render children?.(user)}
</wrapper>
