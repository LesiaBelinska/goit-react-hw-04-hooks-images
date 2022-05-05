import { useEffect, useState } from "react";

import { Searchbar } from "./Searchbar/Searchbar.jsx";
import { ImageGallery } from "./ImageGallery/ImageGallery.jsx";
import { Button } from "./Button/Button.jsx";
import { Loader } from "./Loader/Loader.jsx";

import { pixabayFetchImage } from "services/api.js";

import s from "./App.module.css";

export const App = () => {
  
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {

    if (!search) {
      return;
    }

    console.log('fetch')
    setIsLoading(true);
    pixabayFetchImage(search, currentPage)
      .then((data) => {
        const newImages = [...images, ...data.images];
        const hasMore = newImages.length < data.total;
        setImages(newImages);
        setHasMore(hasMore)
       
      })
      .catch(error => setError(error))
      .finally(() => {
        setIsLoading(false);
      })
    
  
  }, [search, currentPage]);


  const handleSearchFormSubmit = newSearch => {
    
    setSearch(newSearch);
    setImages([]);
    setError(null);
    setCurrentPage(1);
  };


  const onLoadMoreButtonClick = () => {
    setCurrentPage(prevState => prevState + 1);
    if (currentPage > 1) {
      const options = {
        top: null,
        behavior: 'smooth',
      };

      options.top = window.pageYOffset + document.documentElement.clientHeight;
      setTimeout(() => {
        window.scrollTo(options);
      }, 500);
    }
  };
    
  return (
    <div className={s.App}>
      <Searchbar onSubmit={handleSearchFormSubmit} />
      {error && <p className={s.Error}>No matches found! Try again!</p>}
      {isLoading &&
        <Loader />}
      <ImageGallery images={images} />
      {hasMore &&
        <Button onClick={onLoadMoreButtonClick} />}
    </div>
  )
};














// const fetchImage = () => {


  //   if (search.trim() === '') {
  //           alert('Enter search query')
  //           return;
  //       };

  //   this.setState({ isLoading: true });

  //   pixabayFetchImage(search, currentPage)
  //     .then(({ images, total }) => {
  //       const newImages = [...this.state.images, ...images];
  //       const hasMore = newImages.length < total;
  //       this.setState(prevState => ({
  //         images: newImages,
  //         currentPage: prevState.currentPage + 1,
  //         hasMore,
  //       }));
  //   })
  //     .catch(error => this.setState({ error }))
  //     .finally(() => {
  //       this.onLoadMoreButtonClick();
  //         this.setState({ isLoading: false });
  //       })
    
  // };