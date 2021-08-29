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
          childrenbenifit:'',
          familyinsurance:'',
         
            trainer:[]
            
            
          }
        }
        componentDidMount() {
   
            axios.get('https://acabnodejs.herokuapp.com/driverbenifitscheme/' + this.props.match.params.id)
          .then(response => {
            console.log(response.data.ofirstname)
            this.setState({ 
                  id : response.data._id,
                  wheelalignment : response.data.wheelalignment,
                
                  oilchange:response.data.oilchange,
                  carinsurance:response.data.carinsurance,
                  childrenbenifit:response.data.childrenbenifit,
                  familyinsurance:response.data.familyinsurance,
                 
                 


                
      
            
              })
            })
      
        
          
          .catch((error) => {
            console.log(error);
          })
          
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
              childrenbenifit: e.target.value
            })
          }
          onChangefamilyinsurance(e) {
            this.setState({
            familyinsurance: e.target.value
            })
          }
         
      
          
        
          
          
          
          onback(){
            window.location='/#/dashboard/driverview'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const trainer = {
              wheelalignment: this.state.wheelalignment,
              oilchange: this.state.oilchange,
              carinsurance:this.state.carinsurance,
              childrenbenifit:this.state.childrenbenefit,
              familyinsurance:this.state.familyinsurance,
              
             

        
            }
        
            
        
            axios.post('https://acabnodejs.herokuapp.com/driverbenifitscheme/update/'+ this.props.match.params.id,trainer )
            .then(function(response){
        
              if(response.data ==='Driverbenifitscheme updated!'){
                alert("Driver Benifit Scheme Updated")
                  window.location='/#/components/driverview'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Driver Benifit Scheme Update </h5>
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
                <Form.Control required type="text"  placeholder="" value={this.state.childrenbenifit }
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
            <Row>
            <Col md={3} className="mb-3"> <div className="mt-3">
            <Button variant="primary" type="submit">Update </Button>
          
          </div> </Col>
            <Col md={3} className="mb-3">  <div className="mt-3">
            <Button variant="primary"  onClick={this.onback}>Back</Button>
          
          </div> </Col>
            </Row>
          
          
        
        </Form>
       
      </Card.Body>
    </Card>
                
            </div>
        )
    }
}