
  let store="";

 let cal=(value)=>{ 
    
    let show=document.querySelector("#display")
     store=store+value    
     show.innerHTML=store;

 }

 let result=()=>{

     let show=document.querySelector("#display")

     show.innerHTML=eval(store) //"1+2"=> 3 number
     store=eval(store) // 3 number
     store.toString() // "3" string

 }

 let del=()=>{
     
    let show=document.querySelector("#display")

    store= store.slice(0,-1)   //123456
    show.innerHTML=store;
  
}


 let ac=()=>{

    let show=document.querySelector("#display")
      
    store="";
    show.innerHTML=store;  
 }