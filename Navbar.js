import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import React from 'react';

const Navbar=()=>{
  return(<>
    <AppBar position="static" style={{backgroundColor: '#d500f9'}}>
        <Toolbar>
        <IconButton color='inherit'>
          <MenuIcon/>
        </IconButton>
            <Typography style={{fontWeight: 'bold',fontSize: '20px',Color:'black'}}>CRICBUZZ</Typography>
        </Toolbar>
    </AppBar>
  </>)
}

export default Navbar;