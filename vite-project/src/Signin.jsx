import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Appbar from './Appbar';



function Signin(){
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
                
            }}>Welcome back!!
            </div>
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
            <TextField id="filled-basic" label="Username" variant="filled" fullWidth={true} />
    
            <br />
            <br />
            <TextField id="filled-basic"label="Password" variant="filled" fullWidth={true} />
    
            <br />
            <br />
            <Button variant="contained">Login</Button>
            
            </center>
            </Card> 
            </center>
        </div>
      )
}
export default Signin