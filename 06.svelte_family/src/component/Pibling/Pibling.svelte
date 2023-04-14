<script>
  import Nibling from "../Nibling/Nibling.svelte";

  export let name;
  export let niblings =[];

  const cookies = ["🍪", "🍪", "🍪"]

  function handleShowLove(message){
    console.log(message)
  }

  function handleEatCookie(){
    if(cookies.length === 0){
        console.log("awwww.. no cookies to eat")
    }else{
        cookies.pop()
        console.log("have a cookie my child .🍪")
    }
  }

console.log(niblings)
</script>



<h2>{name}</h2>


{#each niblings as nibling(nibling.id)}
    <Nibling nibling = {nibling} onShowLove= {handleShowLove} piblingName={name} onEatCookie={handleEatCookie}/>
{/each}