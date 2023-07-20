import { Typography } from "@mui/material"
import { Button } from "@mui/material"
import Signin from "./Signin"


function Appbar(){
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