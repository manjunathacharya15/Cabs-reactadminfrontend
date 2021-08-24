import React, { Component } from 'react'
import {   faHome,  } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button,  Breadcrumb, Card } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';




export default class Tabs extends Component {
  constructor(props) {
    super(props);

    
    this.onChangepcontact = this.onChangepcontact.bind(this);
    this.onChangedcontact = this.onChangedcontact.bind(this);

this.onSubmit = this.onSubmit.bind(this);
this.onback=this.onback.bind(this);
    
    this.state = {
        
     pcontact:'',
     dcontact:'',
     
        trainer:[]
        
        
      }
    }
    componentDidMount(){
      axios.get('https://acabnodejs.herokuapp.com/supportcontactsetting/' + this.props.match.params.id )
      .then(response => {
        this.setState({ 
          pcontact:response.data.contacts.passenger.pcontact,
          dcontact:response.data.contacts.driver.dcontact,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangepcontact(e) {
    this.setState({
      pcontact: e.target.value
    })
  }
  onChangedcontact(e) {
    this.setState({
      dcontact: e.target.value
    })
  }

      onback(){
            window.location='/#/components/tables'
            }
  
            onSubmit(e) {
              e.preventDefault();
              
          
              const customer = {
                pcontact: this.state.pcontact,
                dcontact: this.state.dcontact,
            
                
          
          
               
                
          
              }
          
              axios.post('https://acabnodejs.herokuapp.com/supportcontactsetting/update/' + this.props.match.params.id, customer)
                .then(function(response){
                 if(response.data==='Supportcontactsetting updated!'){
                     window.location='/#/components/tables'
                 }
                }) 
            }
          
            render() {
              return (
                <div style={{marginTop:"50px"}}>
                <Card border="light" className="bg-white shadow-sm mb-4">
          <Card.Body>
          <h5 className="mb-4">Change Password</h5>
          <form class="form-horizontal" action="https://enterprisecabs.deliveryventure.com/admin/password" method="POST" role="form">
            	

            	<div class="form-group row">
					<label for="old_password" class="col-xs-12 col-form-label">Old Password</label>
					<div class="col-xs-10">
						<input class="form-control" type="password" name="old_password" id="old_password" placeholder="Old Password" />
					</div>
				</div>

				<div class="form-group row">
					<label for="password" class="col-xs-12 col-form-label">Password </label>
					<div class="col-xs-10">
						<input class="form-control" type="password" name="password" id="password" placeholder="New Password" />
					</div>
				</div>

				<div class="form-group row">
					<label for="password_confirmation" class="col-xs-12 col-form-label">Password Confirmation</label>
					<div class="col-xs-10">
						<input class="form-control" type="password" name="password_confirmation" id="password_confirmation" placeholder="Re-type New Password" />
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
