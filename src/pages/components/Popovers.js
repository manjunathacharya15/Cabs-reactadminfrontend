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
    
        
        this.onChangereferalpoint = this.onChangereferalpoint.bind(this);


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          referalpoint:'',
         
         
            trainer:[]
            
            
          }
        }
        
        onChangereferalpoint(e) {
          this.setState({
            referalpoint: e.target.value
          })
        }
          
          
      
          
        
          
          
          
          onback(){
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const trainer = {
              referalpoint: this.state.referalpoint,
              
              
             

        
            }
        
            
        
            axios.post('https://acabnodejs.herokuapp.com/referalpointsetting/add', trainer)
            .then(function(response){
        
              if(response.data ==='Referalpointsetting added!'){
                alert("Referalpointsetting added!")
                  window.location='/#/dashboard/overview'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Referal Point Setting </h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Referal Point</Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.referalpoint}
              onChange={this.onChangereferalpoint}
              
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