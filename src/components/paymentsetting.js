import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {  faCog, faHome, faSearch,faTrashAlt,faPlus,faPencilAlt,faMoneyBillAlt,faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




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
  onback(){
  alert("You have Submitted")
    }
    oncancel(){
        alert("You have Cancelled")
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
        <div class="card card-block card-inverse card-primary">
       <blockquote class="card-blockquote">
       <i class="fa fa-3x fa-money pull-right"></i>
      
                        <div class="form-group row">
                            <div class="col-xs-4 arabic_right">
                                <label for="cash-payments" class="col-form-label">
                                   Cash Payments 
                                </label>
                            </div>
                            <div class="col-xs-6">
                                <input  checked   autocomplete="off" name="cash" id="cash-payments" type="checkbox" class="js-switch" data-color="#43b968" />
                            </div>
                            
                            
                            
                        </div>
                    </blockquote>
                    </div>
                    <div class="card card-block card-inverse card-primary">
                    <blockquote class="card-blockquote"  style={{backgroundColor:"#43b968"}} >
                    <i class="fa fa-3x fa-cc-stripe pull-right"></i>
                        <div class="form-group row">
                            <div class="col-xs-4 arabic_right">
                                <label for="stripe_secret_key" class="col-form-label">
                                    Stripe (Card Payments)                                </label>
                            </div>
                            <div class="col-xs-6">
                                <input  autocomplete="off" name="card" id="stripe_check" type="checkbox" class="js-switch" data-color="#43b968" />
                            </div>
                        </div>
                        <div class="payment_settings"  style={{display: "none"}} >
                            <div class="form-group row">
                                <label for="stripe_secret_key" class="col-xs-4 col-form-label">Stripe Secret key</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="sk_test_t57C8FbRF4ZACcIN4wo9mEjc00hHCnkY02" name="stripe_secret_key" id="stripe_secret_key"  placeholder="Stripe Secret key" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="stripe_publishable_key" class="col-xs-4 col-form-label">Stripe Publishable key</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="pk_test_zwbOfNz9Xa2F0rSmpPvEnh7z00QVbw8aQq" name="stripe_publishable_key" id="stripe_publishable_key"  placeholder="Stripe Publishable key" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="stripe_oauth_url" class="col-xs-4 col-form-label">Stripe Oauth Url</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="https://dashboard.stripe.com/express/oauth/authorize?response_type=code&amp;client_id=ca_GwZ6suX7yn6fBoQZwpEKDOstMBUNjJxI&amp;scope=read_write" name="stripe_oauth_url" id="stripe_oauth_url"  placeholder="Stripe Oauth Url" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="stripe_currency" class="col-xs-4 col-form-label">Currency</label>
                                <div class="col-xs-8">
                                    <select name="stripe_currency" class="form-control" required>
                                    <option  selected  value="USD">USD</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div class="card card-block card-inverse card-primary" >
                    <blockquote class="card-blockquote" style={{backgroundColor:"#43b968"}}>
                    {/* <i class="fa fa-3x fa-cc-stripe pull-right"></i> */}
                        <div class="form-group row">
                            <div class="col-xs-4 arabic_right">
                                <label for="card_payments" class="col-form-label" >
                                    Payumoney                                </label>
                            </div>
                            <div class="col-xs-6">
                                <input  autocomplete="off"  name="payumoney" type="checkbox" class="js-switch" data-color="#43b968" />
                            </div>
                            
                           
                        </div>
                        <div class="payment_settings"  style={{display: "none"}} >
                            <div class="form-group row">
                                <label for="payumoney_environment" class="col-xs-4 col-form-label">Environment</label>
                                <div class="col-xs-8">
                                    <select name="payumoney_environment" class="form-control" required>
                                    <option  selected  value="test">Development</option>
                                    <option  value="secure">Production</option>
                                </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="payumoney_merchant_id" class="col-xs-4 col-form-label">admin.payment.payumoney_merchant_id</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="" name="payumoney_merchant_id" id="payumoney_merchant_id"  placeholder="admin.payment.payumoney_merchant_id" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="payumoney_key" class="col-xs-4 col-form-label">Key</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="" name="payumoney_key" id="payumoney_key"  placeholder="Key" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="payumoney_salt" class="col-xs-4 col-form-label">Salt</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="" name="payumoney_salt" id="payumoney_salt"  placeholder="Salt" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="payumoney_auth" class="col-xs-4 col-form-label">Auth</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="" name="payumoney_auth" id="payumoney_auth"  placeholder="Auth" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2 payumoney_icon pull-right" >
                                <img src="https://schedule.tranxit.co/asset/img/payu.png" />
                            </div>
                    </blockquote>
                </div>
                <div class="card card-block card-inverse card-primary">
                    <blockquote class="card-blockquote"  style={{backgroundColor:"#43b968"}} >
                        <i class="fa fa-3x fa-paypal pull-right"></i>
                        <div class="form-group row">
                            <div class="col-xs-4 arabic_right">
                                <label for="card_payments" class="col-form-label">
                                    Paypal                                </label>
                            </div>
                            <div class="col-xs-6">
                                <input   autocomplete="off" name="paypal" type="checkbox" class="js-switch" data-color="#43b968" />
                            </div>
                        </div>
                        <div class="payment_settings"  style={{display:" none"}} >
                            <div class="form-group row">
                                <label for="paypal_environment" class="col-xs-4 col-form-label">Environment</label>
                                <div class="col-xs-8">
                                    <select name="paypal_environment" class="form-control" required>
                                    <option  selected  value="sandbox">Development</option>
                                    <option  value="live">Production</option>
                                </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paypal_client_id" class="col-xs-4 col-form-label">Client ID</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="2" name="paypal_client_id" id="paypal_client_id"  placeholder="Client ID" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paypal_client_secret" class="col-xs-4 col-form-label">Client Secret</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="yVnKClKDHPcDlqqO1V05RtDRdvtrVHfvjlfqliha" name="paypal_client_secret" id="paypal_client_secret"  placeholder="Client Secret" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paypal_currency" class="col-xs-4 col-form-label">Currency</label>
                                <div class="col-xs-8">
                                    <select name="paypal_currency" class="form-control" required>
                                    <option  selected  value="USD">USD</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div class="card card-block card-inverse card-primary">
                    <blockquote class="card-blockquote" style={{backgroundColor:"#43b968"}}>
                        {/* <!--<i class="fa fa-3x fa-paypal pull-right"></i>--> */}
                        <div class="form-group row">
                            <div class="col-xs-4 arabic_right">
                                <label for="card_payments" class="col-form-label">
                                    Paypal Adaptive                                </label>
                            </div>
                            <div class="col-xs-6">
                                <input   autocomplete="off" name="paypal_adaptive" type="checkbox" class="js-switch" data-color="#43b968" />
                            </div>
                            
                        </div>
                        <div class="payment_settings"  style={{display:" none" }}>
                            <div class="form-group row">
                                <label for="paypal_adaptive_environment" class="col-xs-4 col-form-label">Environment</label>
                                <div class="col-xs-8">
                                    <select name="paypal_adaptive_environment" class="form-control" required>
                                    <option  value="sandbox">Development</option>
                                    <option  value="live">Production</option>
                                </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paypal_username" class="col-xs-4 col-form-label">Username</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="" name="paypal_username" id="paypal_username"  placeholder="Username" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paypal_password" class="col-xs-4 col-form-label">Password</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="" name="paypal_password" id="paypal_password"  placeholder="Password" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paypal_secret" class="col-xs-4 col-form-label">Secret</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="" name="paypal_secret" id="paypal_secret"  placeholder="Secret" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paypal_certificate" class="col-xs-4 col-form-label">Certificate</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="file" name="paypal_certificate" id="paypal_certificate" placeholder="Certificate"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paypal_app_id" class="col-xs-4 col-form-label">APP Id</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="" name="paypal_app_id" id="paypal_app_id"  placeholder="APP Id" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paypal_adaptive_currency" class="col-xs-4 col-form-label">Currency</label>
                                <div class="col-xs-8">
                                    <select name="paypal_adaptive_currency" class="form-control" required>
                                    <option  selected  value="USD">USD</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2 paypal_adaptive_icon pull-right" >
                                <img width="" src="https://schedule.tranxit.co/asset/img/adaptation.png" />
                            </div>
                    </blockquote>
                </div>
                
                <div class="card card-block card-inverse card-primary">
                    <blockquote class="card-blockquote" style={{backgroundColor:"#43b968"}}>
                        {/* <!-- <i class="fa fa-3x fa-credit-card pull-right"></i> --> */}
                        <div class="form-group row">
                            <div class="col-xs-4 arabic_right">
                                <label for="card_payments" class="col-form-label">
                                    Paytm                                </label>
                            </div>
                            <div class="col-xs-6">
                                <input   autocomplete="off" name="paytm" type="checkbox" class="js-switch" data-color="#43b968" />
                            </div>
                           
                        </div>
                        <div class="payment_settings"  style={{display:" none"}} >
                            <div class="form-group row">
                                <label for="paytm_environment" class="col-xs-4 col-form-label">Environment</label>
                                <div class="col-xs-8">
                                    <select name="paytm_environment" class="form-control" required>
                                          <option  selected  value="local">Development</option>
                                          <option  value="production">Production</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paytm_merchant_id" class="col-xs-4 col-form-label">Merchant ID</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="" name="paytm_merchant_id" id="paytm_merchant_id"  placeholder="Merchant ID" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paytm_merchant_key" class="col-xs-4 col-form-label">Merchant Key</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="" name="paytm_merchant_key" id="paytm_merchant_key"  placeholder="Merchant Key" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="paytm_website" class="col-xs-4 col-form-label">Website</label>
                                <div class="col-xs-8">
                                    <select name="paytm_website" class="form-control" required>
                                          <option  selected  value="WEBSTAGING">Staging</option>
                                          <option  value="WEBPROD">Production</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-1 braintree_icon pull-right">
                                <img width="110" src="https://schedule.tranxit.co/asset/img/paytm-logo.png" />
                            </div>
                    </blockquote>
                    
                </div>
                <div class="card card-block card-inverse card-primary">
                    <blockquote class="card-blockquote" style={{backgroundColor:"#43b968"}}>
                        {/* <!-- <i class="fa fa-3x fa-credit-card pull-right"></i> --> */}
                        <div class="form-group row">
                            <div class="col-xs-4 arabic_right">
                                <label for="card_payments" class="col-form-label">
                                    Braintree                                </label>
                            </div>
                            <div class="col-xs-6">
                                <input   autocomplete="off" name="braintree" type="checkbox" class="js-switch" data-color="#43b968" />
                            </div>
                            
                        </div>
                        <div class="payment_settings"  style={{display:" none"}} >
                            <div class="form-group row">
                                <label for="braintree_environment" class="col-xs-4 col-form-label">Environment</label>
                                <div class="col-xs-8">
                                    <select name="braintree_environment" class="form-control" required>
                                          <option  selected  value="sandbox">Development</option>
                                          <option  value="live">Production</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="braintree_merchant_id" class="col-xs-4 col-form-label">Merchant ID</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="Merevehe89_324987" name="braintree_merchant_id" id="braintree_merchant_id"  placeholder="Merchant ID" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="braintree_public_key" class="col-xs-4 col-form-label">Public Key</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="pub_349873dlasdjf9" name="braintree_public_key" id="braintree_public_key"  placeholder="Public Key" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="braintree_private_key" class="col-xs-4 col-form-label">Private Key</label>
                                <div class="col-xs-8">
                                    <input class="form-control" type="text" value="pri_84937sdakasdf" name="braintree_private_key" id="braintree_private_key"  placeholder="Private Key" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2 braintree_icon pull-right">
                                <img src="https://schedule.tranxit.co/asset/img/tree-brain.png" />
                            </div>
                    </blockquote>
                </div>
               

                   
                <div class="form-group row">
                    <div class="col-xs-4">
                        <button class="btn btn-warning btn-block" onClick={this.onback} >Submit</button>
                    </div>
                    </div>
                <div class="form-group row">
                    <div class="col-xs-4">
                        <a onClick={this.oncancel} class="btn btn-warning btn-block">Cancel</a>
                    </div>
                    </div>

        
      </div>
    )
  }
}
