import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled'

const Button = ({ onClick }) => {  
    return (
      <Btn type="button" onClick={onClick}>
        Load more
      </Btn>
    );  
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
