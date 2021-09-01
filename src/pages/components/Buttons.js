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
    
        
        this.onChangevehiclename = this.onChangevehiclename.bind(this);
        this.onChangevehicletype= this.onChangevehicletype.bind(this);
        this.onChangevehicleicon = this.onChangevehicleicon.bind(this);
        this.onChangeseatingcapacity = this.onChangeseatingcapacity.bind(this);
        this.onChangepricinglogic= this.onChangepricinglogic.bind(this);
        this.onChangeinitailwaitingtime = this.onChangeinitailwaitingtime.bind(this);
        this.onChangeaddiditionalwaitingtime = this.onChangeaddiditionalwaitingtime.bind(this);
        this.onChangebaseprice= this.onChangebaseprice.bind(this);
        this.onChangefareperkm = this.onChangefareperkm.bind(this);
        this.onChangeridetimecharge = this.onChangeridetimecharge.bind(this);
        this.onChangewaitingfare= this.onChangewaitingfare.bind(this);
        this.onChange1hr15km = this.onChange1hr15km.bind(this);
        this.onChange2hr30km = this.onChange2hr30km.bind(this);
        this.onChange4hr40km = this.onChange4hr40km.bind(this);
        this.onChange8hr80km = this.onChange8hr80km.bind(this);
        // this.onChange180km = this.onChange180km.bind(this);
        this.onChangebasepriceperday1 = this.onChangebasepriceperday1.bind(this);
        this.onChangeafter180km= this.onChangeafter180km.bind(this);
        this.onChangedailyallowance = this.onChangedailyallowance.bind(this);
        this.onChangebookingfee= this.onChangebookingfee.bind(this);
        this.onChangetaxes = this.onChangetaxes.bind(this);
        // this.onChange250km = this.onChange250km.bind(this);
        this.onChangebasepriceday2= this.onChangebasepriceday2.bind(this);
        this.onChangeperafter250km= this.onChangeperafter250km.bind(this);
        this.onChangedailyallowance1= this.onChangedailyallowance1.bind(this);
        this.onChangebookingfee1= this.onChangebookingfee1.bind(this);
        this.onChangetaxes1= this.onChangetaxes1.bind(this);


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          vehiclename:'',
          vehicletype:'',
          file:null,
          seatingcapacity:'',
          pricinglogic:'',
          initialwaitingtime:'',
          additionalwaitingtime:'',
          baseprice:'',
          fareperkm:'',
          ridetimecharge:'',
          waitingfare:'',
          onehr15km:'',
          twohr30km:'',
          fourhr40km:'',
          eighthr80km:'',
          basepriceperday180:'',
          after180km:'',
          dailyallowance180:'',
          bookingfee180:'',
          taxes180:'',
          basepriceperday250:'',
          after250km:'',
          dailyallowance250:'',
          bookingfee250:'',
          taxes250:'',


          
         
            trainer:[]
            
            
          }
        }
        
        onChangevehiclename(e) {
          this.setState({
            vehiclename: e.target.value
          })
        }
          
          onChangevehicletype(e) {
            this.setState({
              vehicletype: e.target.value
            })
          }
          onChangevehicleicon(e) {
            this.setState({
              file: e.target.files[0]
            })
          }
          onChangeseatingcapacity(e) {
            this.setState({
              seatingcapacity: e.target.value
            })
          }
          onChangepricinglogic(e) {
            this.setState({
            pricinglogic: e.target.value
            })
          }
          onChangeinitailwaitingtime(e) {
            this.setState({
            initialwaitingtime: e.target.value
            })
          }
          onChangeaddiditionalwaitingtime(e) {
            this.setState({
            additionalwaitingtime: e.target.value
            })
          }
          onChangebaseprice(e) {
            this.setState({
            baseprice: e.target.value
            })
          }
          onChangefareperkm(e) {
            this.setState({
            fareperkm: e.target.value
            })
          }
          onChangeridetimecharge(e) {
            this.setState({
            ridetimecharge: e.target.value
            })
          }
          onChangewaitingfare(e) {
            this.setState({
            waitingfare: e.target.value
            })
          }
          onChange1hr15km(e) {
            this.setState({
            onehr15km: e.target.value
            })
          }
          onChange2hr30km(e) {
            this.setState({
            twohr30km: e.target.value
            })
          }
          onChange4hr40km(e) {
            this.setState({
            fourhr40km: e.target.value
            })
          }
          onChange8hr80km(e) {
            this.setState({
            eighthr80km: e.target.value
            })
          }
          onChangebasepriceperday1(e) {
            this.setState({
            basepriceperday180: e.target.value
            })
          }
          onChangeafter180km(e) {
            this.setState({
            after180km: e.target.value
            })
          }
          onChangedailyallowance(e) {
            this.setState({
            dailyallowance180: e.target.value
            })
          }
          onChangebookingfee(e) {
            this.setState({
            bookingfee180: e.target.value
            })
          }
          onChangetaxes(e) {
            this.setState({
            taxes180: e.target.value
            })
          }
          onChangebasepriceday2(e) {
            this.setState({
            basepriceperday250: e.target.value
            })
          }
          onChangeperafter250km(e) {
            this.setState({
            after250km: e.target.value
            })
          }
          onChangedailyallowance1(e) {
            this.setState({
            dailyallowance250: e.target.value
            })
          }
          onChangebookingfee1(e) {
            this.setState({
            bookingfee250: e.target.value
            })
          }
          onChangetaxes1(e) {
            this.setState({
            taxes250: e.target.value
            })
          }
      
          
        
          
          
          
          onback(){
            window.location='/#/components/modals'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const formData=new FormData();
            formData.append('vehiclename', this.state.vehiclename);
            formData.append(' vehicletype', this.state.vehicletype);
            formData.append('vehicleicon',this.state.file);
            formData.append(' seatingcapacity',this.state.seatingcapacity);
            formData.append('pricinglogic',this.state.pricinglogic);
            formData.append('initialwaitingtime', this.state.initialwaitingtime);
            formData.append('additionalwaitingtime', this.state.additionalwaitingtime);
            formData.append('baseprice',this.state.baseprice);
            formData.append('fareperkm',this.state.fareperkm);
            formData.append('ridetimecharge',this.state.ridetimecharge);
            formData.append('waitingfare', this.state.waitingfare);
            formData.append('onehr15km',this.state.onehr15km);
            formData.append('twohr30km',this.state.twohr30km);
            formData.append('fourhr40km',this.state.fourhr40km);
            formData.append('eighthr80km',this.state.eighthr80km);
            formData.append('basepriceperday180', this.state.basepriceperday180);
            formData.append(' after180km', this.state.after180km);
            formData.append('dailyallowance180',this.state.dailyallowance180);
            formData.append(' bookingfee180',this.state.bookingfee180);
            formData.append('taxes180',this.state.taxes180);
            formData.append('basepriceperday250', this.state.basepriceperday250);
            formData.append(' after250km', this.state.after250km);
            formData.append('dailyallowance250',this.state.dailyallowance250);
            formData.append(' bookingfee250',this.state.bookingfee250);
            formData.append('taxes250',this.state.taxes250);
            
            
            
            const config={
              headers:{
                'content-type':'multipart/form-data'
              }
            
              }
                    
                        
                    
                        axios.post('https://acabnodejs.herokuapp.com/vehicle/add', formData)
                        .then(function(response){
        
        
              if(response.data ==='Vehicle added!'){
                alert("Vehicle Added")
                  window.location='/#/components/modals'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Add Vechile </h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Vehicle Name</Form.Label>
                <Form.Control required type="text"  placeholder="" value={this.state.vehiclename} name="vehiclename"
              onChange={this.onChangevehiclename} />
              {/* <select class="form-control" id="calculator" name="calculator" onChange={this.onChangevehiclename} value={this.state.vehiclename}>
                                                    <option value="MIN">Per Minute Pricing</option>
                                                    <option value="HOUR">Per Hour Pricing</option>
                                                    <option value="DISTANCE">Distance Pricing</option>
                                                    <option value="DISTANCEMIN">Distance and Per Minute Pricing</option>
                                                    <option value="DISTANCEHOUR">Distance and Per Hour Pricing</option>
                                                </select> */}
              
             
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Vehicle Type</Form.Label>
                
               <select class="form-control" id="calculator" name="vehicletype" onChange={this.onChangevehicletype} value={this.state.vehicletype} >
                                                    <option value="Auto">Auto</option>
                                                    <option value="Bike">Bike</option>
                                                    <option value="Mini">Mini</option>
                                                    <option value="Mirco">Mirco</option>
                                                    <option value="Sedan">Sedan</option>
                                                    <option value="Suv">Suv</option>

                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Vehicle Icon</Form.Label>
                <Form.Control  type="file" placeholder="" value={this.state.vehicleicon} name="vehicleicon" 
              onChange={this.onChangevehicleicon}
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Seating Capacity</Form.Label>
                <select class="form-control" id="calculator"  name="seatingcapacity" onChange={this.onChangeseatingcapacity} value={this.state.seatingcapacity}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="6">6</option>
                                                    

                                                </select>
              </Form.Group>
            </Col>
            
            
            
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Pricing Logic</Form.Label>
               
              <select class="form-control" id="calculator" name="pricinglogic" onChange={this.onChangepricinglogic} value={this.state.pricinglogic}>
              <option value="per minute pricing">Per Minute Pricing</option>
                                                    <option value="Per Hour Pricing">Per Hour Pricing</option>
                                                    <option value="Distance Pricing">Distance Pricing</option>
                                                    <option value="Distance and Per Minute Pricing">Distance and Per Minute Pricing</option>
                                                    <option value="Distance and Per Hour Pricing">Distance and Per Hour Pricing</option>

                                                </select>
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Initial Waiting Time</Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.initialwaitingtime}
              onChange={this.onChangeinitailwaitingtime} name="initialwaitingtime" />
            
              
             
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Additional Waiting Time</Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.additionalwaitingtime}
              onChange={this.onChangeaddiditionalwaitingtime} name="additionalwaitingtime" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Base Price</Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.baseprice}
              onChange={this.onChangebaseprice} name="baseprice" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Fare Per Km</Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.fareperkm}
              onChange={this.onChangefareperkm} name="fareperkm" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Ride Time Charge</Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.ridetimecharge}
              onChange={this.onChangeridetimecharge} name="ridetimecharge" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Waiting Fare</Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.waitingfare}
              onChange={this.onChangewaitingfare} name="waitingfare" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Minimum Distance</Form.Label>
                
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Rental Plans</Form.Label>
                
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>1 Hour 15 KM </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.onehr15km}
              onChange={this.onChange1hr15km} name="onehr15km" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>2 Hour 30 KM </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.twohr30km}
              onChange={this.onChange2hr30km} name="twohr30km" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>4 Hour 40 KM </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.fourhr40km}
              onChange={this.onChange4hr40km} name="fourhr40km" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>8 Hour 80 KM </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.eighthr80km}
              onChange={this.onChange8hr80km} name="eighthr80km" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Outstation</Form.Label>
                
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Base Km 180 For 12 Hours </Form.Label>
                
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Base Price Per Day </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.basepriceperday180}
              onChange={this.onChangebasepriceperday1} name="basepriceperday180" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>After 180 KM  </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.after180km}
              onChange={this.onChangeafter180km} name="after180km" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Daily Allowance </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.dailyallowance180}
              onChange={this.onChangedailyallowance} name="dailyallowance" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Booking Fee </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.bookingfee180}
              onChange={this.onChangebookingfee} name="bookingfee180" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Taxes </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.taxes180}
              onChange={this.onChangetaxes} name="taxes180" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Base Km 250 For 24 Hours </Form.Label>
                
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Base Price Per Day </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.basepriceperday250}
              onChange={this.onChangebasepriceday2} name="basepriceday250" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>After 250 KM  </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.after250km}
              onChange={this.onChangeperafter250km} name="after250km" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Daily Allowance </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.dailyallowance250}
              onChange={this.onChangedailyallowance1} name="dailyallowance250" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Booking Fee </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.bookingfee250}
              onChange={this.onChangebookingfee1} name="bookingfee250" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Taxes </Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.taxes250}
              onChange={this.onChangetaxes1} name="taxes250" />
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col md={3} className="mb-3">
            <div className="mt-3">
            <Button variant="primary" type="submit">Save </Button>
          
          </div>
              </Col>
              <Col md={3} className="mb-3">
              <div className="mt-3">
            <Button variant="primary"  onClick={this.onback}>Back</Button>
          
          </div>
              </Col>
</Row>
          
         
        
        </Form>
        
      </Card.Body>
    </Card>
                
            </div>
        )
    }
}