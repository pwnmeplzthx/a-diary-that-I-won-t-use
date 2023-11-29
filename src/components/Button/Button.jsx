import React from 'react';
import './Button.css';

const Button = (props) => {
    const { children, onClick } = props;

    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className="button accent"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
