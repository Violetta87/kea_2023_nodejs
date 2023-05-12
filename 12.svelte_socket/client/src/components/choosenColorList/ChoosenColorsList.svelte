<script>
    import { colorsList } from "../../stores/globalStore";
</script>

{#each $colorsList as colorPick}
<div style={`backgroundColor:`}></div>
<h4>{colorPick.username}</h4>
{/each}