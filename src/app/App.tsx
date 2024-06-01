import './styles/index.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';
import {NavBar} from 'widgets/navBar';
import {Sidebar} from 'widgets/sidebar';
import React, {Suspense} from 'react';

export const App = () => {
    const {theme} = useTheme();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={classNames(['app', theme])}>
                <NavBar />
                <div className="page-content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
};
