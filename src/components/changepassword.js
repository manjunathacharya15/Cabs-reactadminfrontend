import React, { Component } from 'react'
import {   faHome,  } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button,  Breadcrumb, Card } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';




export default class Tabs extends Component {
  constructor(props) {
    super(props);

    
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeoldpassword = this.onChangeoldpassword.bind(this);
    this.onChangenewpassword = this.onChangenewpassword.bind(this);


this.onSubmit = this.onSubmit.bind(this);
this.onback=this.onback.bind(this);
    
    this.state = {
        
     email:'',
     oldpassword:'',
     newpassword:'',
     
        trainer:[]
        
        
      }
    }
    

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeoldpassword(e) {
    this.setState({
      oldpassword: e.target.value
    })
  }
  onChangenewpassword(e) {
    this.setState({
      newpassword: e.target.value
    })
  }

      onback(){
            window.location='/#/dashboard/overview'
            }
  
            onSubmit(e) {
              e.preventDefault();
              
          
              const customer = {
                email: this.state.email,
                oldpassword: this.state.oldpassword,
                newpassword: this.state.newpassword,
            
                
          
          
               
                
          
              }
          
              axios.post('https://acabnodejs.herokuapp.com/admin/changepassword' , customer)
                .then(function(response){
                  console.log(response)
                 if(response.data==='Password Change Successful'){
                     window.location='/#/'
                 }
                }) 
            }
          
            render() {
              return (
                <div style={{marginTop:"50px"}}>
                <Card border="light" className="bg-white shadow-sm mb-4">
          <Card.Body>
          <h5 className="mb-4">Change Password</h5>
          <form   onSubmit={this.onSubmit}  >
            	

            	<div class="form-group row">
					<label for="old_password" class="col-xs-12 col-form-label">Email:</label>
					<div class="col-xs-10">
						<input class="form-control" type="email"  placeholder="Email" value={this.state.email} onChange={this.onChangeemail} />
					</div>
				</div>

				<div class="form-group row">
					<label for="password" class="col-xs-12 col-form-label"> Old Password </label>
					<div class="col-xs-10">
						<input class="form-control" type="password"   placeholder="old password"  value={this.state.password} onChange={this.onChangeoldpassword} />
					</div>
				</div>

				<div class="form-group row">
					<label for="password_confirmation" class="col-xs-12 col-form-label">New Password</label>
					<div class="col-xs-10">
						<input class="form-control" type="password"   placeholder="New Password" value={this.state.newpassword} onChange={this.onChangenewpassword} />
					</div>
				</div>

				<div class="form-group row">
					<label for="zipcode" class="col-xs-12 col-form-label"></label>
					<div class="col-xs-10">
						<button type="submit" class="btn btn-primary">Change Password</button>
					</div>
				</div>

			</form>
          <div className="mt-3">
              <Button variant="primary" type="submit" onClick={this.onback}>Back</Button>
            
            </div>
          </Card.Body>
          </Card>
                  
              </div>
      )
              }
            }
