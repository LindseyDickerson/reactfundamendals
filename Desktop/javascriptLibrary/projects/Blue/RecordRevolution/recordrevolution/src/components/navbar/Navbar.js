import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

/*Could also do import { Appbar, ToolBar, Typography, Button } from '@material-ui/core';*/

const useStyles = makeStyles({
    root: {
        flexGrow: 1,

    },
    title: {
        flexGrow: 1,
    }, 
    color: {
        backgroundColor: '#0f0d11',
    }
})

const Navbar = () => {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
               <ToolBar className={classes.color}>
                   <Typography variant="h6" className={classes.title} id="navTitle">Record Revolution</Typography>
                   <Button type="button" color="inherit">Log In</Button>
                   </ToolBar> 
            </AppBar>
        </div>  
    );
};
export default Navbar;