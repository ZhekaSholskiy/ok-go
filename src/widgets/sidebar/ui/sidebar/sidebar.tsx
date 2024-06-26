import {classNames} from 'shared/lib/classNames/classNames';

import {Button, ThemeButton} from 'shared/ui/Button';
import React, {useState} from 'react';
import {ThemeSwitcher} from 'widgets/themeSwitcher';
import {LanguageSwitcher} from 'widgets/languageSwitcher';
import cls from './sidebar.module.scss';

interface IsidebarProps {
    className?: string,
}

export const Sidebar = ({className}: IsidebarProps) => {
    const [collapsed, setIsCollapsed] = useState(true);

    const handleCollapseButtonClick = () => setIsCollapsed((prevState) => !prevState);

    const sidebarClassName = classNames([cls.sidebar, className], {
        [cls.collapsed]: collapsed,
    });

    return (
        <div data-testid="sidebar" className={sidebarClassName}>
            <Button
                data-testid="expand-button"
                className={cls.toggle}
                theme={ThemeButton.CLEAR}
                onClick={handleCollapseButtonClick}>
                {'<>'}
            </Button>
            <LanguageSwitcher />
            <ThemeSwitcher />
        </div>
    );
};
