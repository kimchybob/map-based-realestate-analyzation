import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { MapContainer, TileLayer, Map, Popup, GeoJSON } from 'react-leaflet'
import MelGeojson from "../data/SA3Geo.json"
import data from "../data/houseMarket_2019_Feb.json"
import "leaflet/dist/leaflet.css" 
import PopupCard from "../Component/PopupCard"
import { makeStyles } from "@material-ui/core/styles";
import Geojson from "../Component/Geojson"





 
class Leaflet extends Component {
  
  static defaultProps = {
    center: {
      lat: -37.945,
      lng: 145.35
    },
    zoom: 10
  };

  state={
    position: this.props.position,
    standard : this.props.standard,
    keyMAP: Math.random(),
  };

  componentWillReceiveProps (nextProps){
    this.setState({
        position: nextProps.position,
        standard : nextProps.standard,
    })
  }



  getMax (standard){
    var max = 0;
    for (var key in data){
      if(data[key][standard] != undefined && max < data[key][standard]){
        max = data[key][standard];
      }
    }
    console.log("max:"+max);
    return max;
  };

  getMin (standard, max){
    var min = max;
    for (var key in data){
      if(data[key][standard] != undefined && min > data[key][standard]){
        min = data[key][standard];
      }
    }
    console.log("min:"+min);
    return min;
  };

  

 
  render() {
    const max = this.getMax(this.props.standard);
    const min = this.getMin(this.props.standard,max);

      return (
        <MapContainer key={this.props.position} center={this.props.position} zoom={11} scrollWheelZoom={true} style={{ height: '90vh', width: '100%' }}>
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Geojson min={min} max={max} title={this.props.standard}/>
        </MapContainer>
      );
    }
  }

 
export default Leaflet;