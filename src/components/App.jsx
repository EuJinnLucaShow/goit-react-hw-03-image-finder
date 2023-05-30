import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { AppDiv } from './App.syled'

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
    showModal: false,
    selectedImage: null,
    isLastPage: false,
  };

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    const API_KEY = '34187261-edb3bdfe414ee3b7adebeccc5';

    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
             
        const { hits, totalHits } = response.data;
  
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
          isLastPage: prevState.images.length + hits.length >= totalHits,
        }));
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleSearchSubmit = query => {
    this.setState({ query: query, page: 1, images: [], error: null })
  };

  handleImageClick = image => {
    this.setState({ selectedImage: image, showModal: true });
  };

  handleModalClose = () => {
    this.setState({ selectedImage: null, showModal: false });
  };

  render() {
    const { images, isLoading, error, showModal, selectedImage, isLastPage } = this.state;

    return (
      <AppDiv>
        <Searchbar onSubmit={this.handleSearchSubmit} />

        {error && <p>Error: {error}</p>}

        <ImageGallery images={images} onItemClick={this.handleImageClick} />

        {isLoading && <Loader />}       

        {!isLoading && images.length > 0 && !isLastPage && (
          <Button onClick={this.fetchImages} />
        )}

        {showModal && (
          <Modal image={selectedImage} onClose={this.handleModalClose} />
        )}
      </AppDiv>
    );
  }
}

export default App;
