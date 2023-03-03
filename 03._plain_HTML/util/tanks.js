const { tanks } = require("./tanks.json")


//vi får path, exports, 
//console.log(module)

function getTanks(){
    return tanks
}

function addTanks(tank){
    tanks.push(tank);
    return tanks
}

module.exports = {
    getTanks,
    addTanks
};