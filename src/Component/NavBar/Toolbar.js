import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "../../styleConfig";
import ScenarioMenu from "./ScenarioMenu.js";
import MapMenu from "./MapMenu";
import HomeButton from "./HomeButton";
import FilterDrawer from "../Drawer"


export default function NavToolbar() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <FilterDrawer />
          <Typography variant="h6" className={classes.title}>
            Real estate Analyze
          </Typography>
          <ScenarioMenu />
          <MapMenu />
          <HomeButton />
        </Toolbar>
      </AppBar>
    // </div>
  );
}