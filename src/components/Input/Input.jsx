import cn from 'classnames';
import { forwardRef } from 'react';
import cls from './Input.module.css';

const Input = forwardRef(
    (props, ref) => {
        const {
            className, isValid = true, apperence, ...otherProps
        } = props;

        return (
            <input
                {...otherProps}
                ref={ref}
                className={cn(className, cls.input, {
                    [cls.invalid]: !isValid,
                    [cls.inputTitle]: apperence === 'title',
                })}
            />
        );
    },
);

export default Input;
