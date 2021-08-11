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
    
        
        this.onChangewheelalignment = this.onChangewheelalignment.bind(this);
        this.onChangeoilchange= this.onChangeoilchange.bind(this);
        this.onChangecarinsurance = this.onChangecarinsurance.bind(this);
        
        
        this.onChangechildrenbenefit = this.onChangechildrenbenefit.bind(this);
        this.onChangefamilyinsurance = this.onChangefamilyinsurance.bind(this);

       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          wheelalignment:'',
          oilchange:'',
          carinsurance:'',
          childrenbenefit:'',
          familyinsurance:'',
         
            trainer:[]
            
            
          }
        }
        
        onChangewheelalignment(e) {
          this.setState({
            wheelalignment: e.target.value
          })
        }
          
          onChangeoilchange(e) {
            this.setState({
              oilchange: e.target.value
            })
          }
          onChangecarinsurance(e) {
            this.setState({
              carinsurance: e.target.value
            })
          }
          onChangechildrenbenefit(e) {
            this.setState({
              childrenbenefit: e.target.value
            })
          }
          onChangefamilyinsurance(e) {
            this.setState({
            familyinsurance: e.target.value
            })
          }
         
      
          
        
          
          
          
          onback(){
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const trainer = {
              name: this.state.wheelalignment,
              password: this.state.oilchange,
              email:this.state.carinsurance,
              profilepicture:this.state.childrenbenefit,
              role:this.state.familyinsurance,
              
             

        
            }
        
            
        
            axios.post('https://acabnodejs.herokuapp.com/driverbenefitscheme/add', trainer)
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
        <h5 className="mb-4">Driver Benifit Scheme</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Wheel Alignment </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.wheelalignment}
              onChange={this.onChangewheelalignment}
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Oil Change </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.oilchange}
              onChange={this.onChangeoilchange}
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Car Insurance</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.carinsurance}
              onChange={this.onChangecarinsurance}
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Children Benefit Scheme</Form.Label>
                <Form.Control required type="text"  placeholder="" value={this.state.childrenbenefit }
              onChange={this.onChangechildrenbenefit} />
              </Form.Group>
            </Col>
            
            
            
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Family Insurance Scheme</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.familyinsurance}
              onChange={this.onChangefamilyinsurance} max="100" />
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