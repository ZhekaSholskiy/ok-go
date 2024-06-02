import {Loader} from 'shared/ui/Loader';

import cls from './pageLoader.module.scss';

export const PageLoader = () => (
    <div className={cls.pageLoaderWrapper}>
        <Loader className={cls.pageLoader} />
    </div>
);
