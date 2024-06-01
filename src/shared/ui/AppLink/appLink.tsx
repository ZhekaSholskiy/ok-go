import {Link, LinkProps} from 'react-router-dom';
import {FC} from 'react';

import {classNames} from 'shared/lib/classNames/classNames';

import cls from './appLink.module.scss';

export enum EAppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
    className?: string,
    theme?: EAppLinkTheme,
}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const {
        className,
        theme = EAppLinkTheme.PRIMARY,
        children,
        to,
        ...otherProps
    } = props;

    return (
        <Link to={to} className={classNames([className, cls.appLink, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
