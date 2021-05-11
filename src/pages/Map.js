import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Grid } from '@material-ui/core';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  // map.data.loadGeoJson('PATH');
  // static defaultProps = {
  //   center: {
  //     lat: -37.945,
  //     lng: 145.35
  //   },
  //   zoom: 11
  // };
 
  render() {
    let map;

    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -37.945, lng: 145.35 },
        zoom: 8,
      });
    }
    // return (
    //   <Grid item>
    //     <div style={{ height: '100vh', width: '100%' }}>
    //       <GoogleMapReact
    //         bootstrapURLKeys={{ key: "AIzaSyChuSnTDJFu49qaND1aweNAZ57OOipEqKk" }}
    //         defaultCenter={this.props.center}
    //         defaultZoom={this.props.zoom}
    //       >
    //         {/* <AnyReactComponent
    //           lat={59.955413}
    //           lng={30.337844}
    //           text="My Marker"
    //         /> */}
    //       </GoogleMapReact>
    //     </div>
    //   </Grid>
      
    // );
  }
}
 
export default Map;