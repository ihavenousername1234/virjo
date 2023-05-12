import { Carousel} from 'antd';
import './Banner.css';

// const contentStyle = {
//   height: '450px',
//   // color: '#ac5',
//   lineHeight: '100px',
//   textAlign: 'center',
//   background: '#364d79',
// };
const banner1 = 'QUALITY \n PHARMACEUTICAL \nFORMULATIONS';
const banner2 = 'SAFE AND \n EFFECTIVE \n MEDICATIONS';
const banner3 = 'CATERING TO ALL \n YOUR NEEDS';

// const Arrow = ({ type, style, className, onClick }) => (
//   <Icon type={type} style={style} className={className} onClick={onClick} />
// );
const Banner = () => (
  <Carousel autoplay> 
    <div className='banner1'>
      <div className='banner-box'>
        <h3 className='banner-text'>{banner1}</h3>
      </div>
    </div>
    <div className='banner2' >
      <div className='banner-box'>
        <h3 className='banner-text'>{banner2}</h3>
      </div>
    </div>
    <div className='banner3' >
      <div className='banner-box'>
        <h3 className='banner-text'>{banner3}</h3>
      </div>
    </div>
  </Carousel>
);
export default Banner;