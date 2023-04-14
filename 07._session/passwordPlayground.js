//never save passwords as plaintext - ikke send to frontend. 
//bcrypt basseret på blowfish cipher. - algoritme der er brugt meget - benefits;
// - salt routes: 

//hardware er improved og det er derfor nemmere 
import bcrypt from "bcrypt"



const passwordPlaintext = "hunters42";
const passwordPlainText2 = "nothunter"
//fixed lenght output - you can never go back to plaintekst, but we have to mix the salt etc. to get the output
//const hashedPassword = "";
//for ikke at blogge hele applikationen. 
const encryptedPassword = await bcrypt.hash(passwordPlaintext, 12);
console.log(encryptedPassword)

const isSame = await bcrypt.compare(passwordPlaintext, passwordPlainText2);
console.log(isSame)