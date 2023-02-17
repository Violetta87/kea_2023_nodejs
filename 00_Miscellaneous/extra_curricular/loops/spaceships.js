const spaceships = [
    { name: "chinease", isPriceless: false, cost: 1_000_000},
    { name: undefined, type: "UFO", isPriceless: true, cost: Number.MAX_SAFE_INTEGER},
    { name: "Apollo 13", versionNumber: 23, isPriceless: false, cost: 2_000_000},
]

//foreach loop and console log each item
//variadic function = in java - definerer med ... )

spaceships.forEach((spaceship, index, array) =>{
    console.log(array);
    console.log(spaceship);
});

//task make spaceships make the owner China

const spaceshipWithOwners = spaceships.map((spaceship) =>{
    spaceship.owner = "china"
    return {...spaceship, owner: "china"};//we do this to avoid mutable array list. 
});

console.log(spaceshipWithOwners);

//add a cost of priceless to all


//console log the ones that is true , priceless

const spaceShipFalse = spaceshipWithOwners.filter((spaceship) =>spaceship.isPriceless === false);
const spaceShipTrue = spaceshipWithOwners.filter((spaceship) =>spaceship.isPriceless === true);

console.log(spaceShipFalse, "false answer");
console.log(spaceShipTrue, "true answer");

const spaceShipsundermil = spaceshipWithOwners.find(spaceship => spaceship.cost < 2_000_000);
console.log(spaceShipsundermil);