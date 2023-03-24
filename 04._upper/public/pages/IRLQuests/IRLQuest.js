
/**
 * const url = 'https://www.boredapi.com/api'

//practice this fetch method. 
//hold things in the scope - hvis det ligger i scopet, eksisterer det kun i scopet
//udenfor scope - bliver ikke garbage collected, og fylder i memory - 
//med store applikationer - ligger der meget i memory som reloades, hvis ting ikke eksisterer kun i scopet- 
//hvis ting sker kun i scopet, behøves variabel navne ikke. 
//man kan udeblivee med kommentarer, i og med at variabelnavnene fortæller noget om koden. 
fetch(url).then(response => response.json()).then(result => {
    console.log(result);
    const data = document.getElementById("quest");
    //innerhtml tillader crosssite scripting(injection attack) - som kan stjæle credentials
    data.innerText = result.message;

})

 * 
 * 
 * 
 */
//task fetch 

function fetchQuest(activityQueryString=""){
    fetch('https://www.boredapi.com/api/activity'+activityQueryString)
    .then(response => response.json())
    .then(result => {
        document.getElementById("quest").innerText = result.activity;

    });
}
fetchQuest();

function getNewQuest (){
    const dropdown = document.getElementById("activity-dropdown");
    fetchQuest(`?type=${dropdown.value}`);
}

document.getElementById("fetch-new-quest").addEventListener('click', getNewQuest)