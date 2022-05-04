import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types'; 

import s from "./Modal.module.css";

export const Modal = ({ src, tags, onClose }) => {
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    });

    
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };
    

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };


    return createPortal(
        <div className={s.Overlay}
            onClick={handleBackdropClick}>
            <div className={s.Modal}>
                <img
                    src={src}
                    alt={tags} />
                    
            </div>
        </div>,
        document.querySelector('#modal-root'),
    )
};

Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};