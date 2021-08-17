import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

export default class updateuser extends Component {
  constructor(props) {
    super(props);

    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangeemail=this.onChangeemail.bind(this);
    this.onChangephonenumber=this.onChangephonenumber.bind(this);
  
    
    

    


   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);
this.onback=this.onback.bind(this);
    this.state = {
      firstname:'',
      lastname:'',
      email:'',
      phonenumber:'',
      joiningdate:'',
      slno:'',
      


      

      
      customer:[]
      
      
    }
  }
  componentDidMount(){
      axios.get('https://acabnodejs.herokuapp.com/enrollpassenger/' + this.props.match.params.id)
      .then(response => {
    this.setState({ 
      slno:response.data._id,
      joiningdate:response.data.createdAt,
      email:response.data.email,
      firstname:response.data.firstname,
      lastname:response.data.lastname,
      phonenumber:response.data.phonenumber,
      
        


   
       
    })
      })
      .catch(function(error){
          console.log(error)
      })
  }

  onChangefirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }
  onChangelastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }

  
  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangephonenumber(e) {
    this.setState({
      phonenumber: e.target.value
    })
  }
  

  

 
  onback(){
  window.location='/#/components/viewpassenger'
  }

  onSubmit(e) {
    e.preventDefault();
    

    const customer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phonenumber:this.state.phonenumber,
      


     
      

    }

    axios.post('https://acabnodejs.herokuapp.com/enrollpassenger/update/' + this.props.match.params.id, customer)
      .then(function(response){
       if(response.data==='Enrollpassenger updated!'){
           window.location='/#/components/viewpassenger'
       }
      }) 
  }

  render() {
    return (
      <div style={{marginTop:"50px"}}>
      <Card border="light" className="bg-white shadow-sm mb-4">
<Card.Body>
<h5 className="mb-4">Update Passenger</h5>
<Form onSubmit={this.onSubmit}>
  <Row>
    <Col md={6} className="mb-3">
      <Form.Group id="firstName">
        <Form.Label> Sl No.</Form.Label>
        <Form.Control required type="type"  placeholder="" value={this.state.slno}
     
      
     />
      </Form.Group>
    </Col>
   
    

    
    
  </Row>
  <Row className="align-items-center">
  <Col md={6} className="mb-3">
      <Form.Group id="firstName">
        <Form.Label> Joining Date</Form.Label>
        <Form.Control required type="type"  placeholder="" value={this.state.joiningdate}
     
      
     />
      </Form.Group>
    </Col>
    
  </Row>
  
    <Row>
    <Col md={6} className="mb-3">
      <Form.Group id="phone">
        <Form.Label>First Name</Form.Label>
        <Form.Control required type="text" max="10" placeholder="" value={this.state.firstname }
      onChange={this.onChangefirstname} />
      </Form.Group>
    </Col>
    
    
    
    </Row>
    <Row>
    <Col md={6} className="mb-3">
      <Form.Group id="percenta">
        <Form.Label>Last Name</Form.Label>
        <Form.Control required type="text" placeholder="" value={this.state.lastname}
      onChange={this.onChangelastname} max="100" />
      </Form.Group>
    </Col>
    </Row>
    <Row>
    <Col md={6} className="mb-3">
      <Form.Group id="percenta">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="text" placeholder="" value={this.state.email}
      onChange={this.onChangeemail} max="100" />
      </Form.Group>
    </Col>
    </Row>
    <Row>
    <Col md={6} className="mb-3">
      <Form.Group id="percenta">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control required type="text" placeholder="" value={this.state.phonenumber}
      onChange={this.onChangephonenumber} max="100" />
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