import webpack from 'webpack';
import path from 'path';
import {BuildPaths} from '../build/types/config';
import {buildScssLoader} from '../loaders/buildScssLoader';

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '../../src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.forEach((rule: webpack.RuleSetRule, idx, array: webpack.RuleSetRule[]) => {
        if (/svg/.test(array[idx].test as string)) {
            Object.assign(array[idx], {exclude: /\.svg/});
        }
    });
    // fake changes
    config.module.rules.push({
        test: /\.svg$/,
        loader: '@svgr/webpack',
    });
    config.module.rules.push(buildScssLoader(true));

    return config;
};
