import React from 'react';
import { Vortex } from 'react-loader-spinner';
import { LoadDiv } from './Loader.styled'

const Loader = () => {
  return (
    <LoadDiv>
<Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
      </LoadDiv>
 );
};

export default Loader;
