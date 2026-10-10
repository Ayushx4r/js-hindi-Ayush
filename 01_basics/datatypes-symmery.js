// premitive 

// 7 type :  String , Number , Boolean , Null , Undefined , symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggendIn = false
const Outsidetemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId =Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3232345566674n



// Reference Type : (Non premetive)

// Arrray, object,functions

// const heros =["salama" , "naagraj" , "dogra"]
//  {
//     name:"Ayush"
//     age :23;

// }

//  const myFunction = function(){
//     console.log("Hello Woeld");
    
 

 //onsole.log(typeof myFunction );

//  console.log(typeof anotherId);
 
//  console.log(typeof heros);

//  console.log(typeof bigNumber);
 
 
 // +++++++++++++++++++++++++++++++++++++++++++++

 // Memory ****

 // stack( using Premetive) -- stack ke andar hmesa copy milta hai

 // heap (using non-Premetive) -- heap ke andar reference milta hai

 let myYoutubename = "Ayush@786"

 let anothername = myYoutubename
 anothername ="Vishal@786"

 console.log(anothername);
 console.log(myYoutubename);

 let userOne  = {
    email: "user@google.com"
    
 }

 let userTwo = userOne
 
 userTwo.email ="Ayushx4@gmail.com"

 console.log(userOne.email);
  console.log(userTwo.email);
 