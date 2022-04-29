import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types'; 

import s from "./Modal.module.css";
export class Modal extends Component{

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };
    
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };
    
    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {

        const { src, tags } = this.props;

        return createPortal(
            <div className={s.Overlay}
                onClick={this.handleBackdropClick}>
                <div className={s.Modal}>
                    <img
                        src={src}
                        alt={tags} />
                    
                </div>
            </div>,
           document.querySelector('#modal-root'),
        )
    }
};

Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};