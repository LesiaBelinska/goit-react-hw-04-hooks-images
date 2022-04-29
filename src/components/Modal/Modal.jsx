import { Component } from "react";

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

        return (
            <div className={s.Overlay}
                onClick={this.handleBackdropClick}>
                <div className={s.Modal}>
                    <img
                        src={this.props.src}
                        alt={this.props.tags} />
                    
                </div>
            </div>
        );
    }
}