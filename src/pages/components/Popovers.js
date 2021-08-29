import React,{Component} from "react"
import axios from 'axios';
// import moment from "moment-timezone";
import DatePicker from 'react-datepicker'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import {  Breadcrumb,Dropdown, ButtonGroup} from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCog, faHome, faSearch,faTrashAlt,faPlus } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment-timezone";
// import moment from "moment";

export default class Accordion extends Component{
    constructor(props) {
        super(props);
    
        
        this.onChangereferalpoint = this.onChangereferalpoint.bind(this);
        this.onChangeexpdate = this.onChangeexpdate.bind(this);


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          referalpoint:'',
          expdate:new Date(),
         
         
            customers:[]
            
            
          }
        }
        componentDidMount() {
   
          axios.post('https://acabnodejs.herokuapp.com/referalpointsetting/')
        .then(response => {
          
          this.setState({ customers: response.data})
          
          let result=response.data
          this.setState({customers:
            result.map(e => {
              return{
                select : false,
                id : e._id,
                createdate:e.createdAt,
                referalpoint :e.referalpoint,
                expdate:e.expdate,
              
               
                
              
    
              }
   
            })
        })
        console.log(this.state)
        })
        .catch((error) => {
          console.log(error);
        })
      }
        
        onChangereferalpoint(e) {
          this.setState({
            referalpoint: e.target.value
          })
        }
        onChangeexpdate(date) {
          this.setState({
            expdate: date
          })
        }
          
          
      
          
        
          
          
          
          onback(){
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const trainer = {
              referalpoint: this.state.referalpoint,
              expdate:this.state.expdate,
              
              
             

        
            }
        
            
        
            axios.post('https://acabnodejs.herokuapp.com/referalpointsetting/add', trainer)
            .then(function(response){
        
              if(response.data ==='Referalpointsetting added!'){
                alert("Referalpointsetting added!")
                  window.location.reload('true')
              }
             }) 
          }
          customerList() {
            
        
            return this.state.customers.map(currentcustomer => (
              <tr>
                <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.id}</td>
                <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.createdate}</td>
              <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.referalpoint}</td>
              <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.expdate}</td>
              
             
             
              
              
              
            
            </tr>
             
            ))
            
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
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Expiry Date</Form.Label>
                <Col md={3} className="mb-3">
                <DatePicker
            
            selected={this.state.expdate}
            onChange={this.onChangeexpdate}
            name="startDate"
       
           
           
            timeCaption="time"
            dateFormat="MMMM dd yyyy "
           />
       
           </Col>
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row>
            <Col md={3} className="mb-3"><div className="mt-3">
            <Button variant="primary" type="submit">Save </Button>
          
          </div></Col>
            <Col md={3} className="mb-3"><div className="mt-3">
            <Button variant="primary"  onClick={this.onback}>Back</Button>
          
          </div></Col>
            </Row>
          
          
          
        
        </Form>
        
      </Card.Body>
    </Card>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Refer Ponit Setting</Breadcrumb.Item>
          
          </Breadcrumb>
        
          <p className="mb-0">Refer Ponit Setting </p>
        </div>
      
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            {/* <Form onSubmit={this.onSubmit}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" value={this.state.name} onChange={this.onChangename} />
            </InputGroup>
            </Form> */}
          </Col>
          
          </Row>
          </div>
        
        <div class="container">



<div class="row">
  <div class="col-md">

             <div style={{display:"flex"}}>
    <div style={{width:"70%"}}><h4><b></b></h4></div>
    <div style={{marginTop:"5px"}}>
    
        
       
        </div>
    
   
    

</div>

        <div style={{overflowX:"scroll",overflowY:"scroll"}}>
        
          
       
       
        <table className="table">
          <thead className="thead-light">
            <tr>
           
            <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Sl No.</th>
            <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Created Date</th>
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Refer point</th>
              
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Expiry Date</th>

             
              
              
              
           
            </tr>
            
          </thead>
          <tbody>
            { this.customerList() }
          </tbody>
         
        </table>
        </div>
        </div>
        </div>
        </div>

                
            </div>
        )
    }
}