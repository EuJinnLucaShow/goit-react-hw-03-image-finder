import React from 'react';
import { Vortex } from 'react-loader-spinner';
import { LoadWrapper } from './Loader.styled'

const Loader = () => {
  return (
    <LoadWrapper>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </LoadWrapper>
  );
};

export default Loader;
