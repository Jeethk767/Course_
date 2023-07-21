import { useState } from "react";
import Appbar from "./Appbar"
import { useEffect } from "react";
import { Card } from "@mui/material";




function Courses(){
 const [courses,setCourses]=useState([]);

 useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setCourses(data.courses)
      })
    .catch((error) => {
      throw error;
    });
  }, []);  





 return (
    <div>
      <Appbar></Appbar>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
 )
}
 
function Course(props){
    return(
        <div>
            <div style={{
                display:"flex"
                
            }}>
                
            <Card style={{
                width:"100px",
                margin:10,
                minHeight:150,
                minWidth:150

            }}>
                <div style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
        {props.course.title}
        <br /><br />
        {props.course.description}
        </div>
        </Card>
        
        </div>
        </div>
    )
}


export default Courses