

let FetchData=async()=>{


    try{

      let url='http://localhost:3000/flight'

      let res=await fetch(url,{method:"GET"})
      
      let data=await res.json()
      console.log(data);
    }catch(err){
        console.log("404 Error",err);
        
    }
      

}

