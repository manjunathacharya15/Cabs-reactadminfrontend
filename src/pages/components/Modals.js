import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {  faCog, faHome, faSearch,faTrashAlt,faPlus } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class buttons extends Component {

  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangevehiclename = this.onChangevehiclename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      vehiclename:'',
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.post('https://acabnodejs.herokuapp.com/vehicle/')
    .then(response => {
      
      this.setState({ customers: response.data})
      
      let result=response.data
      this.setState({customers:
        result.map(e => {
          return{
            select : false,
            id : e._id,
            vehiclename : e.vehiclename,
          
            vehicletype:e.vehicletype,
            capacity:e.seatingcapacity,
            baseprice:e.baseprice,
            pricelogic:e.pricinglogic,
            vehicleicon:e.vehicleicon,
            onehr15km:e.minimumdistance.rentalplans.onehr15km,
            twohr30km:e.minimumdistance.rentalplans.twohr30km,
            fourhr40km:e.minimumdistance.rentalplans.fourhr40km,
            eighthr80km:e.minimumdistance.rentalplans.eighthr80km,

          

          }
        })
        
    })
   
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
   
    axios.post('https://acabnodejs.herokuapp.com/vehicle/delete',{arrayids:arrayids})
   
    .then(response=>{
      if(response.data.message==="Deleted Successfully")
      {
        window.location.reload(true)
      }
 
    })
  
    ;
    
  };
  onChangevehiclename(e) {
    this.setState({
      vehiclename: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      vehiclename: this.state.vehiclename
    }
    axios.post('https://acabnodejs.herokuapp.com/vehicle/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
      
  }
  deleteCustomer(id) {
    axios.delete('https://mitnessnew.herokuapp.com/customers/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }
  
  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.vehiclename.toLowerCase() < b.vehiclename.toLowerCase()) return -1;
      if(a.vehiclename.toLowerCase() > b.vehiclename.toLowerCase()) return 1;
      return 0;
     })

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
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.vehiclename}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.vehicletype}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.capacity}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.baseprice}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.pricelogic}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.vehicleicon}</td>
     
      <td style={{border:"1px double grey",textAlign:"center"}}>
    <tr style={{textAlign:"center"}}>1hr 15Km:{currentcustomer.onehr15km}</tr>
    <tr style={{textAlign:"center"}}>2hr 30km:{currentcustomer.twohr30km}</tr>
    <tr style={{textAlign:"center"}}>4hr 40km:{currentcustomer.fourhr40km}</tr>
    <tr style={{textAlign:"center"}}>8hr 80km:{currentcustomer.eighthr80km}</tr>
    
</td>

      
      
      
    
    </tr>
     
    ))
    
  }
  
  
 



  render()
 {

  
    return (
      
      
      <div style={{marginTop:"50px"}}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Vehicle Management</Breadcrumb.Item>
          
          </Breadcrumb>
          <h4>Vehicle Management</h4>
          <p className="mb-0">Vehicle Management Details .</p>
        </div>
      
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <Form onSubmit={this.onSubmit}>
            <InputGroup style={{marginLeft:"650px"}}>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" value={this.state.vehiclename} onChange={this.onChangevehiclename} />
            </InputGroup>
            </Form>
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
           
            
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Vehicle Name</th>

              <th style={{border:"1px double black",width:"150px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Vehicle Type</th>
             
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Capacity</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Base Price</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Price Calculation</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Vehicle Image</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Rental Plans</th>

              
              
              
           
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
