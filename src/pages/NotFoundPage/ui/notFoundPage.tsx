import {classNames} from 'shared/lib/classNames/classNames';

import {useTranslation} from 'react-i18next';
import cls from './notFoundPage.module.scss';

export const NotFoundPage = () => {
    const {t} = useTranslation('translation');

    return (
        <div className={classNames([cls.notFoundPage])}>
            {t('Page not found')}
        </div>
    );
};
