import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { MapContainer, TileLayer, Map, Popup, GeoJSON } from 'react-leaflet'
import MelGeojson from "../data/SA3Geo.json"
import data from "../data/houseMarket_2019_Feb.json"
import "leaflet/dist/leaflet.css" 
import PopupCard from "../Component/PopupCard"
import { makeStyles } from "@material-ui/core/styles";


 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function getData(suburbCode) {
  const amount = data[suburbCode].auction_activity_auctionlistedcount;
  const midPriceForSale = data[suburbCode].for_sale_both_auction_private_treaty_medianprice;
  const midPriceSold = data[suburbCode].sold_both_auction_private_treaty_medianprice;
  return "total amount:" + amount + "\n mid price for sale:" + midPriceForSale + "\n mid price sold:" + midPriceSold;
}

function getAmount(suburbCode) {
  return data[suburbCode].auction_activity_auctionlistedcount;
}

const useStyles = makeStyles({
  level0 :{
    fill: "#1277B8",
    //不透明度，0~1，数值越高越红
    fillOpacity : 0.1,
  },
});


 
class Leaflet extends Component {
  


  static defaultProps = {
    center: {
      lat: -37.945,
      lng: 145.35
    },
    zoom: 10
  };

  

  OnEachBlock = (block,layer) =>{
    const suburbCode = block.properties.SA3_code;
    const data = getData(suburbCode);
    const suburbName = block.properties.SA3_name + "\n" + data;
    console.log(suburbName);
    layer.bindPopup(suburbName);
    const amount = getAmount(suburbCode);
    if(500<amount<=1000){layer.options.fillOpacity=0.3}
    else if(1000<amount<=1500){layer.options.fillOpacity=0.6}
    else if(amount>1500){layer.options.fillOpacity=0.9}

    // layer.options.fillOpacity=1;
    // layer.on({ 
    //   click: (event) =>{
    //     event.target.setStyle({
    //       fillColor: "red",
    //     });
    //   },
    //   mouseover:(event) =>{
    //     event.target.setStyle({
    //       fillColor: "red",
    //     });
    //   },
    // });
  }

 
  render() {
    const position = [-37.805, 145.00]

    return (
      <Grid item >
      <MapContainer center={position} zoom={11} scrollWheelZoom={true} style={{ height: '90vh', width: '100%' }}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON style={useStyles.level0} data={MelGeojson.features} onEachFeature={this.OnEachBlock}/>
      </MapContainer>
      </Grid>
    );
  }
}
 
export default Leaflet;