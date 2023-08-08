import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Simplecalculator(){
    return <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{height:"430px",borderRadius:"15px",border:"1px solid black", width:"400px", backgroundColor:"cyan", marginTop:"250px"}}>
            <div style={{height:"50px", width:"375px", borderRadius:"35px", marginLeft:"13px", marginTop:"10px", textAlign:"center"}}>
                <Typography variant="h4">Simple Calculator</Typography>
            </div>
            
            <div style={{height:"100px", width:"375px", backgroundColor:"white",border:"1px solid blue", borderRadius:"35px", marginLeft:"13px", marginTop:"5px"}}></div>
            <div style={{marginTop:"10px",display:"flex", justifyContent:"space-around"}}>
                <Button variant={'contained'} style={{marginRight:"10px"}}>AC</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>+/-</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>%</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>÷</Button>            
            </div>
            <div style={{marginTop:"10px",display:"flex", justifyContent:"space-around"}}>
                <Button variant={'contained'} style={{marginRight:"10px"}}>7</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>8</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>9</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>X</Button>            
            </div>
            <div style={{marginTop:"10px",display:"flex", justifyContent:"space-around"}}>
                <Button variant={'contained'} style={{marginRight:"10px"}}>4</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>5</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>6</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>-</Button>            
            </div>
            <div style={{display:"flex",marginTop:"10px", justifyContent:"space-around"}}>
                <Button variant={'contained'} style={{marginRight:"10px"}}>1</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>2</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>3</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>+</Button>            
            </div>
            <div style={{marginTop:"10px",display:"flex", justifyContent:"space-around"}}>
                <Button variant={'contained'} style={{marginRight:"10px",width:"165px"}}>0</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>.</Button>
                <Button variant={'contained'} style={{marginRight:"10px"}}>=</Button>          
            </div>
        </div>
    </div>
}

 export default Simplecalculator;