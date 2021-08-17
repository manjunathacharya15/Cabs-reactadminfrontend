import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

export default class updateuser extends Component {
  constructor(props) {
    super(props);

    this.onChangecompanyemail = this.onChangecompanyemail.bind(this);
    this.onChangecompanyname = this.onChangecompanyname.bind(this);
    this.onChangedepartment=this.onChangedepartment.bind(this);
    this.onChangenumberofemployees=this.onChangenumberofemployees.bind(this);
    this.onChangecountry=this.onChangecountry.bind(this);
    this.onChangemobilenumber=this.onChangemobilenumber.bind(this);
  
    
    

    


   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);
this.onback=this.onback.bind(this);
    this.state = {
      companyemail:'',
      companyname:'',
      department:'',
      numberofemployees:'',
      country:'',
      mobilenumber:'',
      


      

      
      customer:[]
      
      
    }
  }
  componentDidMount(){
      axios.get('https://acabnodejs.herokuapp.com/corporate/' + this.props.match.params.id)
      .then(response => {
    this.setState({ 
      companyemail:response.data.companyemail,
      companyname:response.data.companyname,
      department:response.data.department,
      numberofemployees:response.data.numberofemployees,
      country:response.data.country,
      mobilenumber:response.data.mobilenumber,
      
        


   
       
    })
      })
      .catch(function(error){
          console.log(error)
      })
  }

  onChangecompanyemail(e) {
    this.setState({
      companyemail: e.target.value
    })
  }
  onChangecompanyname(e) {
    this.setState({
      companyname: e.target.value
    })
  }

  
  onChangedepartment(e) {
    this.setState({
      department: e.target.value
    })
  }
  onChangenumberofemployees(e) {
    this.setState({
      numberofemployees: e.target.value
    })
  }
  onChangecountry(e) {
    this.setState({
      country: e.target.value
    })
  }
  onChangemobilenumber(e) {
    this.setState({
      mobilenumber: e.target.value
    })
  }
  

  

 
  onback(){
  window.location='/#/components/viewcorporate'
  }

  onSubmit(e) {
    e.preventDefault();
    

    const customer = {
      companyemail: this.state.companyemail,
      companyname: this.state.companyname,
      department: this.state.department,
      numberofemployees:this.state.numberofemployees,
      country:this.state.country,
      mobilenumber:this.state.mobilenumber,
      


     
      

    }

    axios.post('https://acabnodejs.herokuapp.com/corporate/update/' + this.props.match.params.id, customer)
      .then(function(response){
       if(response.data==='Corporate updated!'){
           window.location='/#/components/viewcorporate'
       }
      }) 
  }

  render() {
    return (
      <div style={{marginTop:"50px"}}>
      <Card border="light" className="bg-white shadow-sm mb-4">
<Card.Body>
<h5 className="mb-4">Update Corporate</h5>
<Form onSubmit={this.onSubmit}>
  <Row>
    <Col md={6} className="mb-3">
      <Form.Group id="firstName">
        <Form.Label> Company Offical Email</Form.Label>
        <Form.Control required type="type"  placeholder="" value={this.state.companyemail}
     onChange={this.onChangecompanyemail} 
     
      
     />
     
      </Form.Group>
    </Col>
    <Col md={6} className="mb-3">
      <Form.Group id="firstName">
        <Form.Label> Company Name</Form.Label>
        <Form.Control required type="type"  placeholder="" value={this.state.companyname}
     onChange={this.onChangecompanyname} 
      
     />
      </Form.Group>
    </Col>
   
    

    
    
  </Row>
  <Row className="align-items-center">
  
    
  </Row>
  
    <Row>
    <Col md={6} className="mb-3">
      <Form.Group id="phone">
        <Form.Label>department</Form.Label>
        <Form.Control required type="text" max="10" placeholder="" value={this.state.department }
      onChange={this.onChangedepartment} />
      </Form.Group>
    </Col>
    
    <Col md={6} className="mb-3">
      <Form.Group id="percenta">
        <Form.Label>Number Of Employees</Form.Label>
        <Form.Control required type="text" placeholder="" value={this.state.numberofemployees}
      onChange={this.onChangenumberofemployees} max="100" />
      </Form.Group>
    </Col>
    
    </Row>
    <Row>
    
    </Row>
    <Row>
    <Col md={6} className="mb-3">
      <Form.Group id="percenta">
        <Form.Label>Country</Form.Label>
        <Form.Control required type="text" placeholder="" value={this.state.country}
      onChange={this.onChangecountry} max="100" />
      </Form.Group>
    </Col>
    <Col md={6} className="mb-3">
      <Form.Group id="percenta">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control required type="text" placeholder="" value={this.state.mobilenumber}
      onChange={this.onChangemobilenumber} max="100" />
      </Form.Group>
    </Col>
    </Row>
    <Row>
    
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