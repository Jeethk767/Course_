import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Signin from "./Signin";
import { useState, useEffect } from "react";
import Courses from "./Courses";
function Appbar() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.username) {
        setUserEmail(data.username);
      }
    })
    .catch((error) => {
      throw error;
    });
  }, []);

  if (userEmail) {
    return (
      <div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 5
        }}>
          <Typography>Coursera</Typography>
          
          <div>
              {userEmail}
            <Button
              onClick={() => {
                localStorage.setItem("token",null )
                window.location = "/signup";
              }}
            > Logout</Button>
          </div>
        </div>
      </div>
    ) 
  }

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 5
      }}>
        <Typography>Coursera</Typography>
        
        <div>
          <Button 
            onClick={() => {
              window.location = "/login";
            }}
          > SignIn</Button>
          <Button
            onClick={() => {
              window.location = "/signup";
            }}
          > SignUp</Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;