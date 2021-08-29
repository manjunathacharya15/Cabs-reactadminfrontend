import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {  faCog, faHome, faSearch,faTrashAlt,faPlus,faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';


export default class buttons extends Component {

  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangecompanyname = this.onChangecompanyname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      companyname:'',
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.post('https://acabnodejs.herokuapp.com/corporate/')
    .then(response => {
      
      this.setState({ customers: response.data})
      
      let result=response.data
      this.setState({customers:
        result.map(e => {
          return{
            select : false,
            id : e._id,
            companyemail : e.companyemail,
          
            companyname:e.companyname,
            department:e.department,
            numberofemployees:e.numberofemployees,
            country:e.country,
            mobilenumber:e.mobilenumber,
          

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
   
    axios.post('https://acabnodejs.herokuapp.com/corporate/delete',{arrayids:arrayids})
   
    .then(response=>{
      if(response.data.message==="Deleted Successfully")
      {
        window.location.reload(true)
      }
 
    })
  
    ;
    
  };
  onChangecompanyname(e) {
    this.setState({
      companyname: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      companyname: this.state.companyname
    }
    axios.post('https://acabnodejs.herokuapp.com/corporate/search', customer)
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
  // paging(){
  //   $(document).ready(function(){
  //     $('#example').dataTable({
  //       paging: false,
  //   searching: false,
  //       "pageLength":10
  //     })
  //   })
  // }
  customerList() {
   
    this.state.customers.sort(function(a,b){
      if(a.companyname.toLowerCase() < b.companyname.toLowerCase()) return -1;
      if(a.companyname.toLowerCase() > b.companyname.toLowerCase()) return 1;
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
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.companyemail}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.companyname}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.department}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.numberofemployees}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.country}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.mobilenumber}</td>
      <td style={{border:"1px double black",textAlign:"center"}}><Link to={"/components/editcorporate/"+currentcustomer.id}><FontAwesomeIcon icon={faPencilAlt} /></Link></td>
      
      
      
    
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
            <Breadcrumb.Item>Corporates</Breadcrumb.Item>
          
          </Breadcrumb>
          <h4>Corporates Information</h4>
          <p className="mb-0">Corporates Details .</p>
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
              <Form.Control type="text" placeholder="Search" value={this.state.companyname} onChange={this.onChangecompanyname} />
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
        
          
       
       
        <table className="table" id="example">
          <thead className="thead-light">
            <tr>
           
           
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Company Offical Email</th>

              <th style={{border:"1px double black",width:"150px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Company Name</th>
             
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Department</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Number Of Employees</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Country</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Phone Number</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Actions</th>
              
              
              
           
            </tr>
            
          </thead>
          <tbody>

          {this.customerList()}
         
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
