import {render, screen} from '@testing-library/react';
import {Button, ThemeButton} from 'shared/ui/Button/button';

describe('button', () => {
    test('render button', () => {
        render(<Button>TEXT</Button>);
        expect(screen.getByText('TEXT')).toBeInTheDocument();
    });

    test('render button with theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEXT</Button>);
        expect(screen.getByText('TEXT')).toHaveClass('clear');
    });
});
