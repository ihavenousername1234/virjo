import './ProductsCTA.css';
// import { DownloadOutlined } from '@ant-design/icons';

import { Radio } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    
    const [size, setSize] = useState('large'); // default is 'middle'
    return (
        <div className='productCTA'>
            <h6>WANT TO KNOW OUR PRODUCT RANGE?</h6>
            <Link to="/products">
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                <Radio.Button className='button'>KNOW MORE</Radio.Button>
            </Radio.Group>
            </Link>
        </div>
    );
}
export default ContactUs;