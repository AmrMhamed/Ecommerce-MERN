import React from 'react'
import CatPage from '../cat-page/CatPage';
import collImg from '../../assests/acesspage.jpg'

const Collection = ({products}) => {
  const data = ["All","Summer","Winter","Fall","Spring"];
  let collectionProducts = products.filter((product) => product.Category?.name === "collection");

  return (
    <div>
      <CatPage image={collImg} anwa3Lebs={data} products={collectionProducts} pagee='Collection'/>
    </div>
  )
}

export default Collection
