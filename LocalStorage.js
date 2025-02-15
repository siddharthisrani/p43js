
let set=()=>{

    let inpname=document.querySelector("#name").value 
    let inpage=document.querySelector("#age").value 

    localStorage.setItem("Name",inpname);
    localStorage.setItem("Age",inpage)

    location.reload()
    // location.href="BOM.html"

}

let show=document.querySelector("#show")

let name=localStorage.getItem("Name")
let age=localStorage.getItem("Age")

show.innerHTML=`Hello ${name} and your age is ${age} `