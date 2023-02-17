const rocks = [
    {name: "led Zeppelin", age: 50},
    {name: "neptune", age: 20},
    {name: "Dwayne Johnson", age: 45}
]


//opgave : lav alle rocks til 1 år ældre ig gem værdien til rocks aged one year.
// loop method: map, filter, find, reduce, sort, foreach, 



const rocksAgedOneYear = rocks.map( rock =>{
    rock.age ++;
    return rock
});

console.log(rocksAgedOneYear);
console.log(rocks)