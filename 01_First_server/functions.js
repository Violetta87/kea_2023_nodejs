//callbackfunction; function past as an argument til et andet stykke kode. 
function genericActionPerformer(genericAction, genericName){


    return genericAction(genericName);
}


const subtract = (name) => `${name} is subtracting`;

console.log(genericActionPerformer(subtract, "Tobias"));

//task without touching the two functions above but still using them below
//task make it console.log( tobias dfdgdfg)

const walk = (name) => `${name} is walking`

console.log(genericActionPerformer(walk,"Nicolas"));

const newAssign = (name) =>`${name} is reading`
console.log(genericActionPerformer(newAssign, "Andrea"));

