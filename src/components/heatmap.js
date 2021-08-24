import React, { Component } from 'react'
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react'
export  class heatmap extends Component {
    render() {
        return (
            <div>
                 <Map google={this.props.google} zoom={14}>
                     <Marker  name={'current location'} />
                    
                 </Map>
                
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey:("AIzaSyBJHefSLqm5q2_bAu_65Iw0v54HBwiIpNg")

})(heatmap)