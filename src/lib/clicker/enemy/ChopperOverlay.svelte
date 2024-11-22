<script lang="ts">
    import empty from "./overlay/empty.png";
    import stage0 from "./overlay/destroy_stage_0.png";
    import stage1 from "./overlay/destroy_stage_1.png";
    import stage2 from "./overlay/destroy_stage_2.png";
    import stage3 from "./overlay/destroy_stage_3.png";
    import stage4 from "./overlay/destroy_stage_4.png";
    import stage5 from "./overlay/destroy_stage_5.png";
    import stage6 from "./overlay/destroy_stage_6.png";
    import stage7 from "./overlay/destroy_stage_7.png";
    import stage8 from "./overlay/destroy_stage_8.png";
    import stage9 from "./overlay/destroy_stage_9.png";

    let { min = 0, max = 100, current = 500 } = $props();

    const stages = [
        empty,
        stage0,
        stage1,
        stage2,
        stage3,
        stage4,
        stage5,
        stage6,
        stage7,
        stage8,
        stage9,
    ];

    const clamp = (input: number, min: number, max: number): number => {
        return input < min ? min : input > max ? max : input;
    }

    const map = (
        current: number,
        in_min: number,
        in_max: number,
        out_min: number,
        out_max: number,
    ): number => {
        const mapped: number =
            ((current - in_min) * (out_max - out_min)) / (in_max - in_min) +
            out_min;
        return clamp(mapped, out_min, out_max);
    };

    let stage = $derived(stages[Math.round(map(max - current, min, max, 0, stages.length - 1))]);
</script>

<div class="overlay" style="--overlay-image: url('{stage}')"></div>

<style>
    .overlay {
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: var(--overlay-image);
        background-size: 100% 100%;
    }
</style>
