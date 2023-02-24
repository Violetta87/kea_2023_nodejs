fetch("/api/visitors")
    .then(response => response.json())
    .then(result => {
        console.log(result.data)
        upDateVisitor(result.data)
        });

function upDateVisitor(visitorCount){
    const visitorCountdiv = document.getElementById("visitorCount");
    visitorCountdiv.innerText = visitorCount;
}

function writeInVistorLog(){
    fetch("/api/visitors", {
        method: "PUT", 
        headers: {
            "Content-Type": "application/json"  
        }})
    .then(response => response.json())
    .then(result => {
        console.log(result)
        upDateVisitor(result.data)  
        });
}