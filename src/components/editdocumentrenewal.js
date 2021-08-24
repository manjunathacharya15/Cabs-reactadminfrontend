import React,{Component} from "react"
import axios from 'axios';
// import moment from "moment-timezone";
// import Datetime from "react-datetime";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import DatePicker from 'react-datepicker'

import moment from "moment-timezone";
import { Height } from "@material-ui/icons";
export default class Adduser extends Component{
    constructor(props) {
        super(props);
    
       
        this.onChangevrccardrenewaldate = this.onChangevrccardrenewaldate.bind(this);
        this.onChangevinsurencerenewaldate = this.onChangevinsurencerenewaldate.bind(this);
        this.onChangevemmissiontestrenewaldate= this.onChangevemmissiontestrenewaldate.bind(this);
        this.onChangevtaxrenewal = this.onChangevtaxrenewal.bind(this);
       

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
           
            vrccardrenewaldate:new Date(),
            vinsurancerenewaldate:new Date(),
            vemmissiontestrenewaldate:new Date(),
           vtaxrenewal:new Date(),
          


         
            customers:[]
            
            
          }
        }
       
       
          onChangevrccardrenewaldate(date) {
            this.setState({
              vrccardrenewaldate: date
            })
          }
          onChangevinsurencerenewaldate(date) {
            this.setState({
              vinsurancerenewaldate: date
            })
          }
          onChangevemmissiontestrenewaldate(date) {
            this.setState({
              vemmissiontestrenewaldate: date
            })
          }
          onChangevtaxrenewal(date) {
            this.setState({
              vtaxrenewal: date
            })
          }
         

        //   onback(){
        //     window.location='/#/components/buttons'
        //     }
     
          onSubmit(e) {
            e.preventDefault();
        
            const trainer = {
             
              vrccardrenewaldate:this.state.vrccardrenewaldate,
              vinsurancerenewaldate:this.state.vinsurancerenewaldate,
              vemmissiontestrenewaldate:this.state.vemmissiontestrenewaldate,
              vtaxrenewal:this.state.vtaxrenewal,
             


             

        
            }
        
            console.log(trainer);
        
            axios.post('https://acabnodejs.herokuapp.com/enrollfleetowner/update/'+ this.props.match.params.id,trainer )
            .then(function(response){
        
              if(response.data ==='Enrollfleetowner updated!'){
                  window.location='/#/components/fleetowner'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
      <Form onSubmit={this.onSubmit}>

          <Card border="light" className="bg-white shadow-sm mb-4">
          <Card.Body>
          <h3 className="mb-4">Vechile Details</h3>


<Row>
<Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> RC Card Renewal Date</Form.Label>
      
      <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.vrccardrenewaldate}
              onChange={this.onChangevrccardrenewaldate} />
      
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Insurence Renewal Date</Form.Label>
     
      <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.vinsurancerenewaldate}
              onChange={this.onChangevinsurencerenewaldate} />
      
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label>Emmission Test Renewal Date</Form.Label>
      <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.vemmissiontestrenewaldate}
              onChange={this.onChangevemmissiontestrenewaldate} />
      
    </Form.Group>
  </Col>
</Row>
<Row>
<Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Tax Renewal </Form.Label>
      <Form.Control required type="number" placeholder="Enter Tax Renewal" value={this.state.vtaxrenewal}
    onChange={this.onChangevtaxrenewal}  />
    </Form.Group>
  </Col>
  
</Row>




            </Card.Body>

          </Card>
          
       
         
          
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