import React, { Component, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { MapContainer, TileLayer, Map, Popup, GeoJSON } from 'react-leaflet'
import MelGeojson from "../data/SA3Geo.json"
import data from "../data/houseMarket_2019_Feb.json"
import "leaflet/dist/leaflet.css" 
import useStyles from "./Styles"
import ToolBar from "../Component/NavBar/Toolbar"



function getData(suburbCode) {
  const amount = data[suburbCode].auction_activity_auctionlistedcount;
  const midPriceForSale = data[suburbCode].for_sale_both_auction_private_treaty_medianprice;
  const midPriceSold = data[suburbCode].sold_both_auction_private_treaty_medianprice;
  return "total amount:" + amount + "\n mid price for sale:" + midPriceForSale + "\n mid price sold:" + midPriceSold;
}

function getNumber(suburbCode,standard) {
  return data[suburbCode][standard];
}

function getMax (standard){
  var max = 0;
  for (var key in data){
    if(data[key][standard] != undefined && max < data[key][standard]){
      max = data[key][standard];
    }
  }
  return max;
}

function getMin (standard, max){
  var min = max;
  for (var key in data){
    if(data[key][standard] != undefined && min > data[key][standard]){
      min = data[key][standard];
    }
  }
  return min;
}

class Test extends Component {

    position = [-37.805, 145.00];
    // classes = useStyles();
    // const{standard,setStandard} = props;
    state = {
        standard : "for_sale_both_auction_private_treaty_medianprice"
    }

    setStandard(name){
        this.setState({name});
    }

    max = getMax(this.state.standard);
    min = getMin(this.state.standard,this.max);

    OnEachBlock = (block,layer) =>{
      const suburbCode = block.properties.SA3_code;
      const data = getData(suburbCode);
      const suburbName = block.properties.SA3_name + "\n" + data;
      layer.bindPopup(suburbName);
      const number = getNumber(suburbCode,this.state.standard);
      layer.options.fillOpacity = 0.2 + 0.2*(number - this.min)/((this.max - this.min)/4);

      layer.on({ 
        click: (event) =>{
          event.target.setStyle({
            fillColor: "#ee7a6d",
          });
          console.log(layer.options.fillOpacity);
        },
        // mouseover:(event) =>{
        //   event.target.setStyle({
        //     fillColor: "red",
        //   });
        // },
      });
    }
    render(){
      return (
        <Grid item >
        <ToolBar changeStandard={(name) =>this.setStandard(name)}/>
        <MapContainer center={this.position} zoom={11} scrollWheelZoom={true} style={{ height: '90vh', width: '100%' }}>
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON style={{color:"#885a5a",fillColor:"#ee7a6d",weight:"1"}} data={MelGeojson.features} onEachFeature={this.OnEachBlock}/>
        </MapContainer>
        </Grid>
      );
    }
}

export default Test;