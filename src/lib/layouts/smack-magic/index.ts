import type { MetadataProps } from "$lib/common/Metadata.svelte"
import SmackMagicWrapper from "./SmackMagicWrapper.svelte"

export default {
    wrapper: SmackMagicWrapper,
    metadata: {
        title: "The Smack Magic Vegetable Chopper",
        description: "Created by Joe 'Magic', the king of infomercials, The Smack Magic Vegetable Chopper has revolutionized prep in the kitchen, sending it into a future of easy use, less stress, and more fun!",
        url: "https://smack-magic.pages.dev/" /* TODO - update to true URL */,
        domain: "smack-magic.pages.dev" /* TODO - update to true URL */,
        locale: "en_US",
        logo: "/img/logo.jpeg"
    } as MetadataProps
}