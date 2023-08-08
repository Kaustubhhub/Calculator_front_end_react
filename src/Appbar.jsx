import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { colors } from '@mui/material';


function Appbar(){
    return <div style={{backgroundColor:"#eeeeee",display:"flex", justifyContent:"space-around", height:"75px"}}>
        <Button variant={'text'} style={{marginRight:"10px", color:"black"}}>
            Calculator
        </Button>
        <div style={{display:"flex", justifyContent:"space-round", boxShadow:""}}>
            <Button variant={'contained'} style={{marginRight:"10px", height:"50px", marginTop:"9px"}}>
                Simple Calculator
            </Button>
            <Button variant={'contained'} style={{height:"50px",marginTop:"9px"}}>
                Scientific Calculator
            </Button>
        </div>
    </div>
}

export default  Appbar;