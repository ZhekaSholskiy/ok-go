import React from 'react';

import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, EAppLinkTheme} from 'shared/ui/AppLink/appLink';

import {useTranslation} from 'react-i18next';
import cls from './navbar.module.scss';

interface INavBarProps {
    className?: string,
}

export const NavBar = ({className}: INavBarProps) => {
    const {t} = useTranslation('translation');

    return (
        <div className={classNames([cls.navbar, className])}>
            <AppLink theme={EAppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                {t('Main')}
            </AppLink>
            <AppLink theme={EAppLinkTheme.SECONDARY} to="/about">{t('About')}</AppLink>
        </div>
    );
};
