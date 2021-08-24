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
    
        
        this.onChangecompanyemail = this.onChangecompanyemail.bind(this);
        this.onChangecompanyname= this.onChangecompanyname.bind(this);
        this.onChangedepartment = this.onChangedepartment.bind(this);
        
        
        this.onChangenumberofemployees = this.onChangenumberofemployees.bind(this);
        this.onChangecountry = this.onChangecountry.bind(this);
        this.onChangemobilenumber = this.onChangemobilenumber.bind(this);

       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          companyemail:'',
          companyname:'',
          department:'',
          numberofemployees:'',
          country:'',
          mobilenumber:'',
         
            trainer:[]
            
            
          }
        }
        
        onChangecompanyemail(e) {
          this.setState({
            companyemail: e.target.value
          })
        }
          
          onChangecompanyname(e) {
            this.setState({
              companyname: e.target.value
            })
          }
          onChangedepartment(e) {
            this.setState({
              department: e.target.value
            })
          }
          onChangenumberofemployees(e) {
            this.setState({
              numberofemployees: e.target.value
            })
          }
          onChangecountry(e) {
            this.setState({
            country: e.target.value
            })
          }
          onChangemobilenumber(e) {
            this.setState({
            mobilenumber: e.target.value
            })
          }
         
      
          
        
          
          
          
          onback(){
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const trainer = {
              companyemail: this.state.companyemail,
              companyname: this.state.companyname,
              department:this.state.department,
              numberofemployees:this.state.numberofemployees,
              country:this.state.country,
              mobilenumber:this.state.mobilenumber,
              
             

        
            }
        
            
        
            axios.post('https://acabnodejs.herokuapp.com/corporate/add', trainer)
            .then(function(response){
        
              if(response.data ==='Corporate added!'){
                alert("Corporate Added")
                  window.location='/#/components/viewcorporate'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Add Corporate</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Company Offical Email ID</Form.Label>
                <Form.Control required type="email"  placeholder="" value={this.state.companyemail}
              onChange={this.onChangecompanyemail}
              
             />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Company Name</Form.Label>
                <Form.Control required type="text"  placeholder="" value={this.state.companyname}
              onChange={this.onChangecompanyname}
              
             />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Department</Form.Label>
                <select class="form-control" id="calculator" name="calculator" onChange={this.onChangedepartment} value={this.state.department}>
                                                    <option value="Admin">Admin</option>
                                                    <option value="Travel Desk">Travel Desk</option>
                                                    <option value="Finance">Finance</option>
                                                    <option value="HR">HR</option>
                                                    <option value="Others">Others</option>

                                                    
                                                    
                                                    
                                                </select>
                
          
              
              </Form.Group>
              </Col>
            

            
            
          </Row>
          
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Number Of Employees</Form.Label>
                <select class="form-control" id="calculator" name="calculator" onChange={this.onChangenumberofemployees} value={this.state.numberofemployees}>
                                                    <option value="Less then 50">Less Then 50</option>
                                                    <option value="50 to 200 ">50 to 200</option>
                                                    <option value="201 to 2500">201 to 2500</option>
                                                    <option value="more then 2500">more then 2500</option>
                                                   

                                                    
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Country</Form.Label>
                <select class="form-control" id="calculator" name="calculator" onChange={this.onChangecountry} value={this.state.country}>
                                                    <option value="India">Inida</option>
                                                    
                                                   

                                                    
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
            
            
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Phone Number</Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.mobilenumber}
              onChange={this.onChangemobilenumber}
              
             />
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={3} className="mb-3"> <div className="mt-3">
            <Button variant="primary" type="submit">Save </Button>
          
          </div></Col>
          <Col md={3} className="mb-3"><div className="mt-3">
            <Button variant="primary"  onClick={this.onback}>Back</Button>
          
          </div></Col>
            </Row>
          
         
        
        </Form>
        
      </Card.Body>
    </Card>
                
            </div>
        )
    }
}