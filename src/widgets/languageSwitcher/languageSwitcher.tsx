import {classNames} from 'shared/lib/classNames/classNames';

import {Button, ThemeButton} from 'shared/ui/Button';
import React from 'react';
import {useTranslation} from 'react-i18next';
import cls from './languageSwitcher.module.scss';

interface IlanguageSwitcherProps {
    className?: string,
}

export const LanguageSwitcher = ({className}: IlanguageSwitcherProps) => {
    const {t, i18n} = useTranslation('translation');

    const handleTranslateButtonClick = () => i18n.changeLanguage(i18n.language === 'ru'
        ? 'en'
        : 'ru');
    const buttonClassName = classNames([className, cls.translateButton]);

    return (
        <Button
            className={buttonClassName}
            theme={ThemeButton.CLEAR}
            onClick={handleTranslateButtonClick}>
            {t('Translate')}
        </Button>
    );
};
