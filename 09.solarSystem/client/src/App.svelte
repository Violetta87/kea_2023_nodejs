<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./pages/Home/Home.svelte";
	import Planet from "./pages/Planets/Planet.svelte";
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/planets">PlanetPage</Link>
	</nav>
</Router>