import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalDiv } from './Modal.styled'

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);    
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <Overlay onClick={this.handleClick}>
        <ModalDiv>
          <img src={image.largeImageURL} alt={ image.tags } />
        </ModalDiv>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
