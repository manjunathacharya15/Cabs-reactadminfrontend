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
    
        this.onChangeofirstname = this.onChangeofirstname.bind(this);
        this.onChangeomiddlename= this.onChangeomiddlename.bind(this);
        this.onChangeolastname = this.onChangeolastname.bind(this);
        this.onChangeoadharnumber = this.onChangeoadharnumber.bind(this);
        this.onChangeodateofbirth= this.onChangeodateofbirth.bind(this);
        this.onChangeogender = this.onChangeogender.bind(this);
        this.onChangeoemail = this.onChangeoemail.bind(this);
        this.onChangeophonenumber= this.onChangeophonenumber.bind(this);
        this.onChangeopermanentaddress = this.onChangeopermanentaddress.bind(this);
        this.onChangeopcountry= this.onChangeopcountry.bind(this);
        this.onChangeopstate = this.onChangeopstate.bind(this);
        this.onChangeopcity = this.onChangeopcity.bind(this);
        this.onChangeoppincode= this.onChangeoppincode.bind(this);
        this.onChangeocurrentaddress = this.onChangeocurrentaddress.bind(this);
        this.onChangeoccountry= this.onChangeoccountry.bind(this);
        this.onChangeocstate = this.onChangeocstate.bind(this);
        this.onChangeoccity = this.onChangeoccity.bind(this);
        this.onChangeocpincode= this.onChangeocpincode.bind(this);
        this.onChangeouploadaadharprooffront = this.onChangeouploadaadharprooffront.bind(this);
        this.onChangeouploadaadharproofback= this.onChangeouploadaadharproofback.bind(this);
        this.onChangeouploadpancard = this.onChangeouploadpancard.bind(this);
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
        this.onChangeddrivername = this.onChangeddrivername.bind(this);
        this.onChangeddriverid= this.onChangeddriverid.bind(this);
        this.onChangedgender = this.onChangedgender.bind(this);
        this.onChangedpermanentaddress = this.onChangedpermanentaddress.bind(this);
        this.onChangedcurrentaddress= this.onChangedcurrentaddress.bind(this);
        this.onChangeddateofbirth = this.onChangeddateofbirth.bind(this);
        this.onChangedmobilenumber= this.onChangedmobilenumber.bind(this);
        this.onChangedemergencycontactnumber = this.onChangedemergencycontactnumber.bind(this);
        this.onChangedaadharcardnumber = this.onChangedaadharcardnumber.bind(this);
        this.onChangedinsurencenumber= this.onChangedinsurencenumber.bind(this);
        this.onChangeddrivinglicence = this.onChangeddrivinglicence.bind(this);
        this.onChangedlanguageknown= this.onChangedlanguageknown.bind(this);
        this.onChangedpoliceverificationcertificate = this.onChangedpoliceverificationcertificate.bind(this);
        this.onChangeduploaddrivinglicenceproof = this.onChangeduploaddrivinglicenceproof.bind(this);
        this.onChangeduploadpoliceverificationproof= this.onChangeduploadpoliceverificationproof.bind(this);
        this.onChangeduploadinsurenceproof = this.onChangeduploadinsurenceproof.bind(this);
        this.onChangeduploadfrontaadharproof= this.onChangeduploadfrontaadharproof.bind(this);
        this.onChangeduploadbackaadharproof = this.onChangeduploadbackaadharproof.bind(this);
        this.onChangebbankname = this.onChangebbankname.bind(this);
        this.onChangebaccountnumber = this.onChangebaccountnumber.bind(this);
        this.onChangebbranchcode = this.onChangebbranchcode.bind(this);
        this.onChangebifsccode = this.onChangebifsccode.bind(this);
        this.onChangebuploadpassbookproof = this.onChangebuploadpassbookproof.bind(this);


       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
           ofirstname:'',
           omiddlename:'',
           olastname:'',
           adharnumber:'',
           odateofbirth:new Date(),
           ogender:'',
           oemail:'',
           ophonenumber:'',
           opermanentaddress:'',
           opcountry:'',
           opstate:'',
           opcity:'',
           opzipcode:'',
           ocurrentaddress:'',
           occountry:'',
           ocstate:'',
           occity:'',
           oczipcode:'',
           file:null,
           file1:null,
           file2:null,
           opanproof:'',
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
           file3:null,
           file4:null,
          file5:null,
          file6:null,
           file7:null,
           file8:null,
           file9:null,
           ddrivername:'',
           ddriverid:'',
           dgender:'',
           dpermanentaddress:'',
           dpresentaddress:'',
           ddateofbirth:new Date(),
           dmobilenumber:'',
           demergencycontactnumber:'',
           dadharcardnumber:'',
           dinsurancenumber:'',
           ddrivinglicence:'',
           dlanguagesknown:'',
           dpoliceverificationcertificate:'',
           file10:null,
           file11:null,
           file12:null,
           file13:null,
           file14:null,
           bbankname:'',
           baccountnumber:'',
           bbranchcode:'',
           bifsccode:'',
           file15:null,



         
            trainer:[]
            
            
          }
        }
        onChangeofirstname(e) {
            this.setState({
              ofirstname: e.target.value
            })
          }
          onChangeomiddlename(e) {
            this.setState({
              omiddlename: e.target.value
            })
          }
          onChangeolastname(e) {
            this.setState({
              olastname: e.target.value
            })
          }
          onChangeoadharnumber(e) {
            this.setState({
              oadharnumber: e.target.value
            })
          }
          onChangeodateofbirth(date) {
            this.setState({
              odateofbirth: date
            })
          }
          onChangeogender(e) {
            this.setState({
              ogender: e.target.value
            })
          }
          onChangeoemail(e) {
            this.setState({
              oemail: e.target.value
            })
          }
          onChangeophonenumber(e) {
            this.setState({
              ophonenumber: e.target.value
            })
          }
          onChangeopermanentaddress(e) {
            this.setState({
              opermanentaddress: e.target.value
            })
          }
          onChangeopcountry(e) {
            this.setState({
              opcountry: e.target.value
            })
          }
          onChangeopstate(e) {
            this.setState({
              opstate: e.target.value
            })
          }
          onChangeopcity(e) {
            this.setState({
              opcity: e.target.value
            })
          }
          onChangeoppincode(e) {
            this.setState({
              opzipcode: e.target.value
            })
          }
          onChangeocurrentaddress(e) {
            this.setState({
              ocurrentaddress: e.target.value
            })
          }
          onChangeoccountry(e) {
            this.setState({
              occountry: e.target.value
            })
          }
          onChangeocstate(e) {
            this.setState({
              ocstate: e.target.value
            })
          }
          onChangeoccity(e) {
            this.setState({
              occity: e.target.value
            })
          }
          onChangeocpincode(e) {
            this.setState({
              oczipcode: e.target.value
            })
          }
          onChangeouploadaadharprooffront(e) {
            this.setState({
              file: e.target.files[0]
            })
          }
          onChangeouploadaadharproofback(e) {
            this.setState({
              file1: e.target.files[0]
            })
          }
          onChangeouploadpancard(e) {
            this.setState({
              file2: e.target.files[0]
            })
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
              file3: e.target.files[0]
            })
          }
          onChangevuploadnationalpermitdocument(e) {
            this.setState({
              file4: e.target.files[0]
            })
          }
          onChangevuploadinsurencedocument(e) {
            this.setState({
              file5: e.target.files[0]
            })
          }
          onChangevuploadvehiclepicture(e) {
            this.setState({
              file6: e.target.files[0]
            })
          }
          onChangevuploademmissiontestdocument(e) {
            this.setState({
              file7: e.target.files[0]
            })
          }
          onChangevuploadrccardproof(e) {
            this.setState({
              file8: e.target.files[0]
            })
          }
          onChangevuploadtaxrenewalproof(e) {
            this.setState({
              file9: e.target.files[0]
            })
          }
          onChangeddrivername(e) {
            this.setState({
              ddrivername: e.target.value
            })
          }
          onChangeddriverid(e) {
            this.setState({
             ddriverid : e.target.value
            })
          }
          onChangedgender(e) {
            this.setState({
              dgender: e.target.value
            })
          }
          onChangedpermanentaddress(e) {
            this.setState({
              dpermanentaddress: e.target.value
            })
          }
          onChangedcurrentaddress(e) {
            this.setState({
              dpresentaddress: e.target.value
            })
          }
          onChangeddateofbirth(date) {
            this.setState({
              ddateofbirth: date
            })
          }
          onChangedmobilenumber(e) {
            this.setState({
              dmobilenumber: e.target.value
            })
          }
          onChangedemergencycontactnumber(e) {
            this.setState({
              demergencycontactnumber: e.target.value
            })
          }
          onChangedaadharcardnumber(e) {
            this.setState({
              dadharcardnumber: e.target.value
            })
          }
          onChangedinsurencenumber(e) {
            this.setState({
              dinsurancenumber: e.target.value
            })
          }
          onChangeddrivinglicence(e) {
            this.setState({
              ddrivinglicence: e.target.value
            })
          }
          onChangedlanguageknown(e) {
            this.setState({
              dlanguagesknown: e.target.value
            })
          }
          onChangedpoliceverificationcertificate(e) {
            this.setState({
              dpoliceverificationcertificate: e.target.value
            })
          }
          onChangeduploaddrivinglicenceproof(e) {
            this.setState({
              file10: e.target.files[0]
            })
          }
          onChangeduploadpoliceverificationproof(e) {
            this.setState({
              file11: e.target.files[0]
            })
          }
          onChangeduploadinsurenceproof(e) {
            this.setState({
              file12: e.target.files[0]
            })
          }
          onChangeduploadfrontaadharproof(e) {
            this.setState({
              file13: e.target.files[0]
            })
          }
          onChangeduploadbackaadharproof(e) {
            this.setState({
              file14: e.target.files[0]
            })
          }
          onChangebbankname(e) {
            this.setState({
              bbankname: e.target.value
            })
          }
          onChangebaccountnumber(e) {
            this.setState({
              baccountnumber: e.target.value
            })
          }
          onChangebbranchcode(e) {
            this.setState({
              bbranchcode: e.target.value
            })
          }
          onChangebifsccode(e) {
            this.setState({
              bifsccode: e.target.value
            })
          }
          onChangebuploadpassbookproof(e) {
            this.setState({
              file15: e.target.files[0]
            })
          }


          onback(){
            window.location='/#/components/fleetowner'
            }
     
          onSubmit(e) {
            e.preventDefault();
            const formData=new FormData();
            formData.append( 'ofirstname' ,this.state.ofirstname);
    formData.append('omiddlename', this.state.omiddlename);
    formData.append( 'olastname',this.state.olastname);
    formData.append('odateofbirth',this.state.odateofbirth);
    formData.append('ogender',this.state.ogender);
    formData.append( 'oemail',this.state.oemail); 
    formData.append('ophonenumber',this.state.ophonenumber);
    formData.append( 'opermanentaddress',this.state.opermanentaddress,);
    formData.append('opcountry',this.state.opcountry,);
    formData.append( 'opstate',this.state.opstate);
    formData.append('opcity',this.state.opcity);
    formData.append('opzipcode',this.state.opzipcode);
    formData.append('ocurrentaddress',this.state.ocurrentaddress);
    formData.append('ocstate',this.state.ocstate);
    formData.append( 'occity',this.state.occity);
    formData.append('oczipcode',this.state.oczipcode);
    formData.append('images',this.state.file);
    formData.append('images',this.state.file1);
     formData.append('images',this.state.file2);
    formData.append('vvehiclemodel',this.state.vvehiclemodel);
    formData.append('vvehicletype',this.state.vvehicletype);
    formData.append(' vvehiclecapacity',this.state.vvehiclecapacity);
    formData.append('vregistrationnumber',this.state.vregistrationnumber);
    formData.append('vchassisnumber',this.state.vchassisnumber);
    formData.append('venginenumber',this.state.venginenumber);
    formData.append('vrccardnumber',this.state.vrccardnumber);
    formData.append('vinsurancenumber',this.state.vinsurancenumber);
    formData.append('vemmissiontest',this.state.vemmissiontest);
    formData.append('vrccardrenewaldate',this.state.vrccardrenewaldate);
    formData.append('vinsurancerenewaldate',this.state.vinsurancerenewaldate);
    formData.append( 'vemmissiontestrenewaldate',this.state.vemmissiontestrenewaldate);
    formData.append('vtaxrenewal',this.state.vtaxrenewal);
    formData.append('vstatepermit',this.state.vstatepermit);
    formData.append('vnationalpermit',this.state.vnationalpermit);
    formData.append('images',this.state.file3);
    formData.append('images',this.state.file4);
    formData.append( 'images',this.state.file5);
    formData.append('images',this.state.file6);
    formData.append('images',this.state.file7);
    formData.append('images',this.state.file8);
    formData.append('images',this.state.file9);
    formData.append('ddriverid',this.state.ddriverid);
    formData.append('dgender',this.state.dgender);
    formData.append('dpermanentaddress',this.state.dpermanentaddress);
    formData.append('ddateofbirth',this.state.ddateofbirth);
    formData.append('dmobilenumber',this.state.dmobilenumber);
    formData.append('demergencycontactnumber',this.state.demergencycontactnumber);
    formData.append('dadharcardnumber',this.state.dadharcardnumber);
    formData.append('dinsurancenumber',this.state.dinsurancenumber);
    formData.append(' ddrivinglicence',this.state.ddrivinglicence);
    formData.append('dlanguagesknown',this.state.dlanguagesknown);
    formData.append('dpoliceverificationcertificate',this.state.dpoliceverificationcertificate);
    formData.append('images',this.state.file10,);
    formData.append('images',this.state.file11);
    formData.append('images',this.state.file12,);
    formData.append('images',this.state.file13); 
    formData.append('images',this.state.file14);
    formData.append('bbankname',this.state.bbankname);
    formData.append('baccountnumber',this.state.baccountnumber);
    formData.append('bbranchcode',this.state.bbranchcode);
    formData.append('bifsccode',this.state.bifsccode);
    formData.append('images',this.state.file15);
    
    
    
    
    
    const config={
      headers:{
        'content-type':'multipart/form-data'
      }
    }

          
        
            axios.post('https://acabnodejs.herokuapp.com/enrollfleetowner/add', formData)
            .then(function(response){
        
              if(response.data ==='Enrollfleetowner added!'){
                alert("Enrollment added!")
                  window.location='/#/components/fleetowner'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h3 className="mb-4">Onfleet Owner information</h3>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={3} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> First Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your firsttname" value={this.state.ofirstname}
              onChange={this.onChangeofirstname}  />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Middle Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your  Middlename" value={this.state.omiddlename}
              onChange={this.onChangeomiddlename} />
              </Form.Group>
            </Col>
            
            <Col md={3} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.olastname}
              onChange={this.onChangeolastname} />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Aadhar Card Number</Form.Label>
                <Form.Control required type="text" placeholder="Enter Your aadharcardnumber" value={this.state.oadharnumber}
              onChange={this.onChangeoadharnumber} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
   
          </Row>
          <Row>
            <Col md={3} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Date Of Birth</Form.Label>
                <Col md={3} className="mb-3">
            <DatePicker
            
             selected={this.state.odateofbirth}
             onChange={this.onChangeodateofbirth}
             name="startDate"
        
            
            
             timeCaption="time"
             dateFormat="MMMM dd yyyy "
            />
        
            </Col>
            
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Gender</Form.Label>
                <select class="form-control" placeholder="select Country" id="calculator" name="calculator" onChange={this.onChangeogender} value={this.state.ogender}>
                                                    <option value="Male">MALE</option>
                                                    <option value="Female">FEMALE</option>
                                                    
                                                </select>
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Email ID</Form.Label>
                <Form.Control required type="email" placeholder="Enter Your Email Id" value={this.state.oemail}
              onChange={this.onChangeoemail} />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required type="number" placeholder="0123456789" value={this.state.ophonenumber}
              onChange={this.onChangeophonenumber} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col md={9} className="mb-3">
          <Form.Group id="phone">
          <Form.Label>Permanemt Adress</Form.Label>
          <br/>
         
            <textarea style={{width:"50%" ,height:"50%"}} placeholder="Enter Your Permanemt Address" onChange={this.onChangeopermanentaddress} value={this.state.opermanentaddress} />
           
            </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col md={3} className="mb-3">
              <Form.Group id="phone">
              <Form.Label>Country</Form.Label>
                <select class="form-control" placeholder="select Country" id="calculator" name="calculator" onChange={this.onChangeopcountry} value={this.state.opcountry}>
                                                    <option value="India">India</option>
                                                    <option value="India">India</option>
                                                    
                                                </select>
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>State</Form.Label>
                <select class="form-control" placeholder="Select State" id="calculator" name="calculator" onChange={this.onChangeopstate} value={this.state.opstate}>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    
                                                </select>
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
              <Form.Label>City</Form.Label>
              <select class="form-control" id="calculator" name="calculator" onChange={this.onChangeopcity} value={this.state.opcity}>
                                                    <option value="Bangalore">Bangalore</option>
                                                    <option value="Mangalore">Mangalore</option>
                                                    
                                                </select>
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.opzipcode}
              onChange={this.onChangeoppincode} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col md={9} className="mb-3">
          <Form.Group id="phone">
          <Form.Label>Cureent Adress</Form.Label>
          <br/>
         
            <textarea style={{width:"50%" ,height:"50%"}} placeholder="Enter Your Current Address" onChange={this.onChangeocurrentaddress} value={this.state.ocurrentaddress}/>
           
            </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col md={3} className="mb-3">
              <Form.Group id="phone">
              <Form.Label>Country</Form.Label>
                <select class="form-control" id="calculator" name="calculator" onChange={this.onChangeoccountry} value={this.state.occountry}>
                                                    <option value="India">India</option>
                                                    <option value="India">India</option>
                                                    
                                                </select>
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>State</Form.Label>
                <select class="form-control" id="calculator" name="calculator" onChange={this.onChangeocstate} value={this.state.ocstate}>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    
                                                </select>
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
              <Form.Label>City</Form.Label>
                <select class="form-control" id="calculator" name="calculator" onChange={this.onChangeoccity} value={this.state.occity}>
                                                    <option value="Bangalore">Bangalore</option>
                                                    <option value="Mangalore">Mangalore</option>
                                                    
                                                </select>
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control required type="number" placeholder="Enter Pin Code" value={this.state.oczipcode}
              onChange={this.onChangeocpincode} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Upload Front Aadhar Proof</Form.Label>
                <Form.Control required type="file" placeholder="" name="images"
              onChange={this.onChangeouploadaadharprooffront}  />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Upload Back Aadhar Proff</Form.Label>
                <Form.Control required type="file" placeholder="" name="images"
              onChange={this.onChangeouploadaadharproofback} />
              </Form.Group>
            </Col>
            
            <Col md={4} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Upload Pan Card</Form.Label>
                <Form.Control required type="file" placeholder="" name="images"
              onChange={this.onChangeouploadpancard} />
              </Form.Group>
            </Col>
          </Row>


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
      <Form.Control required type="file"  name="images"
    onChange={this.onChangevuploadstatepermitdocument}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload National Permit Document</Form.Label>
      <Form.Control required type="file" name="images"
    onChange={this.onChangevuploadnationalpermitdocument}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload Insurence Document</Form.Label>
      <Form.Control required type="file" name="images"
    onChange={this.onChangevuploadinsurencedocument}  />
    </Form.Group>
  </Col>
</Row>
<Row>
<Col md={3} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload Vehicle Picture</Form.Label>
      <Form.Control required type="file" name="images"
    onChange={this.onChangevuploadvehiclepicture}  />
    </Form.Group>
  </Col>
  <Col md={3} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload Emmission Test Document</Form.Label>
      <Form.Control required type="file"  name="images"
    onChange={this.onChangevuploademmissiontestdocument}  />
    </Form.Group>
  </Col>
  <Col md={3} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload RC Proof Document</Form.Label>
      <Form.Control required type="file" name="images"
    onChange={this.onChangevuploadrccardproof}  />
    </Form.Group>
  </Col>
  <Col md={3} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Upload Tax Renewal Document</Form.Label>
      <Form.Control required type="file" name="images"
    onChange={this.onChangevuploadtaxrenewalproof}  />
    </Form.Group>
  </Col>
</Row>



            </Card.Body>

          </Card>
          <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h3 className="mb-4">Driver information</h3>
        <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Driver Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Driver Name" value={this.state.ddrivername}
              onChange={this.onChangeddrivername}  />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Driver ID</Form.Label>
                <Form.Control required type="text" placeholder="Enter Driver ID" value={this.state.ddriverid}
              onChange={this.onChangeddriverid}  />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Gender</Form.Label>
                <select class="form-control" id="calculator" name="calculator" onChange={this.onChangedgender} value={this.state.dgender}>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Permanemt Address</Form.Label>
                <br/>
                <textarea style={{width:"50%"}} onChange={this.onChangedpermanentaddress} value={this.state.dpermanentaddress}/>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Current Adress</Form.Label>
                <br/>
                <textarea style={{width:"50%"}} onChange={this.onChangedcurrentaddress} value={this.state.dpresentaddress}/>
              </Form.Group>
            </Col>
            
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Date Of Birth</Form.Label>
                <br/>
                <DatePicker
            
             selected={this.state.ddateofbirth}
             onChange={this.onChangeddateofbirth}
             name="startDate"
        
            
             
             timeCaption="time"
             dateFormat="MMMM dd yyyy "
            />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Mobile Number</Form.Label>
                <Form.Control required type="number" max="0-9" placeholder="Enter Mobile Number" value={this.state.dmobilenumber}
              onChange={this.onChangedmobilenumber}  />
              </Form.Group>
            </Col> 
             <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Emergency Contact Number</Form.Label>
                <Form.Control required type="number" maxLength="0-9" placeholder="Enter Emergency Contact Number" value={this.state.demergencycontactnumber}
              onChange={this.onChangedemergencycontactnumber}  />
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Aadhar Card Number</Form.Label>
                <Form.Control required type="number" placeholder="Enter Aadhar Card Number" value={this.state.dadharcardnumber}
              onChange={this.onChangedaadharcardnumber}  />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Insurence Number</Form.Label>
                <Form.Control required type="text" placeholder="Enter Insurence" value={this.state.dinsurancenumber}
              onChange={this.onChangedinsurencenumber}  />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Driving Licence</Form.Label>
                <Form.Control required type="text" placeholder="Enter Driving Licence" value={this.state.ddrivinglicence}
              onChange={this.onChangeddrivinglicence}  />
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Police Verification Certificate</Form.Label>
                <Form.Control required type="text" placeholder="Enter Police Verification Certificate" value={this.state.dpoliceverificationcertificate}
              onChange={this.onChangedpoliceverificationcertificate}  />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Language Known</Form.Label>
                <Form.Control required type="text" placeholder="Enter Language Known" value={this.state.dlanguagesknown}
              onChange={this.onChangedlanguageknown}  />
              </Form.Group>
            </Col>
             
            </Row>
             <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Upload Driving Licence Proof</Form.Label>
                <Form.Control required type="file" name="images"
              onChange={this.onChangeduploaddrivinglicenceproof}  />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Upload Police Verification Proof</Form.Label>
                <Form.Control required type="file" name="images"
              onChange={this.onChangeduploadpoliceverificationproof}  />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Upload Insurence Proof</Form.Label>
                <Form.Control required type="file" name="images"
              onChange={this.onChangeduploadinsurenceproof}  />
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Upload Front Aadhar Proof</Form.Label>
                <Form.Control required type="file" name="images"
              onChange={this.onChangeduploadfrontaadharproof}  />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>  Upload Back Aadhar Proof</Form.Label>
                <Form.Control required type="file" name="images"
              onChange={this.onChangeduploadbackaadharproof}  />
              </Form.Group>
            </Col>
            
            </Row> 

        </Card.Body>
        </Card>
        <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h3 className="mb-4">Bank information</h3>
        <Row>
            <Col md={3} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Bank Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Bank Name" value={this.state.bbankname}
              onChange={this.onChangebbankname}  />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Account Number</Form.Label>
                <Form.Control required type="number" placeholder="Enter Account Number" value={this.state.baccountnumber}
              onChange={this.onChangebaccountnumber}  />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Branch Code</Form.Label>
                <Form.Control required type="text" placeholder="Enter Branch Code" value={this.state.bbranchcode}
              onChange={this.onChangebbranchcode}  />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> IFSC Code</Form.Label>
                <Form.Control required type="text" placeholder="Enter IFSC Code" value={this.state.bifsccode}
              onChange={this.onChangebifsccode}  />
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Upload Pass Book</Form.Label>
                <Form.Control required type="file" name="images"
              onChange={this.onChangebuploadpassbookproof}  />
              </Form.Group>
            </Col>
            </Row>
        </Card.Body>
        </Card>

         
        <Row>
            <Col md={3} className="mb-3"><div className="mt-3">
            <Button variant="primary" type="submit">Save </Button>
          
          </div> </Col>
            <Col md={3} className="mb-3"> <div className="mt-3">
            <Button variant="primary"  onClick={this.onback}>Back</Button>
          
          </div> </Col> </Row>
          
        
        </Form>
       
      </Card.Body>
    </Card>
                
            </div>
        )
    }
}