import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {  faCog, faHome, faSearch,faTrashAlt,faPlus,faPencilAlt,faMoneyBillAlt,faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'C:/Users/manjunath/OneDrive/Desktop/accrone projects/Cabreact/node_modules/font-awesome/css/font-awesome.min.css'; 



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
  
  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.companyname.toLowerCase() < b.companyname.toLowerCase()) return -1;
      if(a.companyname.toLowerCase() > b.companyname.toLowerCase()) return 1;
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
       <div class="arabic_rtl" style={{width: "80%", margin: "auto"}}>
    <h1>Translation Manager</h1>
    <p>Warning, translations are not visible until they are exported back to the app/lang file, using publish button.</p>
    <div class="alert alert-success success-import" style={{display:"none"}}>
        <p>Done importing, processed <strong class="counter">N</strong> items! Reload this page to refresh the groups!</p>
    </div>
    <div class="alert alert-success success-find" style={{display:"none"}}>
        <p>Done searching for translations, found <strong class="counter">N</strong> items!</p>
    </div>
    <div class="alert alert-success success-publish" style={{display:"none"}}>
        <p>Done publishing the translations for group ''!</p>
    </div>
        <p>
                <form class="form-inline form-import" method="POST" action="https://schedule.tranxit.co/translations/import" data-remote="true" role="form">
            <input type="hidden" name="_token" value="QB2mk8ZA1vW8AdKNpd0pCgkwKqZbJHwgzpRMVLY7" />
            <select name="replace" class="form-control">
                <option value="0">Append new translations</option>
                <option value="1">Replace existing translations</option>
            </select>
            <button type="submit" class="btn btn-success"  data-disable-with="Loading..">Import groups</button>
        </form>
        <form class="form-inline form-find" method="POST" action="https://schedule.tranxit.co/translations/find" data-remote="true" role="form" data-confirm="Are you sure you want to scan you app folder? All found translation keys will be added to the database.">
            <input type="hidden" name="_token" value="QB2mk8ZA1vW8AdKNpd0pCgkwKqZbJHwgzpRMVLY7" />
            <p></p>
            <button type="submit" class="btn btn-info" data-disable-with="Searching.." >Find translations in files</button>
        </form>
                    </p>
    <form role="form">
        <input type="hidden" name="_token" value="QB2mk8ZA1vW8AdKNpd0pCgkwKqZbJHwgzpRMVLY7" />
        <div class="form-group">
            <select name="group" id="group" class="form-control group-select">
                                    <option value="" selected>Choose a group</option>
                                    <option value="_json">_json</option>
                                    <option value="admin">admin</option>
                                    <option value="api">api</option>
                                    <option value="auth">auth</option>
                                    <option value="pagination">pagination</option>
                                    <option value="passwords">passwords</option>
                                    <option value="provider">provider</option>
                                    <option value="servicetypes">servicetypes</option>
                                    <option value="user">user</option>
                                    <option value="validation">validation</option>
                            </select>
        </div>
    </form>
            <p>Choose a group to display the group translations. If no groups are visible, make sure you have run the migrations and imported the translations.</p>

    </div>

        
      </div>
    )
  }
}
