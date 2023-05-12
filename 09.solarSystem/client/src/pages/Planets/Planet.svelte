<script>
    import { onMount } from "svelte/internal";
    import { BASE_URL } from "../../store/globalStore.js"

    onMount(async() => {

        const response = await fetch($BASE_URL + "/planets", {
            credentials: "include"
        });
        const { data: planets } = await response.json();
        console.log(planets)
    });
</script>

<h1>Welcome to PlanetPage</h1>