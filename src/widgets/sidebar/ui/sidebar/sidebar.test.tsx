import {fireEvent, render, screen} from '@testing-library/react';
import {Sidebar} from './sidebar';

describe('sidebar', () => {
    test('render sidebar', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('expand sidebar', () => {
        render(<Sidebar />);
        const expandButton = screen.getByTestId('expand-button');
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toHaveClass('collapsed');
        fireEvent.click(expandButton);
        expect(sidebar).not.toHaveClass('collapsed');
    });
});
