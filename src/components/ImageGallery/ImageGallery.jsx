import PropTypes from 'prop-types';

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem.jsx";

import s from "./ImageGallery.module.css";

export const ImageGallery = ({ images }) => {
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        src={webformatURL}
                        tags={tags}
                        largeImageURL={largeImageURL}
                    />
                )
            })}
        </ul>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
};