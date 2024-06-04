import {classNames} from 'shared/lib/classNames/classNames';

import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button';
import cls from './errorPage.module.scss';

interface IerrorPageProps {
    className?: string,
}

export const ErrorPage = ({className}: IerrorPageProps) => {
    const {t} = useTranslation('translation');

    const reloadThePage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames([cls.errorPage, className])}>
            {t('Something went wrong')}...
            <Button onClick={reloadThePage}>
                {t('Reload the page')}
            </Button>
        </div>
    );
};
