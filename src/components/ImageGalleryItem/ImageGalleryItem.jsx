import { useState } from 'react';
import PropTypes from 'prop-types'; 

import { Modal } from "components/Modal/Modal";

import s from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ src, tags, largeImageURL }) => {
    
    const [showModal, setShowModal] = useState(false);

    
    const toggleModal = () => {
        setShowModal(!showModal);
    };


    return (
        <li className={s.ImageGalleryItem}>
            <img
                className={s.Image}
                src={src}
                alt={tags}
                onClick={toggleModal}
            />
            {showModal &&
                <Modal
                    onClose={toggleModal}
                    src={largeImageURL}
                    alt={tags}
                />}
        </li>
    )
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
};
