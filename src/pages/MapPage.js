import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ToolBar from "../Component/NavBar/Toolbar"
// import Leaflet from './Pages/Leaflet';
import Test from './test';



 
class MapPage extends Component {    
    state = {
        standard : "auction_activity_auctionlistedcount"
    }

    setStandard =(name) =>{
        this.setState({name});
    }



    render() {

    return (
        <Test standard={this.state.standard} setStandard={(name) =>this.setStandard(name)}/>
    );
    }
}
 
export default MapPage;