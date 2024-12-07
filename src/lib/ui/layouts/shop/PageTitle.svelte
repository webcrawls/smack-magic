<script>
    let { children } = $props()
    </script>

<div class="page-title">
    {@render children?.()}
</div>

<style>
    .page-title {
        color: yellow;
        text-shadow: rgba(255, 255, 255, 0.9) 0px 0px 28px;
        text-align: center;
    }
    </style>