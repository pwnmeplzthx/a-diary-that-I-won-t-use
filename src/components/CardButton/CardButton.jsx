import React from 'react';
import './CardButton.css';

const CardButton = (props) => {
    const { children, className } = props;

    const onClickHandler = () => {
        console.log('click!');
    };

    const cl = className ? `card-button ${className}` : 'card-button';

    return (
        <button
            className={cl}
            type="button"
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
};

export default CardButton;
