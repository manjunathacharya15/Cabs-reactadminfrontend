import React, { Component } from 'react'
import {   faHome,  } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button,  Breadcrumb, Card } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import {Link} from 'react-router-dom'




export default class Tabs extends Component {
  constructor(props) {
    super(props);

    
//     this.onChangepcontact = this.onChangepcontact.bind(this);
//     this.onChangedcontact = this.onChangedcontact.bind(this);

// this.onSubmit = this.onSubmit.bind(this);
this.onback=this.onback.bind(this);
    
    this.state = {
        
    
     
        trainer:[]
        
        
      }
    }
    componentDidMount() {
   
      axios.post('https://acabnodejs.herokuapp.com/admin/')
    .then(response => {
      
      this.setState({ trainer: response.data})
      
      let result=response.data
      this.setState({trainer:
        result.map(e => {
          return{
            select : false,
            id : e._id,
            username : e.username,
          
            email:e.email,
            
          

          }
        })

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
            window.location='/#/dashboard/overview'
            }
  
            // onSubmit(e) {
            //   e.preventDefault();
              
          
            //   const customer = {
            //     pcontact: this.state.pcontact,
            //     dcontact: this.state.dcontact,
            
                
          
          
               
                
          
            //   }
          
            //   axios.post('https://acabnodejs.herokuapp.com/supportcontactsetting/update/' + this.props.match.params.id, customer)
            //     .then(function(response){
            //      if(response.data==='Supportcontactsetting updated!'){
            //          window.location='/#/components/tables'
            //      }
            //     }) 
            // }
          
            render() {
              return (
                this.state.trainer.map(currentcust=>(
                <div style={{marginTop:"50px"}}>
                <Card border="light" className="bg-white shadow-sm mb-4">
          <Card.Body>
          <h5 className="mb-4">Admin Profile Update</h5>
          <form class="form-horizontal" method="POST" enctype="multipart/form-data" role="form">
            	

				<div class="form-group row">
					<label for="name" class="col-xs-2 col-form-label">Name</label>
					<div class="col-xs-10">
						<input class="form-control" type="text" value={currentcust.username} name="name" required id="name"   />
					</div>
				</div>

				<div class="form-group row">
					<label for="email" class="col-xs-2 col-form-label">Email</label>
                    
					<div class="col-xs-10">
						<input class="form-control" type="email" required name="email" value={currentcust.email} id="email"  />
					</div>
				</div>

				{/* <div class="form-group row">
					<label for="picture" class="col-xs-2 col-form-label">Picture</label>
					<div class="col-xs-10">
							                    	<img style={{height: "90px", marginBottom: "15px", borderRadius:"2em"}} src="https://enterprisecabs.deliveryventure.com/storage/admin/profile/b862ee27b6dc3bac63ee183ff41c6e5d.jpeg" />
	                    						<input type="file" accept="image/*" name="picture" class=" dropify form-control-file" aria-describedby="fileHelp" />
					</div>
				</div> */}

				<div class="form-group row">
					<label for="zipcode" class="col-xs-2 col-form-label"></label>
					<div class="col-xs-10">
						<button type="submit" class="btn btn-secondary"><Link to={"/components/updateprofile/"+currentcust.id}>Update Profile</Link></button>
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
                )
              )
              }
            }
