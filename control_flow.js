# GIET_MERN
//const array =[1,2,3,4,5];

//for(let i=0; i<array.length; i++){
  //  console.log(array[i]);
//}



//const count = 0;

//while (count < 5) {
   // console.log("count is:"+ count);
    //break;
//}


//let num = 0;

//do {
    //console.log("number is:"+num);
  //  num++;
//} while(num<5);

//function sayName(name) {
  //  console.log(name);
//}

//sayName("Arpita")

//Arrow function
//const sayName = (name)=> {
//console.log(name);
//}
//sayName("arpita")
//console.log(sayName); //function declaration
//function sayName (name) {
  //  console.log(name);
//}
//sayName("arpita")
 //parameter //function invocation/function call

 //const age = 18;
   
 //if (age > 18){
   // console.log("i'm an adult");
 //}else{
   // console.log("i'm under 18");
 //}
 
 //age > 22 ? console.log("i'm an adult"):console.log("i'm under 18");


 //Nullish coalescing operator (??):null underfined
//let val1;
//val1=undefined ?? 10 ?? 20
//console.log(val1);

//optional chaining
const dog ="ramu"
const adventurer = {
    name:'alice',
    cat: {
        name: 'dinah',
    },
};
const dogName = adventurer.dog?.name;
console.log(dogName);