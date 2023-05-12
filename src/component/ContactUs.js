import {Row, Col} from 'antd';
import './ContactUs.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import { faClock, faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => (
  <div >
    <Row >
      <Col span={12} className='left-col'>
          <p className='heading'>CONTACT US</p>
          <p className='subHeading'>Better yet, See us in person!</p>
          <p className='text'>We love our customers, so feel free to visit during business hours.</p>
          <p className='mail'><FontAwesomeIcon icon={faPhone} onClick={() => window.location = 'tel: +919407438538'}/> +91 94074 38538</p>
          <p className='mail'><FontAwesomeIcon icon={faEnvelope} onClick={() => window.location = 'mailto: info@virjohealthcare.com'}/> info@virjohealthcare.com</p>
          <p className='text'><FontAwesomeIcon icon={faMapMarkerAlt} /> Plot No. 84, Smart Industrial Park, Behind NATRAX, Pithampur, Dist, Dhar(MP), India (452001)</p>
          <p className='text'><FontAwesomeIcon icon={faClock} /> Visiting Hours: 9:00AM to 6:00PM</p>
      </Col>
      <Col span={12} className='right-col'>
        
      <iframe 
        title='location'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1710797066316!2d75.59525211495959!3d22.57270388518269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962519bcff1704f%3A0xe44f307f8480de10!2sVirjo%20Healthcare%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1682337225207!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        style={{border:"0"}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>

      </Col>
    </Row>
  </div>
);
export default ContactUs;