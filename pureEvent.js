
//pure Event listners
//  let btn=document.querySelector("#btn1")

//  btn.addEventListener("click",()=>{

     
//     alert("Btn clicked")

//  })




let btn=document.querySelector("#btn1")

btn.addEventListener("mouseenter",()=>{

     btn.innerHTML="Disable"
     console.log("clicked");
     btn.disabled=true     

})


// let inp=document.querySelector("#inp")

// inp.addEventListener("keydown",(e)=>{

       
//       console.log(e.key);
      

// })



let inp=document.querySelector("#inp")

inp.addEventListener("input",()=>{
   
    let text=document.querySelector("#inptext")

          text.innerHTML= inp.value
     
      
})

