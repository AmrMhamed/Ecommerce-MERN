import React from 'react';
import { Fashion, FeatureProducts, NewArrivals, SignContainer} from '../../containers';
import { IndividualIntervalsExample } from '../../components';
const Home = ({products}) => {
  return (
    <div className='e-commerce-home'>
      <IndividualIntervalsExample />
      <FeatureProducts products={products}/>
      <Fashion />
      <SignContainer />
      <NewArrivals products={products}/>
    </div>
  )
}

export default Home;
