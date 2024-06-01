import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <div className="page-wrapper">
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    </div>
);

export default AppRouter;
