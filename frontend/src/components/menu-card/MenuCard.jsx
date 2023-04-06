import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({imageUrl , idd}) => {
  return (

      <div /* className="nav-item-onhover" */ id={idd}>

        <img src={imageUrl} alt="photo" />

        <div className="nav-item-pages">

            <Link to={`/${idd}`} className='shop-all'>Shop All {idd}</Link>

            <div className="nav-item-categories">
                <div className="nav-item-category-links">
                    <Link to="/men/dressy"><h4>Dressy</h4></Link>
                    <Link to="/men/dressy/jackets"><p>Jackets</p></Link>
                </div>
                <div className="nav-item-category-links">
                    <Link to="/men/casual"><h4>Casual</h4></Link>
                    <Link to="/men/casual/t-shirts"><p>T-shirts</p></Link>
                </div>
                <div className="nav-item-category-links">
                    <Link to="/men/pajamas"><h4>Pajamas</h4></Link>
                </div>
            </div>

        </div>

      </div>
  )
}

export default MenuCard;
