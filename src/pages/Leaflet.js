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
  

  // state={
  //   position: this.props.attributes.position,
  //   standard : this.props.attributes.standard,
  //   shapeFile :this.props.attributes.shapeFile
  // };

  // componentWillReceiveProps (nextProps){
  //   this.setState({
  //       position: nextProps.attributes.position,
  //       standard : nextProps.attributes.standard,
  //       shapeFile :nextProps.attributes.shapeFile
  //   })
  // }



  getMax (standard){
    var max = 0;
    for (var key in data){
      if(data[key][standard] != undefined && max < data[key][standard]){
        max = data[key][standard];
      }
    }
    // console.log("max:"+max);
    return max;
  };

  getMin (standard, max){
    var min = max;
    for (var key in data){
      if(data[key][standard] != undefined && min > data[key][standard]){
        min = data[key][standard];
      }
    }
    // console.log("min:"+min);
    return min;
  };

  convertToLocation(position){
    if(position == "mel") return [-37.805, 145.00];
    else if(position== "syd") return [-33.869, 151.209];
    else return [-27.471, 153.026];
}
  

 
  render() {
    const max = this.getMax(this.props.attributes.standard);
    const min = this.getMin(this.props.attributes.standard,max);
    const attributes = {
      shapeFile : this.props.attributes.shapeFile,
      min : min,
      max: max,
      title : this.props.attributes.standard,
    }

    return (
      <MapContainer key={this.props.attributes.position} center={this.convertToLocation(this.props.attributes.position)} zoom={11} scrollWheelZoom={true} style={{ height: '90vh', width: '100%' }}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Geojson shapeFile={this.props.shapeFile} min={min} max={max} title={this.props.standard}/> */}
        <Geojson attributes={attributes}/>
      </MapContainer>
    );
    }
  }

 
export default Leaflet;