<script lang="ts" module>
    export interface MetadataProps {
        title: string,
        description: string,
        url: string,
        domain: string,
        locale: string,
        logo: string
    }
</script>

<script lang="ts">
    let {
        title = "The Smack Magic Vegetable Chopper",
        description = "Created by Joe 'Magic', the king of infomercials, The Smack Magic Vegetable Chopper has revolutionized prep in the kitchen, sending it into a future of easy use, less stress, and more fun!",
        url = "https://smack-magic.pages.dev/" /* TODO - update to true URL */,
        domain = "smack-magic.pages.dev" /* TODO - update to true URL */,
        locale = "en_US",
        logo = "/img/logo.jpeg"
    }: MetadataProps = $props()
</script>

<title>The Smack Magic Vegetable Chopper</title>

<meta property="og:url" content="{url}" />
<meta property="og:title" content="{title}" />
<meta property="og:image" content="{logo}" />
<meta property="og:locale" content="{locale}" />
<meta property="og:description" content="{description}" />

<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="{domain}">
<meta property="twitter:url" content="{url}">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{description}">
<meta name="twitter:image" content="{logo}">