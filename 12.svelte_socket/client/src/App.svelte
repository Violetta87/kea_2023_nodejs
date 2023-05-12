<script>

import Colors from "./pages/color/Colors.svelte";
import Register from "./pages/register/Register.svelte";
import { BASE_URL, myUsername } from "./stores/globalStore";
import { onMount } from "svelte";
//man vil kun gøre det en gang, komponent reload, hver gang komponent reloader, køre den fetch igen. 
//include - inkludere session id. 
onMount(async () => {
  const response = await fetch($BASE_URL + "/users/me", {
    credentials: "include",
  });
  const result = await response.json();
  myUsername.set(result.data);
});
  

</script>

{#if $myUsername}
<Colors />
{:else}
<Register/>
{/if}

