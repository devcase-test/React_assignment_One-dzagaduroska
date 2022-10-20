import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('Control test', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
});

test('Display all items', () => {
    render(<App />);
    expect(screen.getAllByTestId('displayitem-name').length).toBe(3);
    expect(screen.getAllByTestId('displayitem-list').length).toBe(3);
    expect(screen.getAllByTestId('displayitem-button').length).toBe(3);
});

test('Collapse item', () => {
    render(<App />);
    const displayButton = screen.getAllByTestId('displayitem-button');
    displayButton[0].click();
    expect(screen.getAllByTestId('displayitem-list').length).toBe(2);

    displayButton[0].click();
    expect(screen.getAllByTestId('displayitem-list').length).toBe(3);
});

test('Collapse all', () => {
    render(<App />);
    const displayButton = screen.getAllByTestId('displayitem-button');
    expect(screen.getAllByTestId('displayitem-list').length).toBe(3);
    displayButton.map((btn) => btn.click());
    expect(screen.queryAllByTestId('displayitem-list').length).toBe(0);
    displayButton[0].click();
    expect(screen.getAllByTestId('displayitem-list').length).toBe(1);
});

test('To find an input all', () => {
    render(<App />);
    expect(screen.getByTestId('search-box')).toBeInTheDocument();
});

test('To search for', async () => {
    render(<App />);
    const searchInput = screen.getByTestId('search-box');
    fireEvent.change(searchInput, {
        target: { value: 'Gin and tonic' },
    });
    await waitFor(() =>
        expect(screen.getAllByTestId('displayitem-name').length).toBe(1)
    );

    fireEvent.change(searchInput, {
        target: { value: '' },
    });
    await waitFor(() =>
        expect(screen.getAllByTestId('displayitem-name').length).toBe(3)
    );
});

test('Typing', async () => {
    render(<App />);
    const searchInput = screen.getByTestId('search-box');
    fireEvent.change(searchInput, {
        target: { value: 'Gin' },
    });

    expect(screen.getAllByTestId('displayitem-name').length).toBe(3);

    fireEvent.change(searchInput, {
        target: { value: 'Gin and tonic' },
    });

    expect(screen.getAllByTestId('displayitem-name').length).toBe(3);

    await waitFor(() =>
        expect(screen.getAllByTestId('displayitem-name').length).toBe(1)
    );
});
