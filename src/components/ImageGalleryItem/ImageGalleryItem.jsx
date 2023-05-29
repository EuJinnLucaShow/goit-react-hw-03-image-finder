import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryLi, ImageGalleryItemImg } from './ImageGalleryItem.styled'

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onItemClick(this.props.image);
  };

  render() {
    const { image } = this.props;

    return (
      <ImageGalleryLi onClick={this.handleClick}>
        <ImageGalleryItemImg src={image.webformatURL} alt="" />
      </ImageGalleryLi>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
