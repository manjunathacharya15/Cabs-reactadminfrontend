import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Buttonn from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

import {  faCog, faHome, faSearch,faTrashAlt,faPlus,faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery'
var total=[];
var total1=[];



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
  

//   componentDidMount() {
   
//       axios.post('https://acabnodejs.herokuapp.com/corporate/')
//     .then(response => {
      
//       this.setState({ customers: response.data})
      
//       let result=response.data
//       this.setState({customers:
//         result.map(e => {
//           return{
//             select : false,
//             id : e._id,
//             companyemail : e.companyemail,
          
//             companyname:e.companyname,
//             department:e.department,
//             numberofemployees:e.numberofemployees,
//             country:e.country,
//             mobilenumber:e.mobilenumber,
          

//           }
//         })

//     })
//     })
//     .catch((error) => {
//       console.log(error);
//     })
    
//   }
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
  
  customerList() {
    // this.state.customers.sort(function(a,b){
    //   if(a.companyname.toLowerCase() < b.companyname.toLowerCase()) return -1;
    //   if(a.companyname.toLowerCase() > b.companyname.toLowerCase()) return 1;
    //   return 0;
    //  })
    return this.state.customers.map(currentcustomer => (
//         total=[currentcustomer.companyemail],
//         total1=[total[0]],
//         total1.map(
//             a=>(
// console.log(a[0])
//             )
//         ),
      <tr>
        {/* <td  style={{border:"1px double black",textAlign:"center"}}>
        <input type="checkbox" onChange={e => {
                                let value = e.target.checked
                                // console.log(this.state)
                                this.state.customers.find(o => o.id=== currentcustomer.id).select = value
                                this.setState(this.state);
                            }} />
      </td> */}
      <td style={{border:"1px double black",textAlign:"center"}}></td>
      
      <td style={{border:"1px double black",textAlign:"center"}}></td>
      
      <td style={{border:"1px double black",textAlign:"center"}}></td>
      <td style={{border:"1px double black",textAlign:"center"}}></td>
      <td style={{border:"1px double black",textAlign:"center"}}></td>
      <td style={{border:"1px double black",textAlign:"center"}}></td>
      <td style={{border:"1px double black",textAlign:"center"}}></td>
      
      
      
    
    </tr>
   
    )
    
    
    )
    
    
  }
  
  
 



  render()
 {

  
    return (
      <div style={{marginTop:"50px"}}>
          
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item> Yearly Statement</Breadcrumb.Item>
          
          </Breadcrumb>
          
         
          
          {/* <Form onSubmit={this.onSubmit}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" value={this.state.companyname} onChange={this.onChangecompanyname} />
            </InputGroup>
            </Form> */}
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
              <Form.Control type="text" placeholder="Search" value={this.state.companyname} onChange={this.onChangecompanyname} />
            </InputGroup>
            </Form> */}
          </Col>
          
          </Row>
          </div>
          <h4 style={{textAlign:"center",color:"blue"}}>Over All Earning:$0.00</h4>
          <h4 style={{textAlign:"center",color:"blue"}}>Over All Commission:$0.00</h4>
          
        
        <div class="container">



<div class="row">
  <div class="col-md">

             <div style={{display:"flex"}}>
    <div style={{width:"70%"}}><h4><b></b></h4></div>
    <div style={{marginTop:"5px"}}>
    
        
       
        </div>
    
   
    

</div>
<Row>
  <Col md={3} className="mb-3" style={{padding:"10px"}} >
  <Card
        style={{
          width: 350,
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
           TOTAL NO OF RIDES
          </Typography>
          <Typography variant="h5" component="h2">
            0
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
           % down from cancelled request
          </Typography>
          {/* <Typography variant="body2" component="p">
            Stay Happy
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions> */}
      </Card>
  </Col>
  <Col md={3} className="mb-3" style={{padding:"10px"}}>
  <Card
        style={{
          width: 350,
          backgroundColor: "white",
          marginLeft:"115px"
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
           0.00
          </Typography>
          <Typography variant="h5" component="h2">
            from 0 Rides
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
           % down from cancelled request
          </Typography>
          {/* <Typography variant="body2" component="p">
            Stay Happy
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions> */}
      </Card>
  </Col>
  <Col md={3} className="mb-3"  style={{padding:"10px"}}>
  <Card
        style={{
          width: 350,
          backgroundColor: "white",
         marginLeft:"250px"
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
           CANCELLED RIDES
          </Typography>
          <Typography variant="h5" component="h2">
            0
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
           for 0.00 Rides
          </Typography>
          {/* <Typography variant="body2" component="p">
            Stay Happy
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions> */}
      </Card>
  </Col>

  </Row>

  <h4>Earnings:</h4>
        <div style={{overflowX:"scroll",overflowY:"scroll"}}>
        
          
       
       
        <table className="table">
          <thead className="thead-light">
            <tr>
           
            
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Sl.No</th>

              <th style={{border:"1px double black",width:"150px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Trip ID</th>
             
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Passenger</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Cab Type</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Trip From</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Trip To</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Start Time</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>View Route</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Actions</th>
              
              
              
           
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
