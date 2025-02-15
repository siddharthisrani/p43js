VANTA.BIRDS({
    el: "#signcont",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x7252f,
    birdSize: 1.50,
    backgroundAlpha: 0.94
  })

let signup=()=>{


     let signname=document.querySelector("#name").value
     let signemail=document.querySelector("#email").value
     let signnum=document.querySelector("#number").value
     let signpass=document.querySelector("#pass").value


     if(signname==""){
      
        let err=document.querySelector("#name")
           err.style.border="1px solid red";
           return false
     }
    
     localStorage.setItem("name",signname)
     localStorage.setItem("email",signemail)
     localStorage.setItem("number",signnum)
     localStorage.setItem("password",signpass)

     location.href='LocalLogin.html'
     return false

}


let login=()=>{
     
    let loginname=document.querySelector("#loginname").value
    let loginpass=document.querySelector("#loginpass").value

    let localname=localStorage.getItem("name")
    let localpass=localStorage.getItem("password")


    if(loginname==localname && loginpass==localpass){
        
        location.href='LocalHome.html'
    }else{
        alert("Invalid Credentials")
    }

    return false


}

let logout=()=>{
    localStorage.clear()
    location.href='LocalLogin.html'
}