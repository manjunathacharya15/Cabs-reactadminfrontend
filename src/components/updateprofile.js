import React, { Component } from 'react'
import {   faHome,  } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button,  Breadcrumb, Card } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';




export default class Tabs extends Component {
  constructor(props) {
    super(props);

    
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeusername = this.onChangeusername.bind(this);
    this.onChangedprofilepicture = this.onChangedprofilepicture.bind(this);

this.onSubmit = this.onSubmit.bind(this);
this.onback=this.onback.bind(this);
    
    this.state = {
        
     username:'',
     email:'',
     file:null,
     
        trainer:[]
        
        
      }
    }
    componentDidMount(){
      axios.get('https://acabnodejs.herokuapp.com/admin/' + this.props.match.params.id )
      .then(response => {
          
        this.setState({ 
          username:response.data.username,
          email:response.data.email,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangedprofilepicture(e) {
    this.setState({
      file: e.target.files[0]
    })
  }
  onChangeusername(e) {
    this.setState({
      username: e.target.value
    })
  }

      onback(){
            window.location='/#/dashboard/overview'
            }
  
            onSubmit(e) {
              e.preventDefault();
              
          
    const formData=new FormData();
    formData.append('username',this.state.username);
    formData.append('email',this.state.email);
    formData.append('profilepicture',this.state.file);
    
    
    const config={
      headers:{
        'content-type':'multipart/form-data'
      }
    }
              axios.post('https://acabnodejs.herokuapp.com/admin/update/' + this.props.match.params.id, formData)
                .then(function(response){
                 if(response.data==='Admin updated!'){
                     alert("Admin profile Updated")
                     window.location='/#/components/adminprofile'
                 }
                }) 
            }
          
            render() {
              return (
                <div style={{marginTop:"50px"}}>
                <Card border="light" className="bg-white shadow-sm mb-4">
          <Card.Body>
          <h5 className="mb-4">Admin Profile Update</h5>
          <form class="form-horizontal" onSubmit={this.onSubmit}>
            	

				<div class="form-group row">
					<label for="name" class="col-xs-2 col-form-label">Name</label>
					<div class="col-xs-10">
						<input class="form-control" type="text" value={this.state.username} name="username" onChange={this.onChangeusername} required id="name"   />
					</div>
				</div>

				<div class="form-group row">
					<label for="email" class="col-xs-2 col-form-label">Email</label>
                    
					<div class="col-xs-10">
						<input class="form-control" type="email" required name="email" value={this.state.email} onChange={this.onChangeemail} id="email"  />
					</div>
				</div>

				<div class="form-group row">
					<label for="picture" class="col-xs-2 col-form-label">Picture</label>
					<div class="col-xs-10">
							                    	<img style={{height: "90px", marginBottom: "15px", borderRadius:"2em"}} src="https://enterprisecabs.deliveryventure.com/storage/admin/profile/b862ee27b6dc3bac63ee183ff41c6e5d.jpeg" />
	                    						<input type="file" accept="image/*" name="profilepicture" class=" dropify form-control-file" aria-describedby="fileHelp" onChange={this.onChangedprofilepicture} />
					</div>
				</div>

				<div class="form-group row">
					<label for="zipcode" class="col-xs-2 col-form-label"></label>
					<div class="col-xs-10">
						<button type="submit" class="btn btn-primary">Update Profile</button>
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
