import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/themeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {AppLink, EAppLinkTheme} from 'shared/ui/AppLink/appLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    args: {
        to: '/',
        children: 'Link',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {theme: EAppLinkTheme.PRIMARY};

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {theme: EAppLinkTheme.SECONDARY};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {theme: EAppLinkTheme.PRIMARY};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {theme: EAppLinkTheme.SECONDARY};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
