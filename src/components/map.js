import React, { Component } from 'react'
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react'
import { StickyContainer, Sticky } from 'react-sticky';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
var mapIcons = {
    user: 'https://enterprisecabs.deliveryventure.com/asset/img/marker-user.png',
    active: 'https://enterprisecabs.deliveryventure.com/asset/img/marker-car.png',
    riding: 'https://enterprisecabs.deliveryventure.com/asset/img/marker-car.png',
    offline: 'https://enterprisecabs.deliveryventure.com/asset/img/marker-home.png',
    unactivated: 'https://enterprisecabs.deliveryventure.com/asset/img/marker-plus.png'
}
export  class map extends Component {
    render() {
        return (
            <div>
           
                <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
      <Row>
<Col md={4} className="mb-3">
<h3>Map View</h3>
<image src="https://enterprisecabs.deliveryventure.com/asset/img/marker-user.png"  />
                <div class="row">
                <div class="col-xs-4">
                     <input type="text" class=" col-md-3 form-control pull-right" id="search_name" placeholder="Enter Name" value="" />
                </div>
                <div class="col-xs-4" style={{marginBottom:"50px"}}>
                     <button type="button" class="btn btn-info col-md-3 form-control" id="search_submit">Search</button>
                </div>
            </div>
            
              
               
                    
                
            
    </Col>
</Row>
     
      </Card.Body>
      </Card>
      
<div>
    
      <Map google={this.props.google} minZoom={5} style={{width:"80%"}} >
                     <Marker  name={'current location'} />
                    
                 </Map>
               <div>
               <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Note:</Card.Title>
    
    <Card.Text>
    <img src="https://enterprisecabs.deliveryventure.com/asset/img/marker-user.png"  /> User
    </Card.Text>
    <Card.Text>
    <img src="https://enterprisecabs.deliveryventure.com/asset/img/marker-home.png"  /> Unavailable Provider
    </Card.Text>
    <Card.Text>
    <img src="https://enterprisecabs.deliveryventure.com/asset/img/marker-car.png"  />  Avilable Provider
    </Card.Text>
    <Card.Text>
    <img src="https://enterprisecabs.deliveryventure.com/asset/img/marker-plus.png"  /> Unactivated Provider
    </Card.Text>
    
    
  </Card.Body>
</Card>
                   </div> 
     
                 </div>

                
                

                
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey:("AIzaSyBJHefSLqm5q2_bAu_65Iw0v54HBwiIpNg")

})(map)