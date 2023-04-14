/*
javacript is single threaded
Exsamples:
Fetching over a network
Many/heavy calculation
Cryptographic functions
reading /writing to files 
databases 

- these asynchronous function make sure the application doesnt crash. 

solution 1 callbacks: 
callbacks (det er det nodejs er)
con: callback hell, pyramid of doom - if you create a function and it has a callback as argument
which has a function is hell. pyramid of dome - creates  problem. 


solution 2 promises: 
promises - uses callbacks under the hood - compile is the same - 

Two states: 
- pending
- fullfiled (når det er fullfilled; 
    - rejected 
    - resolved)
*/ 

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("yaaaay")
    }, 3000)
}).then(succesMesssage => console.log(succesMesssage))

