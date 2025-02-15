
// let startt=()=>{

//    setTimeout(()=>{
//     console.log("I am running");
//    },3000)  
    
// }


//Syncronus  Asyncronus

//JS is syncronus but Settimeout make it  behave like asyncronus

// console.log("Starting")

// setTimeout(()=>{
//     console.log("I am running")
// },3000)

// console.log("Ending");


// let counter=0
// let startt=()=>{

//     // setInterval(()=>{
//     //     console.log("I am running");
//     // },2000)

//     //counter
//    setInterval(()=>{
//     document.querySelector("#box").innerHTML=counter
//     counter++;
//    },2000)

// }



// let intr=setInterval(()=>{
//     console.log("Running");
    
// },1000)

// let startt=()=>{
//     clearInterval(intr)
// }



let isname=true;

setInterval(()=>{
    
    let show=document.querySelector("#text")
    show.innerHTML=isname?"Siddharth":"Israni"
    isname=!isname;

    // if(isname==true){
    //     isname=false
    // }
    // else{
    //     isname=true
    // }
    

},1000)


//to change title 

let istitle=true;

setInterval(()=>{
    
    document.title=istitle?"Siddharth":"Israni"
    istitle=!istitle;
},1000)


// Stopwatch


let letgo=()=>{

    let counter=document.querySelector("#timer").value

   let inter= setInterval(()=>{
            
      let display=document.querySelector("#display")
      display.innerHTML=counter
      counter--;

      if(counter==0){
        clearInterval(inter)
      }

    },1000)

}