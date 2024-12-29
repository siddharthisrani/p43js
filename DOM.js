
// function go(){


// }

//Arrow functions

const go=()=>{

    let show= document.querySelector("#text")
      //document.getElementById("text")
      //document.getElementsByClassName("text")
    show.innerHTML="Hello World";
    show.style.backgroundColor="red";
}

let change1=()=>{
 
    let show=document.querySelector("#img")
    // show.src="img2.jpeg"   
    show.style.scale="1.5";
    show.style.transform="rotate(90deg)";

}

// let change3=()=>{

//   let show=document.querySelector("#img")
//   show.src="img1.jpeg" 



// }

// let change2=()=>{
 
//   let show=document.querySelector("#img")
//   show.src="img1.jpeg"   

// }


let rot=()=>{

         let doo=document.querySelector("#box1")
         doo.style.rotate="45deg";
         doo.style.backgroundColor="red";
          doo.style.borderRadius="50%";
          doo.style.transition="all 2s"  


}

let back=()=>{

  let doo=document.querySelector("#box1")
  doo.style.rotate="90deg"
  doo.style.backgroundColor="green";
   doo.style.borderRadius="0%"


}


let counter=16;  

let inc=()=>{       
    let show=document.querySelector("#show")
   counter++;
   show.style.fontSize=counter+"px" //17px
}

let dec=()=>{ 
      
  let show=document.querySelector("#show")
 counter--;
 show.style.fontSize=counter+"px"

}

let hidee=()=>{

let pop=document.querySelector("#popup")

  pop.classList.toggle('hidden');
 
// if(pop.style.display=="none"){
//   pop.style.display="block"
// }
// else{
//   pop.style.display="none"
// }

}


