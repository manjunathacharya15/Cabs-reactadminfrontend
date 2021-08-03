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
    
        
        this.onChangename = this.onChangename.bind(this);
        this.onChangeemail= this.onChangeemail.bind(this);
        this.onChangeprofilepicture = this.onChangeprofilepicture.bind(this);
        
        
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangerole = this.onChangerole.bind(this);

       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          name:'',
          email:'',
          profilepicture:'',
          password:'',
          role:'',
         
            trainer:[]
            
            
          }
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
          onChangepassword(e) {
            this.setState({
              password: e.target.value
            })
          }
          onChangerole(e) {
            this.setState({
            role: e.target.value
            })
          }
         
      
          
        
          
          
          
          onback(){
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const trainer = {
              name: this.state.name,
              password: this.state.password,
              email:this.state.email,
              profilepicture:this.state.profilepicture,
              role:this.state.role,
              
             

        
            }
        
            
        
            axios.post('https://acabnodejs.herokuapp.com/subadmin/add', trainer)
            .then(function(response){
        
              if(response.data ==='Subadmin added!'){
                alert("Subadmin Added")
                  window.location='/#/components/alerts'
              }
             }) 
          }
        
    render(){
        return(
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
              <Form.Group id="emal">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="" value={this.state.password}
              onChange={this.onChangepassword}
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control required type="text"  placeholder="" value={this.state.profilepicture }
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