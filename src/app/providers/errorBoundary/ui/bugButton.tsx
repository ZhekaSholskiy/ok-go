import {Button, ThemeButton} from 'shared/ui/Button';
import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const {t} = useTranslation('translation');

    const onClick = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button theme={ThemeButton.OUTLINE} onClick={onClick}>
            {t('Throw error')}
        </Button>
    );
};
