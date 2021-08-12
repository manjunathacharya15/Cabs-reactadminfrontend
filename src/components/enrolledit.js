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
        componentDidMount() {
   
            axios.get('https://acabnodejs.herokuapp.com/enrollfleetowner/' + this.props.match.params.id)
          .then(response => {
            console.log(response.data.ofirstname)
            this.setState({ 
                  id : response.data._id,
                  ofirstname : response.data.ofirstname,
                
                  omiddlename:response.data.omiddlename,
                  olastname:response.data.olastname,
                  odateofbirth:response.data.odateofbirth,
                  ogender:response.data.ogender,
                  oemail:response.data.oemail,
                  ophonenumber:response.data.ophonenumber,
                  opermanentaddress:response.data.opermanentaddress,
                  opcountry:response.data.opcountry,
                  opstate:response.data.opstate,
                  opcity:response.data.opcity,
                  opzipcode:response.data.opzipcode,
                  ocurrentaddress:response.data.ocurrentaddress,
                  occountry:response.data.occountry,
                  ocstate:response.data.ocstate,

                  occity:response.data.occity,
                  oczipcode:response.data.oczipcode,
                  oadharprooffront:response.data.oadharprooffront,
                  oadharproofback:response.data.oadharproofback,
                  opanproof:response.data.opanproof,
                  vvehiclemodel:response.data.vehicledetails[0].vvehiclemodel,
                  vvehicletype:response.data.vehicledetails[0].vvehicletype,
                  vvehiclecapacity:response.data.vehicledetails[0].vvehiclecapacity,
                  vregistrationnumber:response.data.vehicledetails[0].vregistrationnumber,
                  vchassisnumber:response.data.vehicledetails[0].vchassisnumber,
                  venginenumber:response.data.vehicledetails[0].venginenumber,
                  vrccardnumber:response.data.vehicledetails[0].vrccardnumber,
                  vinsurancenumber:response.data.vehicledetails[0].vinsurancenumber,
                  vemmissiontest:response.data.vehicledetails[0].vemmissiontest,
                  vrccardrenewaldate:response.data.vehicledetails[0].vrccardrenewaldate,
                  vinsurancerenewaldate:response.data.vehicledetails[0].vinsurancerenewaldate,
                  vemmissiontestrenewaldate:response.data.vehicledetails[0].vemmissiontestrenewaldate,
                  vtaxrenewal:response.data.vehicledetails[0].vtaxrenewal,
                  vstatepermit:response.data.vehicledetails[0].vstatepermit,
                  vnationalpermit:response.data.vehicledetails[0].vnationalpermit,

                  vstatepermitdocument:response.data.vehicledetails[0].vstatepermitdocument,
                  vnationalpermitdocument:response.data.vehicledetails[0].vnationalpermitdocument,
                  vinsurancedocument:response.data.vehicledetails[0].vinsurancedocument,
                  vvehiclepicture:response.data.vehicledetails[0].vvehiclepicture,
                  vemissiontestdocument:response.data.vehicledetails[0].vemissiontestdocument,
                  vrccardproof:response.data.vehicledetails[0].vrccardproof,
                  vtaxrenewalproof:response.data.vehicledetails[0].vtaxrenewalproof,

                  ddrivername:response.data.driverdetails[0].ddrivername,
                  ddriverid:response.data.driverdetails[0].ddriverid,
                  dgender:response.data.driverdetails[0].dgender,
                  dpermanentaddress:response.data.driverdetails[0].dpermanentaddress,
                  dpresentaddress:response.data.driverdetails[0].dpresentaddress,
                  ddateofbirth:response.data.driverdetails[0].ddateofbirth,
                  dmobilenumber:response.data.driverdetails[0].dmobilenumber,
                  demergencycontactnumber:response.data.driverdetails[0].demergencycontactnumber,
                  dadharcardnumber:response.data.driverdetails[0].dadharcardnumber,
                  dinsurancenumber:response.data.driverdetails[0].dinsurancenumber,
                  ddrivinglicence:response.data.driverdetails[0].ddrivinglicence,
                  dlanguagesknown:response.data.driverdetails[0].dlanguagesknown,
                  dpoliceverificationcertificate:response.data.driverdetails[0].dpoliceverificationcertificate,
                  ddrivinglicenceproof:response.data.driverdetails[0].ddrivinglicenceproof,
                  dpoliceverificationproof:response.data.driverdetails[0].dpoliceverificationproof,
                  dinsuranceproof:response.data.driverdetails[0].dinsuranceproof,
                  dfrontadharproof:response.data.driverdetails[0].dfrontadharproof,
                  dbackadharproof:response.data.driverdetails[0].dbackadharproof,
                  bbankname:response.data.bankdetails.bbankname,
                  baccountnumber:response.data.bankdetails.baccountnumber,
                  bbranchcode:response.data.bankdetails.bbranchcode,
                  bifsccode:response.data.bankdetails.bifsccode,
                  bpassbookphoto:response.data.bankdetails.bpassbookphoto



                
      
            
              })
            })
      
        
          
          .catch((error) => {
            console.log(error);
          })
          
        }
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
        <h3 className="mb-4">Onfleet Owner information</h3>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> First Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your firsttname" value={this.state.ofirstname}
                onChange={this.onChangeofirstname}
               />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Middle Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your  Middlename" value={this.state.omiddlename}
             />
              </Form.Group>
            </Col>
            
            <Col md={4} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.olastname}
             />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
   
          </Row>
          <Row>
            <Col md={3} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Date Of Birth</Form.Label>

                <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.odateofbirth}
             />
            
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Gender</Form.Label>
                <Form.Control required type="email" placeholder="Enter Your Email Id" value={this.state.ogender}
            />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Email ID</Form.Label>
                <Form.Control required type="email" placeholder="Enter Your Email Id" value={this.state.oemail}
            />
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
         
            <textarea style={{width:"50%" ,height:"50%"}} placeholder="Enter Your Permanemt Address"  value={this.state.opermanentaddress} />
           
            </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col md={3} className="mb-3">
              <Form.Group id="phone">
              <Form.Label>Country</Form.Label>
              <Form.Control required type="email" placeholder="Enter Your Email Id" value={this.state.opcountry}
            />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>State</Form.Label>
                <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.opstate}
             />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
              <Form.Label>City</Form.Label>
              <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.opcity}
             />
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
         
            <textarea style={{width:"50%" ,height:"50%"}} placeholder="Enter Your Current Address"  value={this.state.ocurrentaddress}/>
           
            </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col md={3} className="mb-3">
              <Form.Group id="phone">
              <Form.Label>Country</Form.Label>
              <Form.Control required type="text" placeholder="Enter Pin Code" value={this.state.occountry}
              onChange={this.onChangeocpincode} />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>State</Form.Label>
                <Form.Control required type="text" placeholder="Enter Pin Code" value={this.state.ocstate}
              onChange={this.onChangeocpincode} />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="phone">
              <Form.Label>City</Form.Label>
              <Form.Control required type="text" placeholder="Enter Pin Code" value={this.state.occity}
              onChange={this.onChangeocpincode} />
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
                <Form.Control required type="text" placeholder="" value={this.state.oadharprooffront}
              onChange={this.onChangeouploadaadharprooffront}  />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Upload Back Aadhar Proff</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.oadharproofback}
              onChange={this.onChangeouploadaadharproofback} />
              </Form.Group>
            </Col>
            
            <Col md={4} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Upload Pan Card</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.opanproof}
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
      <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.vvehicletype}
             />
    </Form.Group>
  </Col>
  
  <Col md={4} className="mb-3">
    <Form.Group id="gender">
      <Form.Label>Vehicle Capacity</Form.Label>
      <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.vvehiclecapacity}
             />
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
      <Form.Control required type="text" placeholder="Enter RC Card Number" value={this.state.vrccardproof}
    onChange={this.onChangevrccardnumber}  />
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Insurence Number</Form.Label>
      <Form.Control required type="text" placeholder="Enter Insurence Number" value={this.state.vinsurancenumber}
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
      <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.vrccardrenewaldate}
             />
      
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label> Insurence Renewal Date</Form.Label>
      <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.vinsurancerenewaldate}
             />
      
    </Form.Group>
  </Col>
  <Col md={4} className="mb-3">
    <Form.Group id="firstName">
      <Form.Label>Emmission Test Renewal Date</Form.Label>
      <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.vemmissiontestrenewaldate}
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
      <Form.Control required type="text" placeholder="Enter Upload Emmission Test Document" value={this.state.vemissiontestdocument}
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
                <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.dgender}
             />
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
                <Form.Control required type="text" placeholder="Enter Your Lastname" value={this.state.ddateofbirth}
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
                <Form.Control required type="text" placeholder="Enter Driving Licence Proof" value={this.state.ddrivinglicenceproof}
              onChange={this.onChangeduploaddrivinglicenceproof}  />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Upload Police Verification Proof</Form.Label>
                <Form.Control required type="text" placeholder="Enter Police Verification Proof" value={this.state.dpoliceverificationproof}
              onChange={this.onChangeduploadpoliceverificationproof}  />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Upload Insurence Proof</Form.Label>
                <Form.Control required type="text" placeholder="Enter Insurence Proof" value={this.state.dinsuranceproof}
              onChange={this.onChangeduploadinsurenceproof}  />
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Upload Front Aadhar Proof</Form.Label>
                <Form.Control required type="text" placeholder="Enter Aadhar Proof" value={this.state.dfrontadharproof}
              onChange={this.onChangeduploadfrontaadharproof}  />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>  Upload Back Aadhar Proof</Form.Label>
                <Form.Control required type="text" placeholder="Enter Aadhar Proof" value={this.state.dbackadharproof}
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
                <Form.Control required type="text" placeholder="Enter Pass Book" value={this.state.bpassbookphoto}
              onChange={this.onChangebuploadpassbookproof}  />
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