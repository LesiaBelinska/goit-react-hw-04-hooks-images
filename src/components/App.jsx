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
    hasMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchImage();
    }
  }

  handleSearchFormSubmit = newSearch => {
    this.setState({ search: newSearch, images: [], error: null, currentPage: 1});
  }

  fetchImage = () => {

    const { search, currentPage } = this.state;

    if (search.trim() === '') {
            alert('Enter search query')
            return;
        };

    this.setState({ isLoading: true });

    pixabayFetchImage(search, currentPage)
      .then(({ images, total }) => {
        const newImages = [...this.state.images, ...images];
        const hasMore = newImages.length < total;
        this.setState(prevState => ({
          images: newImages,
          currentPage: prevState.currentPage + 1,
          hasMore,
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

    const { error, isLoading, images, hasMore } = this.state;
    
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && <p className={s.Error}>No matches found! Try again!</p>}
        {isLoading &&
          <Loader />}
        <ImageGallery images={images} />
        {hasMore &&
          <Button onClick={this.fetchImage} />}

      </div>
    )
  }
}