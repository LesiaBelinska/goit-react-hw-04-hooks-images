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
  const [isVisible, setIsVisible] = useState(0);

  const handleSearchFormSubmit = newSearch => {
    setSearch(newSearch);
    setImages([]);
    setError(null);
    setCurrentPage(1);
  };
  
  useEffect(() => {

    if (!search) {
      return;
    }

    console.log('fetch')
    setIsLoading(true);
    pixabayFetchImage(search, currentPage)
      .then(images => {
        setImages(prevState => [...prevState, ...images]);
        setIsVisible(images.length);
      })
      .catch(error => setError(error))
      .finally(() => {
        setIsLoading(false);
      })
  }, [search, currentPage]);

  

  useEffect(() => {
    if (currentPage > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  });

  const onLoadMoreButtonClick = () => {
    setCurrentPage(prevState => prevState + 1);
  };
    
  
    
  return (
    <div className={s.App}>
      <Searchbar onSubmit={handleSearchFormSubmit} />
      {error && <p className={s.Error}>No matches found! Try again!</p>}
      {isLoading &&
        <Loader />}
      <ImageGallery images={images} />
      {isVisible > 0 &&
        <Button onClick={onLoadMoreButtonClick} />}
    </div>
  )
};







// with WARNING:

  // const [hasMore, setHasMore] = useState(false);


  // useEffect(() => {
    
  //   if (!search) {
  //     return;
  //   }

  //   console.log('fetch')
  //   setIsLoading(true);
  //   pixabayFetchImage(search, currentPage)
  //     .then((data) => {
  //       const newImages = [...images, ...data.images];
  //       const hasMore = newImages.length < data.total;
  //       setImages(newImages);
  //       setHasMore(hasMore)
       
  //     })
  //     .catch(error => setError(error))
  //     .finally(() => {
  //       setIsLoading(false);
  //     })
    
  
  // }, [search, currentPage]);
