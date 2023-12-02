import React from 'react';
import './CardButton.css';

const CardButton = (props) => {
    const {
        children, className, onClick, ...otherProps
    } = props;

    const onClickHandler = (e) => {
        onClick(e);
    };

    const cl = className ? `card-button ${className}` : 'card-button';

    return (
        <button
            className={cl}
            type="button"
            onClick={onClickHandler}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CardButton;
