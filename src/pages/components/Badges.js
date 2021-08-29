import React,{Component} from "react"
import axios from 'axios';
// import moment from "moment-timezone";
import DatePicker from 'react-datepicker'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button,Breadcrumb,Dropdown, ButtonGroup} from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCog, faHome, faSearch,faTrashAlt,faPlus } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment-timezone";
// import moment from "moment";

export default class Accordion extends Component{
    constructor(props) {
        super(props);
    
        
        this.onChangecommission = this.onChangecommission.bind(this);


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          commission:'',
         
         
            customers:[]
            
            
          }
        }
        componentDidMount() {
   
          axios.post('https://acabnodejs.herokuapp.com/wagespercentage/')
        .then(response => {
          
          this.setState({ customers: response.data})
          
          let result=response.data
          this.setState({customers:
            result.map(e => {
              return{
                select : false,
                id : e._id,
                commission :e.commission,
              
               
                
              
    
              }
   
            })
        })
        console.log(this.state)
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
         
          axios.post('https://acabnodejs.herokuapp.com/wagespercentage/delete',{arrayids:arrayids})
         
          .then(response=>{
            if(response.data.message==="Deleted Successfully")
            {
              window.location.reload(true)
            }
       
          })
        
          ;
          
        };
        onChangecommission(e) {
          this.setState({
            commission: e.target.value
          })
        }
          
          
      
          
        
          
          
          
          onback(){
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const customers = {
              commission: this.state.commission,
              
              
             

        
            }

        
            
        
            axios.post('https://acabnodejs.herokuapp.com/wagespercentage/add', customers)
            .then(function(response){
        
              if(response.data ==='Wagespercentage added!'){
                alert("Wages percentage")
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
              <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.commission}</td>
              
             
             
              
              
              
            
            </tr>
             
            ))
            
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Wages Percentage</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Commission(%)</Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.commission}
              onChange={this.onChangecommission}
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row>
            <Col md={3} className="mb-3"><div className="mt-3">
            <Button variant="primary" type="submit">Save </Button>
          
          </div></Col>
            <Col md={3} className="mb-3" ><div className="mt-3">
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
            <Breadcrumb.Item>Wages Commission Percentage</Breadcrumb.Item>
          
          </Breadcrumb>
          <h4>Commissions</h4>
          <p className="mb-0">Wages commission Percentage</p>
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
           
            
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Commission</th>

             
              
              
              
           
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