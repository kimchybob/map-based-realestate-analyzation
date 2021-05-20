import React from 'react';
import {Grid,Button,Menu,MenuItem} from "@material-ui/core";
import useStyles from '../../styleConfig';

export default function MapMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickedMelbourne = () => {
    props.setPosition([-37.805, 145.00]);
    setAnchorEl(null);
  };

  const clickedSydney = () => {
    props.setPosition([-33.869, 151.209]);
    setAnchorEl(null);
  };

  const clickedBrisbane = () => {
    props.setPosition([-27.471, 153.026]);
    setAnchorEl(null);
  };

  return (
    <div>
    <Grid item xs={2}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.navbarButton}>
        Map
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={clickedMelbourne}>Melbourne</MenuItem>
        <MenuItem onClick={clickedSydney}>Sydney</MenuItem>
        <MenuItem onClick={clickedBrisbane}>Brisbane</MenuItem>
      </Menu>
    </Grid>

    </div>
  );
}