import Carousel from 'react-bootstrap/Carousel';
import ph1 from '../../assests/men.jpg';
import ph2 from '../../assests/women.jpg';
import ph3 from '../../assests/collections.jpg';
import ph4 from '../../assests/accessories.jpg';
import { Link } from 'react-router-dom';

import "./indvidual.css";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={3000} className='caro-item'>
        <img
          className="d-block  caro-img"
          src={ph1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Be deponair. Be dashing.</h1>
          <button className='caro-btn'><Link to='/men'>Shop Men</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} className='caro-item'>
        <img
          className="d-block caro-img"
          src={ph2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>If you got it, Flaunt it.</h1>
          <button className='caro-btn'><Link to='/women'>Shop Women</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} className='caro-item'>
        <img
          className="d-block caro-img"
          src={ph3}
          alt="Third slide"
        />
        <Carousel.Caption className='caro-caption'>
          <h1>It's summer time</h1>
          <button className='caro-btn'><Link to='/collection'>Shop Collection</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} className='caro-item'>
        <img
          className="d-block  caro-img"
          src={ph4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Finish off your look right.</h1>
          <button className='caro-btn'><Link to='/accessories'>Shop Accessories</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;