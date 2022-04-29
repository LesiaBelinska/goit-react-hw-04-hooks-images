import { Component } from "react";

import { Searchbar } from "./Searchbar/Searchbar.jsx";
import { ImageGallery } from "./ImageGallery/ImageGallery.jsx";
import { Button } from "./Button/Button.jsx";
import { Loader } from "./Loader/Loader.jsx";

import { pixabayFetchImage } from "services/api.js";

import s from "./App.module.css";

export class App extends Component {

  state = {
    search: '',
    images: [],
    error: null,
    currentPage: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchImage();
    }
  }

  handleSearchFormSubmit = newSearch => {
    this.setState({ search: newSearch, images: [], error: null, currentPage: 1, isLoading: false });
  }

  fetchImage = () => {

    this.setState({ isLoading: true });

    pixabayFetchImage(this.state.search, this.state.currentPage)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
    })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.onLoadMoreButtonClick();
          this.setState({ isLoading: false });
        })
    
  };

  onLoadMoreButtonClick = () => {
     if (this.state.currentPage > 1) {
      const options = {
        top: null,
        behavior: 'smooth',
      };

      options.top = window.pageYOffset + document.documentElement.clientHeight;
      setTimeout(() => {
        window.scrollTo(options);
      }, 500);
    }
  }


  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {this.state.isLoading &&
          <Loader />}
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 11 &&
          <Button onClick={this.fetchImage} />}

      </div>
    )
  }
}