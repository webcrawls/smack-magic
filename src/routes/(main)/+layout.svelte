<script>
    import SmackMagicWrapper from "$lib/layouts/smack-magic-2/SmackMagicWrapper.svelte";
    import { createUserStore } from "$lib/user/user.svelte";
    import { setContext } from "svelte";

    let { children } = $props()

    let user = createUserStore()
    setContext("user", user)
</script>

<SmackMagicWrapper {user}>
{@render children?.(user)}
</SmackMagicWrapper>
