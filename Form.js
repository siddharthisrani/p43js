
let submitt=()=>{

       let name=document.querySelector("#inpname").value;
       let email=document.querySelector("#inpemail").value;
       let number=document.querySelector("#inpnum").value;
       let pass=document.querySelector("#inppass").value;
       let cpass=document.querySelector("#inpcpass").value;

       let errname=document.querySelector("#errorname")
       let erremail=document.querySelector("#erroremail")
       let errnumber=document.querySelector("#errornum")
       let errpass=document.querySelector("#errorpass")
       let errcpass=document.querySelector("#errorcpass")
         

      if(name===""){
        // let inpnm=document.querySelector("#inpname")
        // inpnm.placeholder="Not filled";
        // inpnm.style.border="2px solid red";
        errname.innerHTML="Please enter your name";
        errname.style.color="red";
        errname.style.fontSize="30px"
       return false;
      }

     else if(email===""){
        erremail.innerHTML="Please enter your email";
        errname.innerHTML="";
        return false
      }
   
    //   is not a number = "abc" // true
    //   is not a number = "343" // false

      else if(isNaN(number)){
        errnumber.innerHTML="Please enter digit only";
        return false;
      }
       
      else if(number.length!=10){
          
        errnumber.innerHTML="Please enter 10 digit number";
        return false;
      }


      else if(!(email.includes("@")&& email.includes(".com"))){

        erremail.innerHTML="Please enter valid email"
        errname.innerHTML="";
        return false;

      }


      else if(pass !== cpass){
        errpass.innerHTML="Password and confirm password should be same";
        return false;
      }


      else if(!(
        pass.match(/[1234567890]/)
         && pass.match(/[!@#$%^&*]/) 
         && pass.match(/[a-z]/)
         && pass.match(/[A-Z]/)
      )){
        errpass.innerHTML="Pass should have num,symbol,capital & small letters";
        return false;
      }
}