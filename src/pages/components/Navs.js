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
    
        
        this.onChangecoupontext = this.onChangecoupontext.bind(this);
        this.onChangepercentageorflat= this.onChangepercentageorflat.bind(this);
        this.onChangeenteramount = this.onChangeenteramount.bind(this);
        
        
        this.onChangeentercouponexpirydate = this.onChangeentercouponexpirydate.bind(this);
        this.onChangeentercount = this.onChangeentercount.bind(this);

       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          coupontext:'',
          percentageorflat:'',
          amount:'',
          couponexpirydate:'',
          count:'',
         
            trainer:[]
            
            
          }
        }
        
        onChangecoupontext(e) {
          this.setState({
            coupontext: e.target.value
          })
        }
          
          onChangepercentageorflat(e) {
            this.setState({
              percentageorflat: e.target.value
            })
          }
          onChangeenteramount(e) {
            this.setState({
              amount: e.target.value
            })
          }
          onChangeentercouponexpirydate(e) {
            this.setState({
              couponexpirydate: e.target.value
            })
          }
          onChangeentercount(e) {
            this.setState({
            count: e.target.value
            })
          }
         
      
          
        
          
          
          
          onback(){
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  

            const trainer = {
              coupontext: this.state.coupontext,
              percentageorflat: this.state.percentageorflat,
              amount:this.state.amount,
              couponexpirydate:this.state.couponexpirydate,
              count:this.state.count,
              
             

        
            }
        
            
        
            axios.post('https://acabnodejs.herokuapp.com/couponmanagement/add', trainer)
            .then(function(response){
        
              if(response.data ==='Couponmanagement added!'){
                alert("Couponmanagement Added")
                  window.location='/#/components/pagination'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Coupon Management</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Coupon Text</Form.Label>
                <Form.Control required type="text"  placeholder="" value={this.state.coupontext}
              onChange={this.onChangecoupontext}
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Percentage OR Flat</Form.Label>
                <Form.Control required type="text"  placeholder="" value={this.state.percentageorflat}
              onChange={this.onChangepercentageorflat}
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Amount</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.amount}
              onChange={this.onChangeenteramount}
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Coupon Experiy Date</Form.Label>
                <Form.Control required type="text"  placeholder="" value={this.state.couponexpirydate }
              onChange={this.onChangeentercouponexpirydate} />
              </Form.Group>
            </Col>
            
            
            
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Count</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.count}
              onChange={this.onChangeentercount} max="100" />
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={3} className="mb-3"
            >
              <div className="mt-3">
            <Button variant="primary" type="submit">Save </Button>
          
          </div>
            </Col>
            
            <Col md={3} className="mb-3"
            > <div className="mt-3">
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