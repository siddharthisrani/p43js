

let fetchData= async()=>{

  try{
    let url='http://localhost:3000/doctor';
    let  res= await fetch(url,{method:"GET"})
    
    let data= await res.json()
    console.log(data);
    paginationn(data)
  }
  catch(err){
    console.log( "fetch"+err);
    
  }

}


let searchh=async()=>{
  
let searchinp=document.querySelector("#searchinp").value.toLowerCase();

let url='http://localhost:3000/doctor';
    let  res= await fetch(url,{method:"GET"})

    let data= await res.json()
  
  let filterData=data.filter((e)=>{
    return e.name.toLowerCase().includes(searchinp) ||  e.age.toString().includes(searchinp)
  })

  paginationn(filterData)

}


let paginationn=(data)=>{
  $('#pagin').pagination({
    dataSource: data,
    pageSize: 5,
    showGoInput: true,
    showGoButton: true,
    callback: function(data, pagination) {
        
        dataShow(data)
    }
})
}

let dataShow=(data)=>{
    let show=document.querySelector("#display")
    show.innerHTML=""
    data.map((e)=>{

          show.innerHTML+=`
          
              <tr>
                  <td> ${e.name} </td>
                  <td> ${e.age} </td>
                  <td> ${e.number} </td>
                  <td> ${e.problem} </td> 
                  <td> ${e.people} </td> 
                  <td> ${e.date} </td>
                  <td> ${e.price} </td>
                  <td> ${e.people*e.price} </td>    
                  <td onclick="condel('${e.id}')">Cancel</td>                                
                  <td onclick="fromFill('${e.id}')">Edit</td>                                

             </tr>      
                `
                }) 

}
let condel=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            del(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}



let del=(id)=>{

    let url=`http://localhost:3000/doctor/${id}`
   
    fetch(url,{method:"DELETE"})


}


let ins=()=>{

      let inpname=document.querySelector("#insname").value;
      let inpage=document.querySelector("#insage").value;
      let inpnum=document.querySelector("#insnum").value;
      let inpprob=document.querySelector("#insprob").value;
      let inppeople=document.querySelector("#inspeople").value;
      let inpdate=document.querySelector("#insdate").value;
   
      let url='http://localhost:3000/doctor'
   fetch(url , {

     method:"POST",
     headers:{
        "Content-Type":"application/json"
     },
      body:JSON.stringify(

             {
                name:inpname,
                age:inpage,
                number:inpnum,
                problem:inpprob,
                people:inppeople,
                date:inpdate,
                price:250

             }


      )          
    
    }   
        )

location.href="Crud.html"
return false

}



let fromFill= async (id)=>{

   let url=`http://localhost:3000/doctor/${id}`
   
   let res= await fetch(url,{method:"GET"})
   let data= await res.json()
  
   let formData=`      
        
      Enter Name : <input type="text" value="${data.name}" id="upname"> <br>
     Enter Age : <input type="number" value="${data.age}"  id="upage"> <br>
      Enter Number : <input type="number" value="${data.number}" id="upnum"> <br>
         
       Enter Problem: <select id="upprob">
            <option value="Cold">Cold</option>
            <option value="Fever">Fever</option>
            <option value="Cough">Cough</option>
            <option value="Pain">Pain</option>
        </select> <br>

    Enter People: <input type="number" value="${data.people}" id="uppeople"> <br>
     Enter Date: <input type="date" value="${data.date}"  id="update"> <br>
        
     <input type="submit" onclick="return FinalUpdate('${data.id}')">   
   `   
document.querySelector("#Formdisplay").innerHTML=formData

}



let FinalUpdate=(id)=>{
   
  let Name=document.querySelector("#upname").value
  let Age=document.querySelector("#upage").value
  let Number=document.querySelector("#upnum").value
  let Prob=document.querySelector("#upprob").value
  let People=document.querySelector("#uppeople").value
  let Date=document.querySelector("#update").value
    
  let url=`http://localhost:3000/doctor/${id}`
  fetch(url,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(
      {
        name:Name,
        age:Age,
        number:Number,
        problem:Prob,
        people:People,
        date:Date,
        price:250
      }
    )
  })
    
  return false;

}