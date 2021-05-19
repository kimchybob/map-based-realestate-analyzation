import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ToolBar from "../Component/NavBar/Toolbar"
// import Leaflet from './Pages/Leaflet';
import Test from './test';
import Leaflet from './Leaflet';



 
class MapPage extends Component {    
    state = {
        standard : "for_sale_both_auction_private_treaty_averageprice"
    }


    setStandard(standard){
        this.setState({standard});
        console.log(this.state.standard);
    }



    render() {

        return (
            <Grid container>
                {this.state.standard}
                <ToolBar standard={this.state.standard} setStandard={(name) =>this.setStandard(name)} />
                <Leaflet standard={this.state.standard} setStandard={(name) =>this.setStandard(name)} onChange={this.stateChange}/>
            </Grid>
            
        );
    }
}
 
export default MapPage;