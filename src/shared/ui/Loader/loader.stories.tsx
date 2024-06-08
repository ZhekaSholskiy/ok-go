import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Loader} from './loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Loader>;

const loaderStyle = {
    width: '20px',
    height: '20px',
    transform: 'translate(50px, 50px)',
};

const Template: ComponentStory<typeof Loader> = (args) => (
    <div style={loaderStyle}>
        <Loader {...args} />
    </div>
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
