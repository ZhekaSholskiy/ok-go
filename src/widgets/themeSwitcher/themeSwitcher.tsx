import {classNames} from 'shared/lib/classNames/classNames';

import {useTheme} from 'app/providers/ThemeProvider';
import {Theme} from 'app/providers/ThemeProvider/lib/themeContext';

import IcoDarkTheme from 'shared/assets/icons/dark-theme.svg';
import IcoLightTheme from 'shared/assets/icons/light-theme.svg';
import {Button, ThemeButton} from 'shared/ui/Button';

interface IthemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = ({className}: IthemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames([className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <IcoDarkTheme /> : <IcoLightTheme />}
        </Button>
    );
};
