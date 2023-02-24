const url = "http://localhost:8080/api/tanks"



fetchTanks();

async function fetchTanks(){
    const getUrl = await fetch(url);
    const json = await getUrl.json();
    console.log(json)
    const data = JSON.parse(json);
    console.log(data);
    const div = document.querySelector("#tanks");

    data.data.array.forEach(tank => {
        div.innerHTML += tank.name + "<br>"
        div.innerHTML += tank.nationality + "<br>" 
        div.innerHTML += tank.year
        
    });
}

//ANDERS BRUGER DEN HER!

//Man får en bite stream (promise) og skal parse det til json 
fetch("/api/tanks")
    .then(response => response.json())
    .then(result => {
        const tanksWrapperDiv = document.getElementById("#tanks");
//innerHTMl aldrig bruge når man henter data fra API - data kan inde crossside scripting - 
// data kan indeholde en fetch i scriptet man henter ned, og derved 
//Man kan sanitaze et script og derfor aldrig udføres som et script tag.
//med innertext undgår man cross site scripting 


        result.data.forEach(tank => {
            const tankDiv = document.getElementById("#tanks");

            const tankNameP = document.createElement("p");
            tankNameP.innerText = tank.name;
            const tankNationalityP = document.createElement("p");
            tankNationalityP.innerText = tank.nationality;


            tankDiv.appendChild(tankNameP);
            tankDiv.appendChild(tankNationalityP)

            const breakBr = document.createElement("br")
            tankDiv.appendChild(breakBr);


            tanksWrapperDiv.appendChild(tankDiv);
    
    });
