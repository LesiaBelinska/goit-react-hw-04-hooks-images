import { Component } from "react";
import PropTypes from 'prop-types'; 

import { Modal } from "components/Modal/Modal";

import s from "./ImageGalleryItem.module.css";

export class ImageGalleryItem extends Component {

    state = {
        showModal: false,
    }

    toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  }

    render() {

        const { src, tags, largeImageURL } = this.props;
        const { showModal } = this.state;
        
        return (
            <li className={s.ImageGalleryItem}>
                <img
                    className={s.Image}
                    src={src}
                    alt={tags}
                    onClick={this.toggleModal}
                />
                {showModal &&
                    <Modal
                        onClose={this.toggleModal}
                        src={largeImageURL}
                        alt={tags}
                    />}
            </li>
        )
    }
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
};
