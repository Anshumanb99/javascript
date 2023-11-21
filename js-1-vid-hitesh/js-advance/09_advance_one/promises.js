const promiseOne=new Promise(function(resolve,reject){
    //do an async task like datbase call,network call etc
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
});

//we need to connect resolve() and then . for that we call the resolve() method in promise. else then wont get executed
//.then() have straight relation with resolve
promiseOne.then(function(){
    console.log("Promise consumed");
});

new Promise(function(myresolve,myreject){
    setTimeout(function(){
console.log("async task 2");
myresolve();
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
  setTimeout(function(){
    //resolve can also be used to pass object
  resolve({username:"chai",email:"chai@hmail.com"})
  },1000)  
})
promiseThree.then(function(user){
 console.log(user);   
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        // let error=false;
        if(!error){
            resolve({username:"hitesh",password:"123"});
        }else{
            reject("ERROR:something gone wrong")
        }
    },1000)
});

promiseFour
.then(
    (user)=>{
           console.log(user);
           return user.username;
            }
)
.then((username)=>{
    console.log(username); 
})
.catch(function(error){
console.log(error);
})
.finally(()=>{console.log("The promise is either resolved or rejected");})

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        // let error=false;
        if(!error){
            resolve({username:"javascript",password:"123"});
        }else{
            reject("ERROR:JS gone wrong")
        }
    },1000)
})

//async await syntax is same as that of .then and .catch but async await wait for the work to get done and if its not successful it gives error there immidiately and if its successful then only it moves forward
async function consumePromiseFive(){
    try {
        const response=await promiseFive;
        console.log(response); 
    } catch (error) {
        console.log(error);  
    }
    
}
consumePromiseFive();


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        //to convert the respponse to json it will take time so we are using await.
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

//it will give pending as output
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     data= response.json()
//     console.log(data);
// })
// .catch((error) => console.log(error))