<script>
    export let nibling;
    export let onShowLove;
    export let piblingName;
    export let onEatCookie;

    import { fridgeMessages } from "../../store/fridgeMessage";

    let fridgeMessage= "";

    function handleWriteFunction(){
        $fridgeMessages.push(fridgeMessage)
        

        //fridgeMessages.update(fridgeMessage)
        fridgeMessage = ""

        
    }

</script>

<div class:is-girl={nibling.isGirl} 
    class:is-boy = {!nibling.isGirl}
    class={nibling.blackSheep || "not-a-black-sheep"} >
    {#if nibling.isGirl}
    <p>Niece {nibling.name}</p>
    {:else }
    <p>Nephew{nibling.name}</p>
{/if}
</div>

<p>{nibling.cookies}</p>

<button on:click={() => onShowLove(`Hey  ${piblingName}. Its me ${nibling.name} and i love you`) }>Show love</button>

<button on:click={() => onEatCookie()}>Eat a cookie</button>

<p>{nibling.cookies}</p>

<p>There are {$fridgeMessages.length} messages on the fridge</p>
<input>
<button on:click={handleWriteFunction}></button>

<style>

    .is-gir{
        border: 3px solid blue;
    }
    .is-boy{
        border: 3px solid pink;
    }
    .not-a-black-sheep{
        background-color: aliceblue;
        color: black;
    }
    .medium-black-sheep{
        background-color: green;
    }

    .ultra-black-sheep{
        background-color: aquamarine;
    }
</style>