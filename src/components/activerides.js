import React,{Component} from "react"
import axios from 'axios';
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react'
// import moment from "moment-timezone";
// import Datetime from "react-datetime";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import DatePicker from 'react-datepicker'

import moment from "moment-timezone";
import { Height } from "@material-ui/icons";
 class Adduser extends Component{
    constructor(props) {
        super(props);
    
        // this.onChangeofirstname = this.onChangeofirstname.bind(this);
        // this.onChangeomiddlename= this.onChangeomiddlename.bind(this);
        // this.onChangeolastname = this.onChangeolastname.bind(this);
        // this.onChangeodateofbirth= this.onChangeodateofbirth.bind(this);
        // this.onChangeogender = this.onChangeogender.bind(this);
        // this.onChangeoemail = this.onChangeoemail.bind(this);
        // this.onChangeophonenumber= this.onChangeophonenumber.bind(this);
        // this.onChangeopermanentaddress = this.onChangeopermanentaddress.bind(this);
        // this.onChangeopcountry= this.onChangeopcountry.bind(this);
        // this.onChangeopstate = this.onChangeopstate.bind(this);
        // this.onChangeopcity = this.onChangeopcity.bind(this);
        // this.onChangeoppincode= this.onChangeoppincode.bind(this);
        // this.onChangeocurrentaddress = this.onChangeocurrentaddress.bind(this);
        // this.onChangeoccountry= this.onChangeoccountry.bind(this);
        // this.onChangeocstate = this.onChangeocstate.bind(this);
        // this.onChangeoccity = this.onChangeoccity.bind(this);
        // this.onChangeocpincode= this.onChangeocpincode.bind(this);
        // this.onChangeouploadaadharprooffront = this.onChangeouploadaadharprooffront.bind(this);
        // this.onChangeouploadaadharproofback= this.onChangeouploadaadharproofback.bind(this);
        // this.onChangeouploadpancard = this.onChangeouploadpancard.bind(this);
        // this.onChangevvehiclemodal = this.onChangevvehiclemodal.bind(this);
        // this.onChangevvehicletype= this.onChangevvehicletype.bind(this);
        // this.onChangevvehiclecapacity = this.onChangevvehiclecapacity.bind(this);
        // this.onChangevregistrationnumber= this.onChangevregistrationnumber.bind(this);
        // this.onChangevchassisnumber = this.onChangevchassisnumber.bind(this);
        // this.onChangevenginenumber = this.onChangevenginenumber.bind(this);
        // this.onChangevrccardnumber= this.onChangevrccardnumber.bind(this);
        // this.onChangevinsurencenumber = this.onChangevinsurencenumber.bind(this);
        // this.onChangevemmissiontest= this.onChangevemmissiontest.bind(this);
        // this.onChangevrccardrenewaldate = this.onChangevrccardrenewaldate.bind(this);
        // this.onChangevinsurencerenewaldate = this.onChangevinsurencerenewaldate.bind(this);
        // this.onChangevemmissiontestrenewaldate= this.onChangevemmissiontestrenewaldate.bind(this);
        // this.onChangevtaxrenewal = this.onChangevtaxrenewal.bind(this);
        // this.onChangevstatepermit= this.onChangevstatepermit.bind(this);
        // this.onChangevnationalpermit = this.onChangevnationalpermit.bind(this);
        // this.onChangevuploadstatepermitdocument = this.onChangevuploadstatepermitdocument.bind(this);
        // this.onChangevuploadnationalpermitdocument= this.onChangevuploadnationalpermitdocument.bind(this);
        // this.onChangevuploadinsurencedocument = this.onChangevuploadinsurencedocument.bind(this);
        // this.onChangevuploadvehiclepicture= this.onChangevuploadvehiclepicture.bind(this);
        // this.onChangevuploademmissiontestdocument = this.onChangevuploademmissiontestdocument.bind(this);
        // this.onChangevuploadrccardproof = this.onChangevuploadrccardproof.bind(this);
        // this.onChangevuploadtaxrenewalproof= this.onChangevuploadtaxrenewalproof.bind(this);
        // this.onChangeddrivername = this.onChangeddrivername.bind(this);
        // this.onChangeddriverid= this.onChangeddriverid.bind(this);
        // this.onChangedgender = this.onChangedgender.bind(this);
        // this.onChangedpermanentaddress = this.onChangedpermanentaddress.bind(this);
        // this.onChangedcurrentaddress= this.onChangedcurrentaddress.bind(this);
        // this.onChangeddateofbirth = this.onChangeddateofbirth.bind(this);
        // this.onChangedmobilenumber= this.onChangedmobilenumber.bind(this);
        // this.onChangedemergencycontactnumber = this.onChangedemergencycontactnumber.bind(this);
        // this.onChangedaadharcardnumber = this.onChangedaadharcardnumber.bind(this);
        // this.onChangedinsurencenumber= this.onChangedinsurencenumber.bind(this);
        // this.onChangeddrivinglicence = this.onChangeddrivinglicence.bind(this);
        // this.onChangedlanguageknown= this.onChangedlanguageknown.bind(this);
        // this.onChangedpoliceverificationcertificate = this.onChangedpoliceverificationcertificate.bind(this);
        // this.onChangeduploaddrivinglicenceproof = this.onChangeduploaddrivinglicenceproof.bind(this);
        // this.onChangeduploadpoliceverificationproof= this.onChangeduploadpoliceverificationproof.bind(this);
        // this.onChangeduploadinsurenceproof = this.onChangeduploadinsurenceproof.bind(this);
        // this.onChangeduploadfrontaadharproof= this.onChangeduploadfrontaadharproof.bind(this);
        // this.onChangeduploadbackaadharproof = this.onChangeduploadbackaadharproof.bind(this);
        // this.onChangebbankname = this.onChangebbankname.bind(this);
        // this.onChangebaccountnumber = this.onChangebaccountnumber.bind(this);
        // this.onChangebbranchcode = this.onChangebbranchcode.bind(this);
        // this.onChangebifsccode = this.onChangebifsccode.bind(this);
        // this.onChangebuploadpassbookproof = this.onChangebuploadpassbookproof.bind(this);


       

        // this.onSubmit = this.onSubmit.bind(this);
        this.state = {
           ofirstname:'',
           omiddlename:'',
           olastname:'',
           odateofbirth:'',
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
           oadharprooffront:'',
           oadharproofback:'',
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
           vrccardrenewaldate:'',
           vinsurancerenewaldate:'',
           vemmissiontestrenewaldate:'',
           vtaxrenewal:'',
           vstatepermit:'',
           vnationalpermit:'',
           vstatepermitdocument:'',
           vnationalpermitdocument:'',
           vinsurancedocument:'',
           vvehiclepicture:'',
           vemissiontestdocument:'',
           vrccardproof:'',
           vtaxrenewalproof:'',
           ddrivername:'',
           ddriverid:'',
           dgender:'',
           dpermanentaddress:'',
           dpresentaddress:'',
           ddateofbirth:'',
           dmobilenumber:'',
           demergencycontactnumber:'',
           dadharcardnumber:'',
           dinsurancenumber:'',
           ddrivinglicence:'',
           dlanguagesknown:'',
           dpoliceverificationcertificate:'',
           ddrivinglicenceproof:'',
           dpoliceverificationproof:'',
           dinsuranceproof:'',
           dfrontadharproof:'',
           dbackadharproof:'',
           bbankname:'',
           baccountnumber:'',
           bbranchcode:'',
           bifsccode:'',
           bpassbookphoto:'',


         
            customers:[]
            
            
          }
        }
        // componentDidMount() {
   
        //     axios.get('https://acabnodejs.herokuapp.com/enrollfleetowner/' + this.props.match.params.id)
        //   .then(response => {
        //     console.log(response.data.ofirstname)
        //     this.setState({ 
        //           id : response.data._id,
        //           ofirstname : response.data.ofirstname,
                
        //           omiddlename:response.data.omiddlename,
        //           olastname:response.data.olastname,
        //           odateofbirth:response.data.odateofbirth,
        //           ogender:response.data.ogender,
        //           oemail:response.data.oemail,
        //           ophonenumber:response.data.ophonenumber,
        //           opermanentaddress:response.data.opermanentaddress,
        //           opcountry:response.data.opcountry,
        //           opstate:response.data.opstate,
        //           opcity:response.data.opcity,
        //           opzipcode:response.data.opzipcode,
        //           ocurrentaddress:response.data.ocurrentaddress,
        //           occountry:response.data.occountry,
        //           ocstate:response.data.ocstate,

        //           occity:response.data.occity,
        //           oczipcode:response.data.oczipcode,
        //           oadharprooffront:response.data.oadharprooffront,
        //           oadharproofback:response.data.oadharproofback,
        //           opanproof:response.data.opanproof,
        //           vvehiclemodel:response.data.vehicledetails[0].vvehiclemodel,
        //           vvehicletype:response.data.vehicledetails[0].vvehicletype,
        //           vvehiclecapacity:response.data.vehicledetails[0].vvehiclecapacity,
        //           vregistrationnumber:response.data.vehicledetails[0].vregistrationnumber,
        //           vchassisnumber:response.data.vehicledetails[0].vchassisnumber,
        //           venginenumber:response.data.vehicledetails[0].venginenumber,
        //           vrccardnumber:response.data.vehicledetails[0].vrccardnumber,
        //           vinsurancenumber:response.data.vehicledetails[0].vinsurancenumber,
        //           vemmissiontest:response.data.vehicledetails[0].vemmissiontest,
        //           vrccardrenewaldate:response.data.vehicledetails[0].vrccardrenewaldate,
        //           vinsurancerenewaldate:response.data.vehicledetails[0].vinsurancerenewaldate,
        //           vemmissiontestrenewaldate:response.data.vehicledetails[0].vemmissiontestrenewaldate,
        //           vtaxrenewal:response.data.vehicledetails[0].vtaxrenewal,
        //           vstatepermit:response.data.vehicledetails[0].vstatepermit,
        //           vnationalpermit:response.data.vehicledetails[0].vnationalpermit,

        //           vstatepermitdocument:response.data.vehicledetails[0].vstatepermitdocument,
        //           vnationalpermitdocument:response.data.vehicledetails[0].vnationalpermitdocument,
        //           vinsurancedocument:response.data.vehicledetails[0].vinsurancedocument,
        //           vvehiclepicture:response.data.vehicledetails[0].vvehiclepicture,
        //           vemissiontestdocument:response.data.vehicledetails[0].vemissiontestdocument,
        //           vrccardproof:response.data.vehicledetails[0].vrccardproof,
        //           vtaxrenewalproof:response.data.vehicledetails[0].vtaxrenewalproof,

        //           ddrivername:response.data.driverdetails[0].ddrivername,
        //           ddriverid:response.data.driverdetails[0].ddriverid,
        //           dgender:response.data.driverdetails[0].dgender,
        //           dpermanentaddress:response.data.driverdetails[0].dpermanentaddress,
        //           dpresentaddress:response.data.driverdetails[0].dpresentaddress,
        //           ddateofbirth:response.data.driverdetails[0].ddateofbirth,
        //           dmobilenumber:response.data.driverdetails[0].dmobilenumber,
        //           demergencycontactnumber:response.data.driverdetails[0].demergencycontactnumber,
        //           dadharcardnumber:response.data.driverdetails[0].dadharcardnumber,
        //           dinsurancenumber:response.data.driverdetails[0].dinsurancenumber,
        //           ddrivinglicence:response.data.driverdetails[0].ddrivinglicence,
        //           dlanguagesknown:response.data.driverdetails[0].dlanguagesknown,
        //           dpoliceverificationcertificate:response.data.driverdetails[0].dpoliceverificationcertificate,
        //           ddrivinglicenceproof:response.data.driverdetails[0].ddrivinglicenceproof,
        //           dpoliceverificationproof:response.data.driverdetails[0].dpoliceverificationproof,
        //           dinsuranceproof:response.data.driverdetails[0].dinsuranceproof,
        //           dfrontadharproof:response.data.driverdetails[0].dfrontadharproof,
        //           dbackadharproof:response.data.driverdetails[0].dbackadharproof,
        //           bbankname:response.data.bankdetails.bbankname,
        //           baccountnumber:response.data.bankdetails.baccountnumber,
        //           bbranchcode:response.data.bankdetails.bbranchcode,
        //           bifsccode:response.data.bankdetails.bifsccode,
        //           bpassbookphoto:response.data.bankdetails.bpassbookphoto



                
      
            
        //       })
        //     })
      
        
          
        //   .catch((error) => {
        //     console.log(error);
        //   })
          
        // }
        // onChangeofirstname(e) {
        //     this.setState({
        //       ofirstname: e.target.value
        //     })
        //   }
        //   onChangeomiddlename(e) {
        //     this.setState({
        //       omiddlename: e.target.value
        //     })
        //   }
        //   onChangeolastname(e) {
        //     this.setState({
        //       olastname: e.target.value
        //     })
        //   }
        //   onChangeodateofbirth(date) {
        //     this.setState({
        //       odateofbirth: date
        //     })
        //   }
        //   onChangeogender(e) {
        //     this.setState({
        //       ogender: e.target.value
        //     })
        //   }
        //   onChangeoemail(e) {
        //     this.setState({
        //       oemailid: e.target.value
        //     })
        //   }
        //   onChangeophonenumber(e) {
        //     this.setState({
        //       ophonenumber: e.target.value
        //     })
        //   }
        //   onChangeopermanentaddress(e) {
        //     this.setState({
        //       opermanentaddress: e.target.value
        //     })
        //   }
        //   onChangeopcountry(e) {
        //     this.setState({
        //       opcountry: e.target.value
        //     })
        //   }
        //   onChangeopstate(e) {
        //     this.setState({
        //       opstate: e.target.value
        //     })
        //   }
        //   onChangeopcity(e) {
        //     this.setState({
        //       opcity: e.target.value
        //     })
        //   }
        //   onChangeoppincode(e) {
        //     this.setState({
        //       oppincode: e.target.value
        //     })
        //   }
        //   onChangeocurrentaddress(e) {
        //     this.setState({
        //       ocurrentaddress: e.target.value
        //     })
        //   }
        //   onChangeoccountry(e) {
        //     this.setState({
        //       occountry: e.target.value
        //     })
        //   }
        //   onChangeocstate(e) {
        //     this.setState({
        //       ocstate: e.target.value
        //     })
        //   }
        //   onChangeoccity(e) {
        //     this.setState({
        //       occity: e.target.value
        //     })
        //   }
        //   onChangeocpincode(e) {
        //     this.setState({
        //       ocpincode: e.target.value
        //     })
        //   }
        //   onChangeouploadaadharprooffront(e) {
        //     this.setState({
        //       ouploadfrontaadharproof: e.target.value
        //     })
        //   }
        //   onChangeouploadaadharproofback(e) {
        //     this.setState({
        //       ouploadbackaadharproof: e.target.value
        //     })
        //   }
        //   onChangeouploadpancard(e) {
        //     this.setState({
        //       ouploadpancard: e.target.value
        //     })
        //   }
        //   onChangevvehiclemodal(e) {
        //     this.setState({
        //       vvehiclemodal: e.target.value
        //     })
        //   }
        //   onChangevvehicletype(e) {
        //     this.setState({
        //       vvehicletype: e.target.value
        //     })
        //   }
        //   onChangevvehiclecapacity(e) {
        //     this.setState({
        //       vvehiclecapacity: e.target.value
        //     })
        //   }
        //   onChangevregistrationnumber(e) {
        //     this.setState({
        //       vregistrationnumber: e.target.value
        //     })
        //   }
        //   onChangevchassisnumber(e) {
        //     this.setState({
        //       vchassisnumber: e.target.value
        //     })
        //   }
        //   onChangevenginenumber(e) {
        //     this.setState({
        //       venginenumber: e.target.value
        //     })
        //   }
        //   onChangevrccardnumber(e) {
        //     this.setState({
        //       vrccardnumber: e.target.value
        //     })
        //   }
        //   onChangevinsurencenumber(e) {
        //     this.setState({
        //       vinsurencenumber: e.target.value
        //     })
        //   }
        //   onChangevemmissiontest(e) {
        //     this.setState({
        //       vemmissiontest: e.target.value
        //     })
        //   }
        //   onChangevrccardrenewaldate(date) {
        //     this.setState({
        //       vrccardrenewaldata: date
        //     })
        //   }
        //   onChangevinsurencerenewaldate(date) {
        //     this.setState({
        //       vinsurencerenewaldate: date
        //     })
        //   }
        //   onChangevemmissiontestrenewaldate(date) {
        //     this.setState({
        //       vemmissiontestrenewaldate: date
        //     })
        //   }
        //   onChangevtaxrenewal(e) {
        //     this.setState({
        //       vtaxrenewal: e.target.value
        //     })
        //   }
        //   onChangevstatepermit(e) {
        //     this.setState({
        //       vstatepermit: e.target.value
        //     })
        //   }
        //   onChangevnationalpermit(e) {
        //     this.setState({
        //       vnationalpermit: e.target.value
        //     })
        //   }
        //   onChangevuploadstatepermitdocument(e) {
        //     this.setState({
        //       vuploadstatepermitdocument: e.target.value
        //     })
        //   }
        //   onChangevuploadnationalpermitdocument(e) {
        //     this.setState({
        //       vuploadnationalpermitdocument: e.target.value
        //     })
        //   }
        //   onChangevuploadinsurencedocument(e) {
        //     this.setState({
        //       vuploadinsurencedocument: e.target.value
        //     })
        //   }
        //   onChangevuploadvehiclepicture(e) {
        //     this.setState({
        //       vuploadvehiclepicture: e.target.value
        //     })
        //   }
        //   onChangevuploademmissiontestdocument(e) {
        //     this.setState({
        //       vuploademmissiontestdocument: e.target.value
        //     })
        //   }
        //   onChangevuploadrccardproof(e) {
        //     this.setState({
        //       vuploadrccardproof: e.target.value
        //     })
        //   }
        //   onChangevuploadtaxrenewalproof(e) {
        //     this.setState({
        //       vuploadtaxrenewalproof: e.target.value
        //     })
        //   }
        //   onChangeddrivername(e) {
        //     this.setState({
        //       ddrivername: e.target.value
        //     })
        //   }
        //   onChangeddriverid(e) {
        //     this.setState({
        //      ddriverid : e.target.value
        //     })
        //   }
        //   onChangedgender(e) {
        //     this.setState({
        //       dgender: e.target.value
        //     })
        //   }
        //   onChangedpermanentaddress(e) {
        //     this.setState({
        //       dpermanentaddress: e.target.value
        //     })
        //   }
        //   onChangedcurrentaddress(e) {
        //     this.setState({
        //       dcurrentaddress: e.target.value
        //     })
        //   }
        //   onChangeddateofbirth(date) {
        //     this.setState({
        //       ddateofbirth: date
        //     })
        //   }
        //   onChangedmobilenumber(e) {
        //     this.setState({
        //       dmobilenumber: e.target.value
        //     })
        //   }
        //   onChangedemergencycontactnumber(e) {
        //     this.setState({
        //       demergencycontactnumber: e.target.value
        //     })
        //   }
        //   onChangedaadharcardnumber(e) {
        //     this.setState({
        //       daadharcardnumber: e.target.value
        //     })
        //   }
        //   onChangedinsurencenumber(e) {
        //     this.setState({
        //       dinsurencenumber: e.target.value
        //     })
        //   }
        //   onChangeddrivinglicence(e) {
        //     this.setState({
        //       ddrivinglicence: e.target.value
        //     })
        //   }
        //   onChangedlanguageknown(e) {
        //     this.setState({
        //       dlanguageknown: e.target.value
        //     })
        //   }
        //   onChangedpoliceverificationcertificate(e) {
        //     this.setState({
        //       dpoliceverificationcertificate: e.target.value
        //     })
        //   }
        //   onChangeduploaddrivinglicenceproof(e) {
        //     this.setState({
        //       duploaddrivinglicenceproof: e.target.value
        //     })
        //   }
        //   onChangeduploadpoliceverificationproof(e) {
        //     this.setState({
        //       duploadpoliceverificationproof: e.target.value
        //     })
        //   }
        //   onChangeduploadinsurenceproof(e) {
        //     this.setState({
        //       duploadinsurenceproof: e.target.value
        //     })
        //   }
        //   onChangeduploadfrontaadharproof(e) {
        //     this.setState({
        //       duploadfrontaadharproof: e.target.value
        //     })
        //   }
        //   onChangeduploadbackaadharproof(e) {
        //     this.setState({
        //       duploadbackaadharproof: e.target.value
        //     })
        //   }
        //   onChangebbankname(e) {
        //     this.setState({
        //       bbankname: e.target.value
        //     })
        //   }
        //   onChangebaccountnumber(e) {
        //     this.setState({
        //       baccountnumber: e.target.value
        //     })
        //   }
        //   onChangebbranchcode(e) {
        //     this.setState({
        //       bbranchcode: e.target.value
        //     })
        //   }
        //   onChangebifsccode(e) {
        //     this.setState({
        //       bifsccode: e.target.value
        //     })
        //   }
        //   onChangebuploadpassbookproof(e) {
        //     this.setState({
        //       buploadpassbookproof: e.target.value
        //     })
        //   }


          onback(){
            window.location='/#/components/buttons'
            }
     
        //   onSubmit(e) {
        //     e.preventDefault();
        
        //     const trainer = {
        //       ofirstname: this.state.ofirstname,
        //       omiddlename: this.state.omiddlename,
        //       olastname:this.state.olastname,
        //       odateofbirth:this.state.odateofbirth,
        //       ogender:this.state.ogender,
        //       oemail:this.state.oemailid,
        //       ophonenumber:this.state.ophonenumber,
        //       opermanentaddress:this.state.opermanentaddress,
        //       opcountry:this.state.opcountry,
        //       opstate:this.state.opstate,
        //       opcity:this.state.opcity,
        //       oppincode:this.state.oppincode,
        //       ocurrentaddress:this.state.ocurrentaddress,
        //       occountry:this.state.occountry,
        //       ocstate:this.state.ocstate,
        //       occity:this.state.occity,
        //       ocpincode:this.state.ocpincode,
        //       ouploadbackaadharproof:this.state.ouploadbackaadharproof,
        //       ouploadfrontaadharproof:this.state.ouploadfrontaadharproof,
        //       ouploadpancard:this.state.ouploadpancard,
        //       vvehiclemodal:this.state.vvehiclemodal,
        //       vvehicletype:this.state.vvehicletype,
        //       vvehiclecapacity:this.state.vvehiclecapacity,
        //       vregistrationnumber:this.state.vregistrationnumber,
        //       vchassisnumber:this.state.vchassisnumber,
        //       venginenumber:this.state.venginenumber,
        //       vrccardnumber:this.state.vrccardnumber,
        //       vinsurencenumber:this.state.vinsurencenumber,
        //       vemmissiontest:this.state.vemmissiontest,
        //       vrccardrenewaldate:this.state.vrccardrenewaldata,
        //       vinsurencerenewaldate:this.state.vinsurencerenewaldate,
        //       vemmissiontestrenewaldate:this.state.vemmissiontestrenewaldate,
        //       vtaxrenewal:this.state.vtaxrenewal,
        //       vstatepermit:this.state.vstatepermit,
        //       vnationalpermit:this.state.vnationalpermit,
        //       vuploadstatepermitdocument:this.state.vuploadstatepermitdocument,
        //       vuploadnationalpermitdocument:this.state.vuploadnationalpermitdocument,
        //       vuploadinsurencedocument:this.state.vuploadinsurencedocument,
        //       vuploadvehiclepicture:this.state.vuploadvehiclepicture,
        //       vuploademmissiontestdocument:this.state.vuploademmissiontestdocument,
        //       vuploadrccardproof:this.state.vuploadrccardproof,
        //       vuploadtaxrenewalproof:this.state.vuploadtaxrenewalproof,
        //       ddrivername:this.state.ddrivername,
        //       ddriverid:this.state.ddriverid,
        //       dgender:this.state.dgender,
        //       dpermanentaddress:this.state.dpermanentaddress,
        //       dcurrentaddress:this.state.dcurrentaddress,
        //       ddateofbirth:this.state.ddateofbirth,
        //       dmobilenumber:this.state.dmobilenumber,
        //       demergencycontactnumber:this.state.demergencycontactnumber,
        //       daadharcardnumber:this.state.daadharcardnumber,
        //       dinsurencenumber:this.state.dinsurencenumber,
        //       ddrivinglicence:this.state.ddrivinglicence,
        //       dlanguageknown:this.state.dlanguageknown,
        //       dpoliceverificationcertificate:this.state.dpoliceverificationcertificate,
        //       duploaddrivinglicenceproof:this.state.duploaddrivinglicenceproof,
        //       duploadpoliceverificationproof:this.state.duploadpoliceverificationproof,
        //       duploadinsurenceproof:this.state.duploadinsurenceproof,
        //       duploadfrontaadharproof:this.state.duploadfrontaadharproof,
        //       duploadbackaadharproof:this.state.duploadbackaadharproof,
        //       bbankname:this.state.bbankname,
        //       baccountnumber:this.state.baccountnumber,
        //       bbranchcode:this.state.bbranchcode,
        //       bifsccode:this.state.bifsccode,
        //       buploadpassbookproof:this.state.buploadpassbookproof,


             

        
        //     }
        
        //     console.log(trainer);
        
        //     axios.post('https://acabnodejs.herokuapp.com/enrollfleetowner/add', trainer)
        //     .then(function(response){
        
        //       if(response.data ==='Enrollfleetowner added!'){
        //           window.location='/#/dashboard/overview'
        //       }
        //      }) 
        //   }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h3 className="mb-4">Request Details</h3>
        <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <label>User Name: <span style={{marginLeft:"15px"}}>{this.state.ofirstname}</span>     </label> 
                
              </Form.Group>
            </Col>
            </Row>
            
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <label>Provider Name: <span style={{marginLeft:"15px"}}>{this.state.olastname}</span>     </label> 
                
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <label>Total Distance: <span style={{marginLeft:"15px"}}>{this.state.odateofbirth}</span>     </label> 
                
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <label>Ride Start Time: <span style={{marginLeft:"15px"}}>{this.state.ogender}</span>     </label> 
                
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <label>Ride End Time: <span style={{marginLeft:"15px"}}>{this.state.oemail}</span>     </label> 
                
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <label>OTP: <span style={{marginLeft:"15px"}}>{this.state.ophonenumber}</span>     </label> 
                
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <label>Pickup Address: <span style={{marginLeft:"15px"}}>{this.state.opermanentaddress}</span>     </label> 
                
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <label>Drop Address: <span style={{marginLeft:"15px"}}>{this.state.opcountry}</span>     </label> 
                
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <label>Ride Status: <span style={{marginLeft:"15px"}}>{this.state.opstate}</span>     </label> 
                
              </Form.Group>
            </Col>
            </Row>
            <Map google={this.props.google} minZoom={5} style={{width:"80%"}} >
                     <Marker  name={'current location'} />
                    
                 </Map>
            
        </Card.Body>
        </Card> 
           </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey:("AIzaSyBJHefSLqm5q2_bAu_65Iw0v54HBwiIpNg")

})(Adduser)