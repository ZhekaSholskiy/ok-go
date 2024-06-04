import {useTranslation} from 'react-i18next';
import {BugButton} from 'app/providers/errorBoundary';

const MainPage = () => {
    const {t} = useTranslation('mainPage');

    return (
        <div>
            {t('MainPage')}
            <BugButton />
        </div>
    );
};

export default MainPage;
