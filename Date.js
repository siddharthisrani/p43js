

// let time= new Date();

// console.log(time.toLocaleString());

// let time1=time.getFullYear() // year
// let time2=time.getMonth() // month
// let time3=time.getDay() // day
// let time4=time.getHours() // hour
// let time5=time.getMinutes() // minute
// let time6=time.getSeconds() // second   
// let time7=time.getMilliseconds()
// console.log(time7);



// let get=()=>{

//     let show=document.querySelector("#display")

//     let curntime=new Date()

//     show.innerHTML=curntime.getFullYear()

// }


// getting days
// let days=()=>{

//     let display=document.querySelector("#Show")

//     let time=new Date()
//     let day=time.getDay() // 4

//      let arr=["Sunday","Mon","Tue","Wed","Thru","Fri","Sat"]

//      display.innerHTML= arr[day]      
    
// }


// age calculator
// let age=()=>{
  
//     let inpp=document.querySelector("#inp").value;  //2000
//     let dis=document.querySelector("#show")

//     let time=new Date()
//     let year=time.getFullYear() //2025 

//     let age=year-inpp
//     dis.innerHTML=`You are ${age} year old`

// }

// setInterval(function,1000)


  // digital clock
  // setInterval(()=>{
  //   let show=document.querySelector("#display")
  //   let time=new Date()
  
  //   let curntime=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    
  //   show.innerHTML=curntime;
  // },1000)


  // alaram


  let alarm=()=>{
   
    let inp=document.querySelector("#inp").value;   //  12:05
    let show=document.querySelector("#display")
  
    let inter=setInterval(()=>{
      let time=new Date() //object
      let alarmtime=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}` // 12:5  //gethour => number
  
      if(alarmtime==inp){
        show.innerHTML="Alarm is ringing"
        document.querySelector("#aud").play()

        setTimeout(()=>{
          document.querySelector("#aud").pause()
          clearInterval(inter)
        },6000)

      }
      else{
        show.innerHTML="Alaram set"
      }
  
    },1000)
    
  }