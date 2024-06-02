import {classNames} from 'shared/lib/classNames/classNames';

import {HTMLAttributes} from 'react';
import cls from './button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface IbuttonProps extends HTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme: ThemeButton,
}

export const Button = (props: IbuttonProps) => {
    const {
        className, theme, children, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames([cls.button, className, cls[theme]])}
            {...otherProps}>
            {children}
        </button>
    );
};
