<script>


    export let name= "cam";
    export let greeting= "helllloo din fucker"
  
    function changeGreeting(){
      if(greeting === "hello"){
        greeting = "goodbye"
      } else{
        greeting = "hello"
      }
    }
  
  </script>

<h1 on:click={changeGreeting} on:keydown={changeGreeting}>{greeting} {name}.</h1>



<style>
  h1{color: pink}
</style>