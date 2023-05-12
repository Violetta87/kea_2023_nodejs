<script>
import { colorsList, myUsername } from "../../stores/globalStore";
import io from "socket.io-client"
const socket = io("localhost:8080");

let choosenColor = "#000000";

  function handleColorChoosen(){
      socket.emit("a client choose a color", {data: choosenColor, username: $myUsername})
    };

  socket.on("a new color just dropped", (data) => {
      document.body.style.backgroundColor = data.data
      });
      
      colorsList.update(list => {
        list.push({
          color: choosenColor,
          username: data.username
        })
        return list;
      })
  

</script>
  
  <input id="color" type="color" bind:value={choosenColor}>
  <button on:click={handleColor}>Send color</button>
  