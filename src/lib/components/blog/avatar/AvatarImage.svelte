<script>
    import avatar from './user.png'
</script>

<!-- Stupid idea - make joe's avatar sparkly or narcisistically gaudy in some way -->

<div class="avatar-container">
    <img alt="Default, silhouette profile image." src={avatar}/>
</div>

<style>
    .avatar-container {
        width: min-width;
        height: min-height;
    }

    .avatar-container img {
        width: 64px;
        aspect-ratio: 1 / 1;
    }
</style>