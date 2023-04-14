<script>
    import { fridgeMessages } from "../../store/fridgeMessage";

    function eraseFridgeMessages(){
        fridgeMessages.set([])
    }

    console.log(fridgeMessages);
</script>

<p>..........................</p>
<p> -       Welcome        - </p>

<h5>{$fridgeMessages}</h5>
<button on:click={eraseFridgeMessages}>eraseFridgeMessages</button>

<slot></slot>

