import React, { Component } from 'react'
import {   faHome,  } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button,  Breadcrumb, Card } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';




export default class Tabs extends Component {
  constructor(props) {
    super(props);

    
    this.onChangepcontact = this.onChangepcontact.bind(this);
    this.onChangedcontact = this.onChangedcontact.bind(this);

this.onSubmit = this.onSubmit.bind(this);
this.onback=this.onback.bind(this);
    
    this.state = {
        
     pcontact:'',
     dcontact:'',
     
        trainer:[]
        
        
      }
    }
    componentDidMount(){
      axios.get('https://acabnodejs.herokuapp.com/supportcontactsetting/' + this.props.match.params.id )
      .then(response => {
        this.setState({ 
          pcontact:response.data.contacts.passenger.pcontact,
          dcontact:response.data.contacts.driver.dcontact,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangepcontact(e) {
    this.setState({
      pcontact: e.target.value
    })
  }
  onChangedcontact(e) {
    this.setState({
      dcontact: e.target.value
    })
  }

      onback(){
            window.location='/#/components/tables'
            }
  
            onSubmit(e) {
              e.preventDefault();
              
          
              const customer = {
                pcontact: this.state.pcontact,
                dcontact: this.state.dcontact,
            
                
          
          
               
                
          
              }
          
              axios.post('https://acabnodejs.herokuapp.com/supportcontactsetting/update/' + this.props.match.params.id, customer)
                .then(function(response){
                 if(response.data==='Supportcontactsetting updated!'){
                     window.location='/#/components/tables'
                 }
                }) 
            }
          
            render() {
              return (
                <div style={{marginTop:"50px"}}>
                <Card border="light" className="bg-white shadow-sm mb-4">
          <Card.Body>
          <h5 className="mb-4">Support Contact Update</h5>
          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="firstName">
                  <Form.Label> Passenger Contact</Form.Label>
                  <Form.Control required type="number"  placeholder="" value={this.state.pcontact}
                onChange={this.onChangepcontact}
                
               />
                </Form.Group>
              </Col>
             
              
          
              
              
            </Row>
            <Row className="align-items-center">
            <Col md={6} className="mb-3">
                <Form.Group id="firstName">
                  <Form.Label> Driver Contact</Form.Label>
                  <Form.Control required type="number"  placeholder="" value={this.state.dcontact}
                onChange={this.onChangedcontact}
                
               />
                </Form.Group>
              </Col>
              
            </Row>
            
              
            
            <div className="mt-3">
              <Button variant="primary" type="submit">Save </Button>
            
            </div>
          
          </Form>
          <div className="mt-3">
              <Button variant="primary" type="submit" onClick={this.onback}>Back</Button>
            
            </div>
          </Card.Body>
          </Card>
                  
              </div>
      )
              }
            }
