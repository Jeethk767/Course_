import { Typography } from "@mui/material"
import { Button } from "@mui/material"
import Signin from "./Signin"
import { useEffect } from "react"


function Appbar(){
  useEffect(()=>{
   fetch("http://localhost:3000/admin/me",{
    method:"GET",
    headers:{
      "Authorization":"Bearer " +localStorage.getItem("token")
    }
   })
   .then((response)=>response.json())
   .then((data)=>console.log(data))
   .catch((error)=>{
    throw error
   })
  },[])
   
  return (
    <div>
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            padding:5
        }}>
        <Typography>Coursera</Typography>
        
        <div>
        <Button 
        onClick={()=>{
            window.location="/login";
        }}
        > SignIn</Button>
        <Button
        onClick={()=>{
            window.location="/signup"
        }}
        > SignUp</Button>
        </div>
    </div>
    </div>
  )
}

export default Appbar