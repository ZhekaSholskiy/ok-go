import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {AboutPage} from 'pages/AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
