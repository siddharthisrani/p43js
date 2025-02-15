
// // let arr =["Siddharth",25,"Bhopal"]  // array
// // let text="fnvfnfnb fnfsln nfnvksfn"; // string
// //   // Object
// // let obj={

// //     name:"Siddharth",
// //     age:25,
// //     city:"Bhopal",
// //     welcome: function(){
// //         console.log(`Welcome to ${this.name} ${this.city}  home`);
// //     },
// //     fruits:["Apple","Mango", "Banana"]
  
// //     // name:"Sid"   key unique will overwrite upper-one      
// // }





// // //obj.welcome(); // to call a function
 
// // //console.log(obj.fruits[1]);


// // // console.log(arr[1]);  // array acces

// // // console.log(obj.name);  // object Acces

// // // obj.email="siddhath@gmail.com";  // to insert data from outside

// // // //console.log(obj); // to see updated object

// // // delete obj.city; // to delete data by key-name

// // // console.log(obj);
 
// // //Destructure

// // const {name,city,fruits}=obj  // Destructuring

// // console.log(fruits);

// // //spread operator  (...)

// // let obj1={
// //   name:"Sid",
// //   city:"Bhopal"
// // }
// // let obj2={
// //   age:25,
// //   country:"India"
// // }

// // let newobj={...obj1,...obj2}
// // console.log(newobj);




// // Array of object

// let student=[
//   {name:"Sid", age:25 },
//   {name:"jatin",age:26},
//   { name:"Rahul",  age:27}
//  ]


//  student.forEach((e)=>{
  
//     let output=document.querySelector("#display")

//     output.innerHTML+=`
//     <div>
//        <h1 >${e.name}</h1>
//        <h1>${e.age}</h1>
//     </div>
//     `
//  })

// //  let newarr=student.map((e)=>{
// //      return e.age+1;
// //  })

// // let fill=student.filter((e)=>{
// //   return e.age>25
// // })
// //  console.log(fill);
 


// function num(){

// }

// let num=()=>{

// }

// anonymus
// let hii=function(){
//   console.log("anonymus function");  
// }
// hii();

// // special type of anonymus function
// let newarrow=()=>{
//   console.log("hi");
  
// }
// newarrow()


// IIFE 

(function(){
    console.log("IIFE fun");    
  }
)();