import { Component } from "react";
import MelGeojson from "../data/SA3Geo.json"
import data from "../data/houseMarket_2019_Feb.json"
import { GeoJSON } from 'react-leaflet'




class Geojson extends Component{
    

    componentDidMount() {
        this.setState({});
    }

    state={
        min: this.props.min,
        max: this.props.max,
        title: this.props.title
    }
    componentWillReceiveProps (nextProps){
        this.setState({
            min: nextProps.min,
            max: nextProps.max,
            title: nextProps.title
        })
    }


    geojson(min,max,title){
        const OnEachBlock = (block,layer) => {
            console.log(title);
            var suburbCode = block.properties.SA3_code;
            var suburbName = block.properties.SA3_name;
            var number = data[suburbCode][title];
            layer.options.fillOpacity= 0.2 + 0.2*(number - min)/((max - min)/4);
            // console.log(layer);
            // console.log(suburbName+layer.options.fillOpacity);
            layer.bindPopup(suburbName+layer.options.fillOpacity);
            
        }
        return(
            <GeoJSON style={{color:"#885a5a",fillColor:title=="sold_both_auction_private_treaty_totalprice"?"#885a5a":"#ee7a6d",weight:"1"}} data={MelGeojson.features} onEachFeature={OnEachBlock}/>
        );
    }


    render(){
        return (
            this.geojson(this.state.min,this.state.max,this.state.title)
        )
    }
}

export default Geojson;