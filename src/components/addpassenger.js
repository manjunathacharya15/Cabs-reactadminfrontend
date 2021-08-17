import React,{Component} from "react"
import axios from 'axios';
// import moment from "moment-timezone";
import DatePicker from 'react-datepicker'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment-timezone";
// import moment from "moment";

export default class Accordion extends Component{
    constructor(props) {
        super(props);
    
        
        this.onChangefirstname = this.onChangefirstname.bind(this);
        this.onChangelastname= this.onChangelastname.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        
        
        this.onChangephonenumber = this.onChangephonenumber.bind(this);
 

       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          firstname:'',
          lastname:'',
          email:'',
          phonenumber:'',
        
         
            trainer:[]
            
            
          }
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
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const trainer = {
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              email:this.state.email,
              phonenumber:this.state.phonenumber,
             
              
             

        
            }
        
            
        
            axios.post('https://acabnodejs.herokuapp.com/enrollpassenger/add', trainer)
            .then(function(response){
        
              if(response.data ==='Enrollpassenger added!'){
                alert("Passenger Added")
                  window.location='/#/components/viewpassenger'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Enroll Passenger</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> First Name</Form.Label>
                <Form.Control required type="text"  placeholder="" value={this.state.firstname}
              onChange={this.onChangefirstname}
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.lastname}
              onChange={this.onChangelastname}
              
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
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required type="text"  placeholder="" value={this.state.phonenumber }
              onChange={this.onChangephonenumber} />
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