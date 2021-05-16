import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { MapContainer, TileLayer, Map, Popup, GeoJSON } from 'react-leaflet'
import MelGeojson from "../data/SA3Geo.json"
import data from "../data/houseMarket_2019_Feb.json"
import "leaflet/dist/leaflet.css" 
import useStyles from "./Styles"


function getData(suburbCode) {
  const amount = data[suburbCode].auction_activity_auctionlistedcount;
  const midPriceForSale = data[suburbCode].for_sale_both_auction_private_treaty_medianprice;
  const midPriceSold = data[suburbCode].sold_both_auction_private_treaty_medianprice;
  return "total amount:" + amount + "\n mid price for sale:" + midPriceForSale + "\n mid price sold:" + midPriceSold;
}

function getAmount(suburbCode) {
  return data[suburbCode].auction_activity_auctionlistedcount;
}
 
export default function Test(props) {

    const position = [-37.805, 145.00];
    const classes = useStyles();

    const OnEachBlock = (block,layer) =>{
      const suburbCode = block.properties.SA3_code;
      const data = getData(suburbCode);
      const suburbName = block.properties.SA3_name + "\n" + data;
      console.log(getAmount(suburbCode));
      layer.bindPopup(suburbName);
      const amount = getAmount(suburbCode);
      if(300<amount && amount<=600){layer.options.fillOpacity=0.3;}
      else if(600<amount && amount<=900){layer.options.fillOpacity=0.5;}
      else if(900<amount && amount<=1200){layer.options.fillOpacity=0.7;}
      else if(1200<amount && amount<=1500){layer.options.fillOpacity=0.9;}
      else if(amount>1500){layer.options.fillOpacity=1;}
      else{layer.options.fillOpacity=0.2;}

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

    return (
      <Grid item >
      <MapContainer center={position} zoom={11} scrollWheelZoom={true} style={{ height: '90vh', width: '100%' }}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON style={{color:"#885a5a",fillColor:"#ee7a6d",weight:"1"}} data={MelGeojson.features} onEachFeature={OnEachBlock}/>
      </MapContainer>
      </Grid>
    );
}
