<script>
    import { BASE_URL, myUsername } from "../../stores/globalStore";

    let username= "";

    function handleRegistration(){
        fetch($BASE_URL + "/register", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ username }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        //når jeg genopfrisker husker den username.
        myUsername.set(username)
       
</script>

<h1>Please register</h1>

<input placeholder="username.." bind:value={username}>
<button on:click={handleRegistration}>Register now</button>