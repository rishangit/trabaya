import React from 'react';
import {UnderConstruction} from '../../common/primitives'
const HomeComponent = (props) => {
  return <div><UnderConstruction text={'Home Page'}/></div>;
};

export default React.memo(HomeComponent);
