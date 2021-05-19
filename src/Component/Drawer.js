import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import SettingsIcon from '@material-ui/icons/Settings';
import Test from "../Pages/test"


const useStyles = makeStyles({
  list: {

  },
  fullList: {
    width: 'auto',
  },
});

export default function SideDrawer(props) {
  // const changeStandard = props;

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: true,
  });
  console.log(props.standard)

  const [listopen, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!listopen);
  };

  const renderData = (event) => {
    console.log(event.target.innerText);
    props.changeStandard(event.target.innerText);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const standards = [
    'auction_activity_auctionclearancerate',
    'auction_activity_auctionlistedcount',
    'for_sale_both_auction_private_treaty_averageprice',
    'for_sale_both_auction_private_treaty_maximumprice',
    "for_sale_both_auction_private_treaty_medianprice",
    "for_sale_both_auction_private_treaty_minimumprice",
    "for_sale_both_auction_private_treaty_standarddeviationprice",
    "for_sale_both_auction_private_treaty_totalprice",
    "sold_both_auction_private_treaty_averageprice",
    "sold_both_auction_private_treaty_maximumprice",
    "sold_both_auction_private_treaty_medianprice",
    "sold_both_auction_private_treaty_minimumprice",
    "sold_both_auction_private_treaty_standarddeviationprice",
    "sold_both_auction_private_treaty_totalprice",
  ];

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="colored by" />
          {listopen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={listopen} timeout="auto" onClick={toggleDrawer(anchor, false)}>
          <List component="div" disablePadding>
            {standards.map((text) => (
              <ListItem key={text} aria-label={text} button className={classes.nested} onClick={renderData}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} edge="start" color="inherit" className={classes.menuButton} aria-label="menu">
            <MenuIcon />{anchor}
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}