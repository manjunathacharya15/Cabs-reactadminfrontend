import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {  faCog, faHome, faSearch,faTrashAlt,faPlus,faPencilAlt, faEye,faCarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class buttons extends Component {

  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangeoaadhar = this.onChangeoaadhar.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        
       
     
      customers: []
    };
  }
  

  componentDidMount() {
   
    axios.post('https://acabnodejs.herokuapp.com/enrollfleetowner/')
  .then(response => {
    
    this.setState({ customers: response.data})
    
    let result=response.data
    this.setState({customers:
      result.map(e => {
        return{
          select : false,
          id : e._id,
          vrccardrenewaldate:e.vehicledetails[0].vrccardrenewaldate,
          vinsurancerenewaldate:e.vehicledetails[0].vinsurancerenewaldate,
          vemmissiontestrenewaldate:e.vehicledetails[0].vemmissiontestrenewaldate,
          vtaxrenewal:e.vehicledetails[0].vtaxrenewal,
        

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
   
    axios.post('https://acabnodejs.herokuapp.com/subadmin/delete',{arrayids:arrayids})
   
    .then(response=>{
      if(response.data.message==="Deleted Successfully")
      {
        window.location.reload(true)
      }
 
    })
  
    ;
    
  };
  onChangeoaadhar(e) {
    this.setState({
      oaadhar: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      oaadhar: this.state.oaadhar
    }
    axios.post('https://acabnodejs.herokuapp.com/enrollfleetowner/search', customer)
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
    // this.state.customers.sort(function(a,b){
    //   if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    //   if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
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
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.id}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.vrccardrenewaldate}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.vemmissiontestrenewaldate}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.vinsurancerenewaldate}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.vtaxrenewalproof}</td>
       {/* <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.emailid}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.aadharcard}</td> */}
       <td style={{border:"1px double black",textAlign:"center"}}><Link to={"/components/editdocumentrenewal/"+currentcustomer.id}><FontAwesomeIcon icon={faPencilAlt} /></Link></td> 
      
      
      
      
      
    
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
            <Breadcrumb.Item>Document Renewal Date Information</Breadcrumb.Item>
          
          </Breadcrumb>
          <h4>Document Renewal Date</h4>
          <p className="mb-0">Document Renewal Date Details .</p>
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
              <Form.Control type="text" placeholder="Search" value={this.state.oaadhar} onChange={this.onChangeoaadhar} />
            </InputGroup>
            </Form>
          </Col>
          {/* <Col xs={4} md={2} xl={1} className="ps-md-0 text-end" style={{marginRight:"200px"}}>
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
                {/* <Dropdown.Item className="d-flex fw-bold">
                <Link to="/components/accordions" className="nav-link">    <span className="icon icon-small ms-auto" style={{marginRight:"50px"}}>Add <FontAwesomeIcon icon={faPlus}  /></span></Link>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold" >
                <span style={{marginRight:"10px"}}    onClick={() => {
          this.deleteCustomerByIds();
        }}  > Delete <FontAwesomeIcon icon={faTrashAlt} style={{marginLeft:"5px"}} /> </span>
                </Dropdown.Item>
               
              </Dropdown.Menu>
            </Dropdown>
          </Col> */} 
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
           
            
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>SL.NO</th>

              <th style={{border:"1px double black",width:"150px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Rc Card Renewal Date</th>
             
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Emmissiontest Renewal date</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Insurance Renewal Date</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Tax Renewal Date</th>
             
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>ACtions</th>
              
              
              
           
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
