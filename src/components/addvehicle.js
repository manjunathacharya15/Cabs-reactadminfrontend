import React,{Component} from "react"
import axios from 'axios';
// import moment from "moment-timezone";
// import Datetime from "react-datetime";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import DatePicker from 'react-datepicker'

import moment from "moment-timezone";
import { Height } from "@material-ui/icons";
export default class Adduser extends Component{
    constructor(props) {
        super(props);
    
        
        this.onChangevvehiclemodal = this.onChangevvehiclemodal.bind(this);
        this.onChangevvehicletype= this.onChangevvehicletype.bind(this);
        this.onChangevvehiclecapacity = this.onChangevvehiclecapacity.bind(this);
        this.onChangevregistrationnumber= this.onChangevregistrationnumber.bind(this);
        this.onChangevchassisnumber = this.onChangevchassisnumber.bind(this);
        this.onChangevenginenumber = this.onChangevenginenumber.bind(this);
        this.onChangevrccardnumber= this.onChangevrccardnumber.bind(this);
        this.onChangevinsurencenumber = this.onChangevinsurencenumber.bind(this);
        this.onChangevemmissiontest= this.onChangevemmissiontest.bind(this);
        this.onChangevrccardrenewaldate = this.onChangevrccardrenewaldate.bind(this);
        this.onChangevinsurencerenewaldate = this.onChangevinsurencerenewaldate.bind(this);
        this.onChangevemmissiontestrenewaldate= this.onChangevemmissiontestrenewaldate.bind(this);
        this.onChangevtaxrenewal = this.onChangevtaxrenewal.bind(this);
        this.onChangevstatepermit= this.onChangevstatepermit.bind(this);
        this.onChangevnationalpermit = this.onChangevnationalpermit.bind(this);
        this.onChangevuploadstatepermitdocument = this.onChangevuploadstatepermitdocument.bind(this);
        this.onChangevuploadnationalpermitdocument= this.onChangevuploadnationalpermitdocument.bind(this);
        this.onChangevuploadinsurencedocument = this.onChangevuploadinsurencedocument.bind(this);
        this.onChangevuploadvehiclepicture= this.onChangevuploadvehiclepicture.bind(this);
        this.onChangevuploademmissiontestdocument = this.onChangevuploademmissiontestdocument.bind(this);
        this.onChangevuploadrccardproof = this.onChangevuploadrccardproof.bind(this);
        this.onChangevuploadtaxrenewalproof= this.onChangevuploadtaxrenewalproof.bind(this);
       


       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
           
           
           vvehiclemodel:'',
           vvehicletype:'',
           vvehiclecapacity:'',
           vregistrationnumber:'',
           vchassisnumber:'',
           venginenumber:'',
           vrccardnumber:'',
           vinsurancenumber:'',
           vemmissiontest:'',
           vrccardrenewaldate:new Date(),
           vinsurancerenewaldate:new Date(),
           vemmissiontestrenewaldate:new Date(),
           vtaxrenewal:'',
           vstatepermit:'',
           vnationalpermit:'',
           vstatepermitdocument:'',
           vnationalpermitdocument:'',
           vinsurancedocument:'',
           vvehiclepicture:'',
           vemmissiontestdocument:'',
           vrccardproof:'',
           vtaxrenewalproof:'',
           



         
            trainer:[]
            
            
          }
        }
        
          onChangevvehiclemodal(e) {
            this.setState({
              vvehiclemodel: e.target.value
            })
          }
          onChangevvehicletype(e) {
            this.setState({
              vvehicletype: e.target.value
            })
          }
          onChangevvehiclecapacity(e) {
            this.setState({
              vvehiclecapacity: e.target.value
            })
          }
          onChangevregistrationnumber(e) {
            this.setState({
              vregistrationnumber: e.target.value
            })
          }
          onChangevchassisnumber(e) {
            this.setState({
              vchassisnumber: e.target.value
            })
          }
          onChangevenginenumber(e) {
            this.setState({
              venginenumber: e.target.value
            })
          }
          onChangevrccardnumber(e) {
            this.setState({
              vrccardnumber: e.target.value
            })
          }
          onChangevinsurencenumber(e) {
            this.setState({
              vinsurancenumber: e.target.value
            })
          }
          onChangevemmissiontest(e) {
            this.setState({
              vemmissiontest: e.target.value
            })
          }
          onChangevrccardrenewaldate(date) {
            this.setState({
              vrccardrenewaldate: date
            })
          }
          onChangevinsurencerenewaldate(date) {
            this.setState({
              vinsurencerenewaldate: date
            })
          }
          onChangevemmissiontestrenewaldate(date) {
            this.setState({
              vemmissiontestrenewaldate: date
            })
          }
          onChangevtaxrenewal(e) {
            this.setState({
              vtaxrenewal: e.target.value
            })
          }
          onChangevstatepermit(e) {
            this.setState({
              vstatepermit: e.target.value
            })
          }
          onChangevnationalpermit(e) {
            this.setState({
              vnationalpermit: e.target.value
            })
          }
          onChangevuploadstatepermitdocument(e) {
            this.setState({
              vstatepermitdocument: e.target.value
            })
          }
          onChangevuploadnationalpermitdocument(e) {
            this.setState({
              vnationalpermitdocument: e.target.value
            })
          }
          onChangevuploadinsurencedocument(e) {
            this.setState({
              vinsurancedocument: e.target.value
            })
          }
          onChangevuploadvehiclepicture(e) {
            this.setState({
              vvehiclepicture: e.target.value
            })
          }
          onChangevuploademmissiontestdocument(e) {
            this.setState({
              vemmissiontestdocument: e.target.value
            })
          }
          onChangevuploadrccardproof(e) {
            this.setState({
              vrccardproof: e.target.value
            })
          }
          onChangevuploadtaxrenewalproof(e) {
            this.setState({
              vtaxrenewalproof: e.target.value
            })
          }
         
          onback(){
            window.location='/#/components/buttons'
            }
     
          onSubmit(e) {
            e.preventDefault();
        
            const trainer = {
             
              vvehiclemodel:this.state.vvehiclemodel,
              vvehicletype:this.state.vvehicletype,
              vvehiclecapacity:this.state.vvehiclecapacity,
              vregistrationnumber:this.state.vregistrationnumber,
              vchassisnumber:this.state.vchassisnumber,
              venginenumber:this.state.venginenumber,
              vrccardnumber:this.state.vrccardnumber,
              vinsurancenumber:this.state.vinsurancenumber,
              vemmissiontest:this.state.vemmissiontest,
              vrccardrenewaldate:this.state.vrccardrenewaldate,
              vinsurancerenewaldate:this.state.vinsurancerenewaldate,
              vemmissiontestrenewaldate:this.state.vemmissiontestrenewaldate,
              vtaxrenewal:this.state.vtaxrenewal,
              vstatepermit:this.state.vstatepermit,
              vnationalpermit:this.state.vnationalpermit,
              vstatepermitdocument:this.state.vstatepermitdocument,
              vnationalpermitdocument:this.state.vnationalpermitdocument,
              vinsurancedocument:this.state.vinsurancedocument,
              vvehiclepicture:this.state.vvehiclepicture,
              vemissiontestdocument:this.state.vemmissiontestdocument,
              vrccardproof:this.state.vrccardproof,
              vtaxrenewalproof:this.state.vtaxrenewalproof,
              
             

        
            }
        
            console.log(trainer);
        
            axios.post('https://acabnodejs.herokuapp.com/enrollfleetowner/updatevehicle/' + this.props.match.params.id, trainer)
            .then(function(response){
        
              if(response.data ==='enrollfleetvehicleadded'){
                  window.location='/#/dashboard/overview'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h3 className="mb-4">New Vehicle information</h3>
        <Form onSubmit={this.onSubmit}>
         

          <Card border="light" className="bg-white shadow-sm mb-4">
          <Card.Body>
          <h3 className="mb-4">Vechile Details</h3>

<Row>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Vehicle Model</Form.Label>
      <Form.Control required type="text" placeholder="Enter your  Vehicle  Model Name" value={this.state.vvehiclemodel}
    onChange={this.onChangevvehiclemodal}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Vehicle Type</Form.Label>
      <select class="form-control" id="calculator" name="calculator" onChange={this.onChangevvehicletype} value={this.state.vvehicletype}>
                                                    <option value="Mini">Mini</option>
                                                    <option value="Micro">Micro</option>
                                                    <option value="Sedan">Sedan</option>
                                                    <option value="Suv">SUV</option>
                                                    <option value="India">Auto</option>
                                                    <option value="India">Bike</option>
                                                    
                                                </select>
    </Form.Group>
  </Col>
  
  <Col md={4} className="mb-3">
    <Form.Group id="gender">
      <Form.Label>Vehicle Capacity</Form.Label>
      <select class="form-control" id="calculator" name="calculator" onChange={this.onChangevvehiclecapacity} value={this.state.vvehiclecapacity}>
                                                    <option value="1">1</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="8">8</option>
                                                    
                                                    
                                                </select>
   
    </Form.Group>
  </Col>
</Row>
<Row>
<Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Registration Number</Form.Label>
      <Form.Control required type="number" placeholder="Enter Registration Number" value={this.state.vregistrationnumber}
    onChange={this.onChangevregistrationnumber}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Chassis Number</Form.Label>
      <Form.Control required type="text" placeholder="Enter Chassis Number" value={this.state.vchassisnumber}
    onChange={this.onChangevchassisnumber}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label>Engine Number</Form.Label>
      <Form.Control required type="text" placeholder="Enter Engine Number" value={this.state.venginenumber}
    onChange={this.onChangevenginenumber}  />
    </Form.Group>
  </Col>
</Row>
<Row>
<Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> RC Card Number</Form.Label>
      <Form.Control required type="text" placeholder="Enter RC Card Number" value={this.state.vrccardnumber}
    onChange={this.onChangevrccardnumber}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Insurence Number</Form.Label>
      <Form.Control required type="text" placeholder="Enter Insurence Number" value={this.state.vinsurencenumber}
    onChange={this.onChangevinsurencenumber}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label>Emmission Test</Form.Label>
      <Form.Control required type="text" placeholder="Enter Enmission Test" value={this.state.vemmissiontest}
    onChange={this.onChangevemmissiontest}  />
    </Form.Group>
  </Col>
</Row>
<Row>
<Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> RC Card Renewal Date</Form.Label>
      <br/>
      <DatePicker
            
             selected={this.state.vrccardrenewaldate}
             onChange={this.onChangevrccardrenewaldate}
             name="startDate"
        
            
             
             timeCaption="time"
             dateFormat="MMMM dd yyyy "
            />
      
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Insurence Renewal Date</Form.Label>
      <br/>
      <DatePicker
            
             selected={this.state.vinsurencerenewaldate}
             onChange={this.onChangevinsurencerenewaldate}
             name="startDate"
        
            
            
             timeCaption="time"
             dateFormat="MMMM dd yyyy "
            />
      
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label>Emmission Test Renewal Date</Form.Label>
      <br/>
      <DatePicker
            
             selected={this.state.vemmissiontestrenewaldate}
             onChange={this.onChangevemmissiontestrenewaldate}
             name="startDate"
        
            
             
             timeCaption="time"
             dateFormat="MMMM dd yyyy "
            />
      
    </Form.Group>
  </Col>
</Row>
<Row>
<Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Tax Renewal </Form.Label>
      <Form.Control required type="number" placeholder="Enter Tax Renewal" value={this.state.vtaxrenewal}
    onChange={this.onChangevtaxrenewal}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> State Permit</Form.Label>
      <Form.Control required type="text" placeholder="Enter State Permit" value={this.state.vstatepermit}
    onChange={this.onChangevstatepermit}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label>National Permit</Form.Label>
      <Form.Control required type="text" placeholder="Enter National Permit" value={this.state.vnationalpermit}
    onChange={this.onChangevnationalpermit}  />
    </Form.Group>
  </Col>
</Row>
<Row>
<Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload State Permit Document</Form.Label>
      <Form.Control required type="number" placeholder="Enter Upload State Permit Document" value={this.state.vstatepermitdocument}
    onChange={this.onChangevuploadstatepermitdocument}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload National Permit Document</Form.Label>
      <Form.Control required type="text" placeholder="Enter Upload National Permit Document" value={this.state.vnationalpermitdocument}
    onChange={this.onChangevuploadnationalpermitdocument}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload Insurence Document</Form.Label>
      <Form.Control required type="text" placeholder="Enter Upload Insurence" value={this.state.vinsurancedocument}
    onChange={this.onChangevuploadinsurencedocument}  />
    </Form.Group>
  </Col>
</Row>
<Row>
<Col md={3} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload Vehicle Picture</Form.Label>
      <Form.Control required type="number" placeholder="Enter Upload Vehicle Picture" value={this.state.vvehiclepicture}
    onChange={this.onChangevuploadvehiclepicture}  />
    </Form.Group>
  </Col>
  <Col md={3} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload Emmission Test Document</Form.Label>
      <Form.Control required type="text" placeholder="Enter Upload Emmission Test Document" value={this.state.vemmissiontestdocument}
    onChange={this.onChangevuploademmissiontestdocument}  />
    </Form.Group>
  </Col>
  <Col md={3} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload RC Proof Document</Form.Label>
      <Form.Control required type="text" placeholder="Enter Upload RC Proof Document" value={this.state.vrccardproof}
    onChange={this.onChangevuploadrccardproof}  />
    </Form.Group>
  </Col>
  <Col md={3} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload Tax Renewal Document</Form.Label>
      <Form.Control required type="text" placeholder="Enter Upload Tax Renewal Proof" value={this.state.vtaxrenewalproof}
    onChange={this.onChangevuploadtaxrenewalproof}  />
    </Form.Group>
  </Col>
</Row>



            </Card.Body>

          </Card>
         

         
          
          <div className="mt-3">
            <Button variant="primary" type="submit">Save </Button>
          
          </div>
        
        </Form>
        <div className="mt-3">
            <Button variant="primary" type="submit" onClick={this.onback}>Back</Button>
          
          </div>
      </Card.Body>
    </Card>
                
            </div>
        )
    }
}