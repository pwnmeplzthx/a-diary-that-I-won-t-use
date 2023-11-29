import React from 'react';
import './Button.css';

const Button = (props) => {
    const { children } = props;

    const onClickHandler = () => {
        console.log('click!');
    };

    return (
        <button
            className="button accent"
            type="button"
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
};

export default Button;
