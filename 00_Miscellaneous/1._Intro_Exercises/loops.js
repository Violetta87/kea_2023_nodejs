const rocks = [
    {name: "led Zeppelin", age: 50},
    {name: "neptune", age: 20},
    {name: "Dwayne Johnson", age: 20}
]

//Altid bruge loop methods. 

/**
 * Argument 1. brevity
 * Argument 2. 
 * Argument 3.
 * Argument 4.
 * Argument 5. not being able to acess both element and index.
 * Argument 6.
 * Argument 7: Dont mutate the previous list. 
 */
//enhanced - løse argument 5.  
for()



//opgave : lav alle rocks til 1 år ældre ig gem værdien til rocks aged one year.
// loop method: map, filter, find, reduce, sort, 
//foreach (giver mening med dom elementer(ved dom manipuler)), 

//spreadoperater = key value pairs - hvis man har et objekt med en masser properties. 
// behøver vi ikke skrive
//vi åbner ikke bare en function, men vi returner json - derfor enten pakke det ind i en parentes- 

const rocksAgedOneYear = rocks.map( rock =>{
    return { ...rock, name: rock.name, age: rock.age + 1 }
});

//vi pakker return statement ind i en parentes - og derved viser at dette/json skal returneres.
const rocksAgedOneYearNew = rocks.map( rock =>({ ...rock, name: rock.name, age: rock.age + 1 }));


console.log(rocksAgedOneYear);
console.log(rocks);

//give me the rocks that have even aGES
//side effect = code smell(ved at kigge på ) - modificere et statement udenfor et scope
// - som sker ved at modicere array of rocks
//referencel transparency = 

let newRock 
//Eksempel på at løse argument 7. 
const evenAges = rocks.filter(rock =>{
    //% - remainder - dvs. array sortere
    rock.age %2 ===0
});

console.log(evenAges);