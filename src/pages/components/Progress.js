import React,{Component} from "react"
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import moment from "moment-timezone";
import DatePicker from 'react-datepicker'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import {   ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCog, faHome, faSearch,faTrashAlt,faPlus } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment-timezone";
// import moment from "moment";
import { CCard,CCardBody } from '@coreui/react';
import { Link } from 'react-router-dom'
import { valHooks } from "jquery";

export default class Accordion extends Component{
    constructor(props) {
        super(props);
    
        
        this.onChangepmessage = this.onChangepmessage.bind(this);
        this.onChangedmessage = this.onChangedmessage.bind(this);
        

       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit1 = this.onSubmit1.bind(this);
        this.state = {
          pmessage:'',
          dmessage:'',
         
         
            customers:[],
      

            
            
          }
        }
        componentDidMount() {
   
          axios.post('https://acabnodejs.herokuapp.com/tripcancelmessagesetting/')
        .then(response => {
          
          this.setState({ customers: response.data})
          
          let result=response.data
          this.setState({customers:
            result.map(e => {
              return{
                select : false,
                id : e._id,
                pmessages :e.messages.passenger.pmessage,
              
                dmessages:e.messages.driver.dmessage,
                
              
    
              }
   
            })
        })
        console.log(this.state.customers)
        })
        .catch((error) => {
          console.log(error);
        })
      }
      deleteCustomerByIds = () => {
        const arrayids = [];
          this.state.customers.forEach(d => {
            if(d.select) { 
              arrayids.push(d.id);
            }
          });
         
          axios.post('https://acabnodejs.herokuapp.com/tripcancelmessagesetting/delete',{arrayids:arrayids})
         
          .then(response=>{
            if(response.data.message==="Deleted Successfully")
            {
              window.location.reload(true)
            }
       
          })
        
          ;
          
        };
        onChangepmessage(e) {
          this.setState({
            pmessage: e.target.value
          })
        }
          
          onChangedmessage(e) {
            this.setState({
              dmessage: e.target.value
            })
          }
         
      
          
        
          
          
          
          onback(){
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const customers = {
              pmessage: this.state.pmessage,
              dmessage:this.state.dmessage
            }
        
            
        
            axios.post('https://acabnodejs.herokuapp.com/tripcancelmessagesetting/add', customers)
            .then(function(response){
        
              if(response.data ==='Tripcancelmessagesetting added!'){
                alert("Passenger message Added")
                  window.location.reload(true)
              }
             }) 
          }
          onSubmit1(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const customers = {
              pmessage:this.state.pmessage,
              dmessage: this.state.dmessage,
              
              
             

        
            }
        
            
        
            axios.post('https://acabnodejs.herokuapp.com/tripcancelmessagesetting/add', customers)
            .then(function(response){
        
              if(response.data ==='Tripcancelmessagesetting added!'){
                alert("TDriver message Added")
                  window.location.reload(true)
              }
             }) 
          }
          customerList() {
            // this.state.customers.sort(function(a,b){
            //   if(a.pmessage.toLowerCase() < b.pmessage.toLowerCase()) return -1;
            //   if(a.pmessage.toLowerCase() > b.pmessage.toLowerCase()) return 1;
            //   return 0;
            //  })
        
            return this.state.customers.map(currentcustomer => (
              <tr>
                {/* <td  style={{border:"1px double black",textAlign:"center"}}>
                <input type="checkbox" onChange={e => {
                                        let value = e.target.checked
                                        console.log(this.state)
                                        this.state.customers.find(o => o.id=== currentcustomer.id).select = value
                                        this.setState(this.state);
                                    }} />
              </td> */}
              <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.pmessages}</td>
              
              <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.dmessages}</td>
              
             
              
              
              
            
            </tr>
             
            ))
            
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              
              <Card style={{ width: '50%',height:'30rem',float:'left',border:'1px solid black'}}>
  <Card.Body>
    <Card.Title>Passenger</Card.Title>
    <Form onSubmit={this.onSubmit}>
    <Row>
            <Col md={6} className="mb-4">
              <Form.Group id="firstName">
                <Form.Label> Message</Form.Label>
                <CKEditor 
                    editor={ ClassicEditor }
                   
                   
                   
                />
               
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
              <Button variant="primary" type="submit">Update </Button>

              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
              <Link to={"/dashboard/overview"} >  <Button variant="primary" >Cancel </Button></Link>

              </Form.Group>
            </Col>
           
            

            
            
          </Row>
    </Form>
    
    
  </Card.Body>
  
</Card>


<Card style={{ width: '50%',height:'30rem',border:'1px solid black'}}>
  <Card.Body>
    <Card.Title>Driver</Card.Title>
    <Form onSubmit={this.onSubmit1}>
    <Row>
            <Col md={6} className="mb-4">
              <Form.Group id="firstName">
                <Form.Label> Message</Form.Label>
                <CKEditor 
                    editor={ ClassicEditor }
                    
                  
                    
                   
                    // onBlur={ ( event, editor ) => {
                    //     console.log( 'Blur.', editor );
                    // } }
                    // onFocus={ ( event, editor ) => {
                    //     console.log( 'Focus.', editor );
                    // } } 
                    
                />
               
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
              <Button variant="primary" type="submit">Update </Button>

              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
              <Link to={"/dashboard/overview"} >  <Button variant="primary" >Cancel </Button></Link>

              </Form.Group>
            </Col>
           
            

            
            
          </Row>
    </Form>
    
    
  </Card.Body>
  
</Card>
<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Trip Cancel Message Setting</Breadcrumb.Item>
          
          </Breadcrumb>
          <h4>Trip Messages Setting</h4>
          <p className="mb-0">Trip Messages</p>
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
           
         
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Name</th>

              <th style={{border:"1px double black",width:"150px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Email</th>
             
              
              
              
           
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