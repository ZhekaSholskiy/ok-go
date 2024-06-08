import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {buildScssLoader} from '../loaders/buildScssLoader';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(?:ts|js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {targets: 'defaults'}],
                ],
            },
        },
    };

    const svgLoader = {
        test: /\.svg$/,
        loader: '@svgr/webpack',
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = buildScssLoader(isDev);

    const fileLoader = {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
    };

    return [
        babelLoader,
        typescriptLoader,
        scssLoader,
        svgLoader,
        fileLoader,
    ];
}
