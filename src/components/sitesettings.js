import React,{Component} from "react"
import axios from 'axios';
// import moment from "moment-timezone";
import DatePicker from 'react-datepicker'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment-timezone";
// import moment from "moment";

export default class Accordion extends Component{
    constructor(props) {
        super(props);
    
        
        this.onChangename = this.onChangename.bind(this);
        this.onChangeemail= this.onChangeemail.bind(this);
        this.onChangeprofilepicture = this.onChangeprofilepicture.bind(this);
        
        
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangerole = this.onChangerole.bind(this);

       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          name:'',
          email:'',
          profilepicture:'',
          password:'',
          role:'',
         
            trainer:[]
            
            
          }
        }
        
        onChangename(e) {
          this.setState({
            name: e.target.value
          })
        }
          
          onChangeemail(e) {
            this.setState({
              email: e.target.value
            })
          }
          onChangeprofilepicture(e) {
            this.setState({
              profilepicture: e.target.value
            })
          }
          onChangepassword(e) {
            this.setState({
              password: e.target.value
            })
          }
          onChangerole(e) {
            this.setState({
            role: e.target.value
            })
          }
         
      
          
        
          
          
          
          onback(){
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const trainer = {
              name: this.state.name,
              password: this.state.password,
              email:this.state.email,
              profilepicture:this.state.profilepicture,
              role:this.state.role,
              
             

        
            }
        
            
        
            axios.post('https://acabnodejs.herokuapp.com/subadmin/add', trainer)
            .then(function(response){
        
              if(response.data ==='Subadmin added!'){
                alert("Subadmin Added")
                  window.location='/#/components/alerts'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Site Settings</h5>
        <Form onSubmit={this.onSubmit}>
        <div class="form-group row">
					<label for="site_title" class="col-xs-3 col-form-label">Site Name</label>
					<div class="col-xs-9">
						<input class="form-control" type="text"  name="site_title" required id="site_title" placeholder="Site Name" />
					</div>
				</div>

				<div class="form-group row">
					<label for="site_logo" class="col-xs-3 col-form-label">Site Logo</label>
					<div class="col-xs-9">
							                    <img style={{height: "90px", marginBottom: "15px"}} src="https://schedule.tranxit.co/uploads/6f8ee62c469cc4f2986ad44934f6197a4335046f.png" />
	                    						<input type="file" accept="image/*" name="site_logo" class="dropify form-control-file" id="site_logo" aria-describedby="fileHelp" />
					</div>
				</div>


				<div class="form-group row">
					<label for="site_icon" class="col-xs-3 col-form-label">Site Icon</label>
					<div class="col-xs-9">
							                    <img style={{height: "90px", marginBottom: "15px"}} src="https://schedule.tranxit.co/uploads/e26fe23c36e82c16f7bbb073b34b86fab790be10.png" />
	                    						<input type="file" accept="image/*" name="site_icon" class="dropify form-control-file" id="site_icon" aria-describedby="fileHelp" />
					</div>
				</div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Copyright Content</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Site Copyright" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Playstore Link</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Playstore link" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Appstore Link</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Appstore link" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Facebook Link</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Facebook Link" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Twitter Link</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Twitter Link" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Provider Accept Timeout</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="60" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Provider Search Radius</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Site Copyright" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Manual Assigning</label>
                    <div class="col-xs-9">
                    <div class="float-xs-left mr-1"><input      name="referral" type="checkbox" class="js-switch" data-color="#43b968" id="refchk" /></div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Track Live Travel Distance </label>
                    <div class="col-xs-9">
                    <div class="float-xs-left mr-1"><input      name="referral" type="checkbox" class="js-switch" data-color="#43b968" id="refchk" /></div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Manual Assigning</label>
                    <div class="col-xs-9">
                    <div class="float-xs-left mr-1"><input      name="referral" type="checkbox" class="js-switch" data-color="#43b968" id="refchk" /></div>
                    </div>
                </div>
                <div class="form-group row">
					<label for="contact_number" class="col-xs-3 col-form-label">Contact Number</label>
					<div class="col-xs-9">
						<input class="form-control" type="number" value="0995681345" name="contact_number" required id="contact_number" placeholder="Contact Number" />
					</div>
				</div>
                <div class="form-group row">
					<label for="contact_email" class="col-xs-3 col-form-label">Contact Email</label>
					<div class="col-xs-9">
						<input class="form-control" type="email" value="admin@demo.com" name="contact_email" required id="contact_email" placeholder="Contact Email" />
					</div>
				</div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Social Login</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Social login" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Google Map Key</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Google Map Key" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Android Map Key</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Android Map Key" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">IOS Map Key </label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="IOS Map Key" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">FB App Version</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="FB App Version" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">FB App Secret</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="FB App Secret" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Rental Content</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Rental Content" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Outstation Content</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Outstation Content" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Limit Message</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Limit Message" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Landing Content </label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Landing Content" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="tax_percentage" class="col-xs-3 col-form-label">Msg91 AuthKey</label>
                    <div class="col-xs-9">
                        <input class="form-control" type="text"  name="site_copyright" id="site_copyright" placeholder="Msg91 AuthKey" />
                    </div>
                </div>


				

               

				
                <div class="form-group row">
					<label for="sos_number" class="col-xs-3 col-form-label">IOS Review</label>
					<div class="col-xs-9">
						<input class="form-control" type="text"  name="sos_number" required id="sos_number" placeholder="IOS Review" />
					</div>
				</div>

				

                
        
        </Form>
        <div className="mt-3">
            <Button variant="primary" type="submit">Save Site Setting</Button>
          
          </div>
      </Card.Body>
    </Card>
                
            </div>
        )
    }
}