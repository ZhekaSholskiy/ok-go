import {classNames} from 'shared/lib/classNames/classNames';

import cls from './loader.module.scss';

interface IloaderProps {
    className?: string,
}

export const Loader = ({className}: IloaderProps) => (
    <div className={classNames([cls.loader, className])} />
);
