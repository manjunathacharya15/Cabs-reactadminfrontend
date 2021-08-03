import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

export default class updateuser extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeprofilepicture=this.onChangeprofilepicture.bind(this);
    this.onChangerole=this.onChangerole.bind(this);
  
    
    

    


   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);
this.onback=this.onback.bind(this);
    this.state = {
      name:'',
      profilepicture:'',
      email:'',
      role:'',
      


      

      
      customer:[]
      
      
    }
  }
  componentDidMount(){
      axios.get('https://acabnodejs.herokuapp.com/subadmin/' + this.props.match.params.id)
      .then(response => {
    this.setState({ 
      name:response.data.name,
      profilepicture:response.data.profilepicture,
      email:response.data.email,
      role:response.data.role,
      
        


   
       
    })
      })
      .catch(function(error){
          console.log(error)
      })
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

  
  onChangeprofilepicture(e) {
    this.setState({
      profilepicture: e.target.value
    })
  }
  onChangerole(e) {
    this.setState({
      role: e.target.value
    })
  }
  

  

 
  onback(){
  window.location='/#/components/alerts'
  }

  onSubmit(e) {
    e.preventDefault();
    

    const customer = {
      name: this.state.name,
      profilepicture: this.state.profilepicture,
      email: this.state.email,
      role:this.state.role,
      


     
      

    }

    axios.post('https://acabnodejs.herokuapp.com/subadmin/update/' + this.props.match.params.id, customer)
      .then(function(response){
       if(response.data==='Subadmin updated!'){
           window.location='/#/components/alerts'
       }
      }) 
  }

  render() {
    return (
      <div style={{marginTop:"50px"}}>
      <Card border="light" className="bg-white shadow-sm mb-4">
<Card.Body>
<h5 className="mb-4">Sub Admin</h5>
<Form onSubmit={this.onSubmit}>
  <Row>
    <Col md={6} className="mb-3">
      <Form.Group id="firstName">
        <Form.Label> Name</Form.Label>
        <Form.Control required type="type"  placeholder="" value={this.state.name}
      onChange={this.onChangename}
      
     />
      </Form.Group>
    </Col>
   
    

    
    
  </Row>
  <Row className="align-items-center">
  <Col md={6} className="mb-3">
      <Form.Group id="firstName">
        <Form.Label> Email</Form.Label>
        <Form.Control required type="email"  placeholder="" value={this.state.email}
      onChange={this.onChangeemail}
      
     />
      </Form.Group>
    </Col>
    
  </Row>
  
    <Row>
    <Col md={6} className="mb-3">
      <Form.Group id="phone">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control required type="text" max="10" placeholder="" value={this.state.profilepicture }
      onChange={this.onChangeprofilepicture} />
      </Form.Group>
    </Col>
    
    
    
    </Row>
    <Row>
    <Col md={6} className="mb-3">
      <Form.Group id="percenta">
        <Form.Label>Role</Form.Label>
        <Form.Control required type="text" placeholder="" value={this.state.role}
      onChange={this.onChangerole} max="100" />
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