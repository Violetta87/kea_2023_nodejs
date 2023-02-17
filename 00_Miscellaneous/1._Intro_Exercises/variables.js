//rule 1 - you have to assign a value when declaring. 
const me; 

const me = {

    /*
    key : value
    === key-value pairs 
    */
   name: "johannes"
};

//rule 2 : cannot reassign to contant
//me = {}

me.name = "Camella"
//man kan ikke ændre me, andet ved at adde en key

console.log(me)

//you can you append by doing this
const hobbies = ["football", "swimming"]
hobbies.push("cooking")
me.hobbies = hobbies;

const hobbieOne = "singing is 'nice'";
const hobbieTwo = "dancing";
`` //we injekting some code = string interpolation - string  literal: brugt til at repræsentere en string value
const hej = `cooking skills level is: ${2+2}`;

