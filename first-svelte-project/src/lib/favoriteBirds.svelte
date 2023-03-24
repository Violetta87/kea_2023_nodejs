<script>
    import Bird from "./bird.svelte";

    export const birds= ["pigeon", "eagle", "mikki"]
    export const birdEmoji = ["🐦","🐦","🐦" ]

    let birdIndex = 0;
    let favoriteBird = birds[birdIndex]
    let favoriteBirdEmoji = birdEmoji[birdIndex]

    function changeFavoriteBird(){
        birdIndex = (birdIndex + 1) % birds.length
        favoriteBird = birds[birdIndex]
        favoriteBirdEmoji = birdEmoji[birdIndex]
    }
</script>

<div on:click={changeFavoriteBird} on:keydown={changeFavoriteBird}> 
    <Bird
    name={favoriteBird}
    emoji={favoriteBirdEmoji}
/>
</div>

<h2>All birds that i know of</h2>
{#each birds as bird}
    <Bird name={bird} emoji={"????"}/>
{/each}




