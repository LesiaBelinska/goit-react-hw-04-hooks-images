import PropTypes from 'prop-types'; 

import s from "./Button.module.css";

export const Button = ({ onClick }) => {
    return (
        <div className={s.ButtonContainer}>
            <button
                className={s.Button}
                type="button"
                onClick={onClick}>
                Load more</button>
        </div>
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};