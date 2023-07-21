import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Appbar from './Appbar';
import { useState } from 'react';


function Signup(){
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  return (
    <div>
        <Appbar></Appbar>
        <center>
            <Typography variant={"h6"}>
        <div style={{
            paddingTop:"150px",
            marginBottom:10,
            display:"flex",
            justifyContent:"center"
            
        }}>Welcome to Coursera</div>
        </Typography>
        <center>
        </center>
        <Card variant="outlined" style={{
            width:400,
            padding:20
            
        }}>
        <center> 
        {/* <div style={{
             border:"2px solid black",
             width:"300px",
             padding:20
        }}>  */}
        <TextField id="username" label="Username" variant="filled" fullWidth={true} 
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        
        />

        <br />
        <br />
        <TextField id="password"label="Password" variant="filled" fullWidth={true} 
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        
        />

        <br />
        <br />
        <Button variant="contained"
        onClick={()=>{
          // let username=document.getElementById("username").value        
          // let password=document.getElementById("password").value
          // console.log(username);
          // console.log(password);

          fetch("http://localhost:3000/admin/signup",{
            method:"POST",
            body:JSON.stringify({
              username:username,
              password:password
            }),
            headers:{
              "Content-type":"application/json"
            }
          })
          .then((response)=>response.json())
          .then((data)=>localStorage.setItem("token",data.token))
          .catch((error)=>{
            throw error;
          })
          
        }}
        
        >Sign up</Button>
        
        </center>
        </Card> 
        </center>
    </div>
  )
}

export default Signup