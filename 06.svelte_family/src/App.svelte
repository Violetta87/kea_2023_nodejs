<script>
  import Home from "./component/home/Home.svelte";
  import Pibling from "./component/Pibling/Pibling.svelte";

  

  const piblings = ["cam", "Laura", "tutu"]
  const niblings = [
    {
      id:1,
      name: "Signe",
      isGirl: true,
      cookies: []
    },
    {
      id: 2,
      name: "Guler",
      isGirl: true,
      blackSheep: "medium-black-sheep",
      cookies: []
    },
    {
      id:3,
      name: "lulu",
      blackSheep: "Ultra-black-sheep",
      cookie: []
    }
  ]

</script>

<Home>
  <h2>Heeeeej this is the home of the svelte fam</h2>
  <Pibling name={piblings[0]} niblings={niblings}/>
  <Pibling name={piblings[1]} niblings={niblings}/>

</Home>