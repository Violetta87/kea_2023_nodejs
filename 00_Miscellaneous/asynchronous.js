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

Solution 3: 

*/ 

new Promise((resolve, reject) => {
    setTimeout(() => {
        try{
            resolve("yaaayy")
        }catch (errorMessage){
            reject(errorMessage)
        }
       
    }, 3000)
}).then(succesMesssage => console.log("succesMessage:", succesMesssage))
.catch(errorMessage => console.log("Error message: ", errorMessage)); 

//create a function called celebrate that returns a promise that celebrates or not

//celebrate er wrapped i et promise. 
async function celebrate(name){
    return new Promise((resolve, reject) => {
        if(name){
            resolve("wuhuuuu")
        }
        else{
            

        }
        
    })
}

celebrate().then(celebrationMessage => console.log(celebrationMessage))

function somethingGoodSomethingBad(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                resolve("good")
            }catch{
                reject("baaad")
            }
        }, 2000)
       
    })
}

//somethingGoodSomethingBad().then(console.log).catch(console.log)

//ifis. - wrapper functions i et scope og invoker med det samme. 
(async function getGoodOrBadMessage(){
    const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
    const celebrationMessage = await celebrate("All of us")
    console.log(somethingGoodSomethingBadMessage, celebrationMessage)
})()

function parallel(){
    Promise.all([somethingGoodSomethingBad(), celebrate("all of us")])
}


