import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Appbar from './Appbar';
import { useState } from 'react';



function Addcourses(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")
    return(
        <div>
            <Appbar></Appbar>
            <center>
                <Typography variant={"h6"}> 
             <div style={{
                 paddingTop:"150px",
                 marginBottom:10,
                display:"flex",
               justifyContent:"center"
                
             }}>Please add the details of the courses you wish to add</div> 
             </Typography>
             {/* {/* </Typography> */}
            {/* <center>
            </center> */}
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
            <TextField  label="title" variant="filled" fullWidth={true} 
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            
            />
    
            <br />
            <br />
            <TextField label="description" variant="filled" fullWidth={true} 
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
            
            />
    
            <br />
            <br />
            <Button
  variant="contained"
  onClick={() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        imageLink: "",
        published: true,
      }),
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token"), // Add space after "Bearer"
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        alert("Added the courses")
      })
      .catch((error) => {
        throw error;
      });
  }}
>
  Add Course
</Button>
            
            </center>
            </Card> 
            </center>
        </div>
      )
}

export default Addcourses