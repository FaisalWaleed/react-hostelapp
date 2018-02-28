import React from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends React.Component{
    static defaultProps = {
        center: {lat: 31.5204, lng: 74.3587},
        zoom: 11
    };

    //create new Marker component for each passed prop
    render(){
        return(
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyBJsYd99S4lKqGGTWCYna9oXGngaDcThxM"}}
                defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
                defaultZoom={this.props.zoom}
            >
                {this.props.children}
            </GoogleMapReact>
        );
    }
}

export default Map;