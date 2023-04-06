import React from 'react';
import CatPage from '../cat-page/CatPage';
import manImg from '../../assests/man.jpg'

const Men = ({products}) => {

  const data = ["All","Dressy","Casual","Pajamas","swimwear","underwear"];
  let menProducts = products.filter((product) => product.Category?.name === "men");

  console.log(menProducts);

  return (
    <div>
     
      <CatPage image={manImg} anwa3Lebs={data} products={menProducts} pagee='men'/>
    </div>
  )
}

export default Men;
