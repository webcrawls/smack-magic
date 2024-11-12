<script>
    import avatar from './user.png'
</script>

<!-- Stupid idea - make joe's avatar sparkly or narcisistically gaudy in some way -->

<div class="avatar-container">
    <img alt="Default, silhouette profile image." src={avatar}/>
</div>

<style>
    .avatar-container {
        display: flex;
        height: 100%;
        width: 100%;
    }

    .avatar-container img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
    }
</style>