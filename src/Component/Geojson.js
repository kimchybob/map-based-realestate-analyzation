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

    //when defining functions, what is the diffrence between fun=()=>{} and fun(){}  ??
    popup(suburbName,title,number){
        return (
            <p>
                suburbName + "\r" + number
            </p>
            
        )
    }

    stringToHTML = function (str) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body;
    };

    geojson(min,max,title){
        const OnEachBlock = (block,layer) => {
            var suburbCode = block.properties.SA3_code;
            var suburbName = block.properties.SA3_name;
            var number = data[suburbCode][title];
            layer.options.fillOpacity= 0.2 + 0.2*(number - min)/((max - min)/4);
            // layer.popup().setContent('<p>Hello world!<br />This is a nice popup.</p>');
            layer.bindPopup(this.stringToHTML(suburbName+"\n"+number)).openPopup();
            // layer.on({ 
            //     click: (event) =>{
            //       event.target.setStyle({
            //         fillColor: "#ee7a6d",
            //       });
            //     //   event.target.popup().setContent('<p>Hello world!<br />This is a nice popup.</p>')
            //     },
            //   });
            
        }
        return(
            <GeoJSON key={this.props.title} style={{color:"#885a5a",fillColor:"#ee7a6d",weight:"1"}} data={MelGeojson.features} onEachFeature={OnEachBlock}/>
        );
    }


    render(){
        return (
            this.geojson(this.state.min,this.state.max,this.state.title)
        )
    }
}

export default Geojson;