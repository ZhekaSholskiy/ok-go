import {Theme} from 'app/providers/ThemeProvider';
import {Story} from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (story: () => Story) => (
    <div className={`app ${theme}`}>
        {story()}
    </div>
);
