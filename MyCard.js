import { Card, CardActions, CardContent, Typography, Button, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import React,{Fragment,useState} from 'react';
import { getMatchDetail } from '../api/Api';
const MyCard =( {match})=>{

    const [detail,setDetail] = useState({});

    const [open,setOpen]=useState(false);
    const handleClick=(id)=>
    {
        getMatchDetail(id).then(data=>{console.log("MATCH DETAILS",data);
        setDetail(data);
        handleOpen();
    }).catch(error=>console.log(error));
    }

    const handleClose=()=>
    {
        setOpen(false);
    };

    const handleOpen=()=>
    {
        setOpen(true);
    };
    const getMatchCart= () =>{

        return(
            <Card style={{margin:'40px',background:'#FFEC64'}}>
                <CardContent>
                   
                <Grid container justify="center" alignItems='center' spacing={4}>
                    <Grid item><Typography variant='h5' style={{color:'darkslateblue',textShadow:'1px 1px 2px black'}}>{match['team-1']}</Typography></Grid>
                    <img style={{width:'85px'}} src={require("../img/vsq.png")}></img>
                    <Grid item><Typography variant='h5' style={{color:'darkslateblue',textShadow:'1px 1px 2px black'}}>{match['team-2']}</Typography></Grid>
                </Grid>
                </CardContent>

                <CardActions>
                <Grid container justify="center">
                    <Button variant="contained" color="secondary" onClick={()=>{handleClick(match.unique_id)}}>show</Button>
                    <Button variant="contained" color="primary" style={{marginLeft:'30px'}}>Time:{new Date(match.dateTimeGMT).toLocaleString()}</Button>
                </Grid>
                </CardActions>
            </Card>
        )
   };

   const getDialog=()=>
   {
       return(<Dialog open={open} onClose={handleClose}>
           <DialogTitle id="alert-dialog-title">{"Match DETAILS..."}</DialogTitle>
           <DialogContent>
               <DialogContentText id="alert-dialog-description">
                   <Typography>{detail.stat}</Typography>
                   <Typography>MATCH:
                    <span style={{fontStyle:'italic',fontWeight:'bold'}}>
                   {detail.matchStarted? "STARTED": "STIL NOT STARTED"}
                   </span></Typography>

                   <Typography>SCORE:
                    <span style={{fontStyle:'italic',fontWeight:'bold'}}>
                   {detail.score}
                   </span>
                   </Typography>
               </DialogContentText>
           </DialogContent>

           <DialogActions><Button onClick={handleClose} color='secondary' autoFocus>CLOSE</Button></DialogActions>
       </Dialog>);
   }
     return <Fragment>
         {getMatchCart()}
         {getDialog()}
     </Fragment>
};

export default MyCard;