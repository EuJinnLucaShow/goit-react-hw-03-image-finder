import React, { Component } from "react";
import axios from "axios";
import Searchbar from './Searchbar/Searchbar'
import Loader from "./Loader/Loader";

const KEY = '34187261-edb3bdfe414ee3b7adebeccc5';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const ImageList = ({ images }) => (
  <ul>
    {images.map(({ id, tags, webformatURL, largeImageURL }) => (
      <li key={id}>
      <a href={largeImageURL}>          
          <img src={webformatURL} alt={tags} />          
        </a> 
        </li>
    ))}
  </ul>
);

class App extends Component {
    state = {
      images: [],
      isLoading: false,
      error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    
    try {
      const response = await axios.get(`?key=${KEY}&q=yellow+flowers&image_type=photo&pretty=true`);
        this.setState({ images: response.data.hits })        
        } catch (error) {
      this.setState({ error });
    } finally {
      setTimeout(() =>
      this.setState({ isLoading: false }), 2000)
    }}  

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        <Searchbar />        
        { isLoading ? <Loader/> : images && images.length > 0 ? (
        <ImageList images={images} />
      ) : null}     
      </div>
    )}
  }

export default App