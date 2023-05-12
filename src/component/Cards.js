import { Card, Col, Row } from 'antd';
import './Cards.css';
const Cards = () => (
  <div style={{padding:20}} >
    <Row gutter={24}>
      <Col span={12}  >
        <Card title="OUR VISION" bordered={true} hoverable={true}>
        Our vision is to be a leading global pharmaceutical company known for our commitment to improving patient outcomes through innovative research, development, and commercialization of high-quality products. 
        </Card>
      </Col>
      <Col span={12}  >
        <Card title="OUR MISSION" bordered={true}  hoverable={true}>
        Our mission is to improve global health by developing and providing innovative, high-quality pharmaceutical products that meet the needs of patients and healthcare providers. 
        </Card>
      </Col>
    </Row>
  </div>
);
export default Cards;