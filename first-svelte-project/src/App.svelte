<script> 
import Greeter from "./lib/Greeter.svelte";
import FavoriteBirds from "./lib/favoriteBirds.svelte";
import Garden from "./lib/Garden.svelte";
import GardenGate from "./lib/GardenGate.svelte";
</script>

<Greeter /> 
<Greeter name ="uncle bob" greeting="din tissemyre"/> 
<Greeter name="Martin"/> 
<Greeter/> 

<img alt="logo" src="../src/assets/svelte.svg">

<FavoriteBirds/>
<Garden/>
<GardenGate/>