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
    this.onChangecoupontext = this.onChangecoupontext.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      coupontext:'',
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.post('https://acabnodejs.herokuapp.com/couponmanagement/')
    .then(response => {
      
      this.setState({ customers: response.data})
      
      let result=response.data
      this.setState({customers:
        result.map(e => {
          return{
            select : false,
            id : e._id,
            coupontext : e.coupontext,
          
            percentageorflat:e.percentageorflat,
            amount:e.amount,
            couponexpirydate:e. couponexpirydate,
            count:e.count,
          

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
   
    axios.post('https://acabnodejs.herokuapp.com/couponmanagement/delete',{arrayids:arrayids})
   
    .then(response=>{
      if(response.data.message==="Deleted Successfully")
      {
        window.location.reload(true)
      }
 
    })
  
    ;
    
  };
  onChangecoupontext(e) {
    this.setState({
      coupontext: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      coupontext: this.state.coupontext
    }
    axios.post('https://acabnodejs.herokuapp.com/couponmanagement/search', customer)
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
      if(a.coupontext.toLowerCase() < b.coupontext.toLowerCase()) return -1;
      if(a.coupontext.toLowerCase() > b.coupontext.toLowerCase()) return 1;
      return 0;
     })

    return this.state.customers.map(currentcustomer => (
      <tr>
        <td  style={{border:"1px double black",textAlign:"center"}}>
        <input type="checkbox" onChange={e => {
                                let value = e.target.checked
                                console.log(this.state)
                                this.state.customers.find(o => o.id=== currentcustomer.id).select = value
                                this.setState(this.state);
                            }} />
      </td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.coupontext}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.percentageorflat}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.amount}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.couponexpirydate}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.count}</td>
      
      
    
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
            <Breadcrumb.Item>About Coupon Management</Breadcrumb.Item>
          
          </Breadcrumb>
          <h4>Coupon Management</h4>
          <p className="mb-0">Coupon Management Details .</p>
        </div>
      
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <Form onSubmit={this.onSubmit}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" value={this.state.coupontext} onChange={this.onChangecoupontext} />
            </InputGroup>
            </Form>
          </Col>
          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end" style={{marginRight:"200px"}}>
            <Dropdown as={ButtonGroup} >
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm icon-gray" style={{marginRight:"15px"}}>
                  <b>Actions</b>
                  
                </span>
                  <FontAwesomeIcon icon={faCog} />
              
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
              
                {/* <Dropdown.Item className="d-flex fw-bold">
                <Link to="/components/breadcrumbs" className="nav-link">    <span className="icon icon-small ms-auto">Adduser <FontAwesomeIcon icon={faPlus} style={{marginLeft:"16px"}} /></span></Link>
                </Dropdown.Item> */}
                <Dropdown.Item className="d-flex fw-bold">
                <Link to="/components/navs" className="nav-link">    <span className="icon icon-small ms-auto" style={{marginRight:"50px"}}>Add <FontAwesomeIcon icon={faPlus}  /></span></Link>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold" >
                <span style={{marginRight:"10px"}}    onClick={() => {
          this.deleteCustomerByIds();
        }}  > Delete <FontAwesomeIcon icon={faTrashAlt} style={{marginLeft:"5px"}} /> </span>
                </Dropdown.Item>
               
              </Dropdown.Menu>
            </Dropdown>
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
           
            <th style={{border:"1px double  black",width:"100px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Delete</th>
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Coupon Text</th>

              <th style={{border:"1px double black",width:"150px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Percentage OR Flat</th>
             
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Amount</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Coupon Expiry Date</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Count</th>
              
              
              
           
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
