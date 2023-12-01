import React from 'react';
import './Button.css';

const Button = (props) => {
    const { children, onClick, disabled = false } = props;

    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className="button accent"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
