import { Component } from "react";

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
        return (
            <li className={s.ImageGalleryItem}>
                <img
                    className={s.Image}
                    src={this.props.src}
                    alt={this.props.tags}
                    onClick={this.toggleModal}
                />
                {this.state.showModal &&
                    <Modal
                        onClose={this.toggleModal}
                        src={this.props.largeImageURL}
                        alt={this.props.tags}
                    />}
            </li>
        );
    }
};