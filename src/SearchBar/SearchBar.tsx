import React from 'react'
import { Bar } from './styled/Bar'
import { AddButton } from './styled/AddButton';
import { book1, book2 } from '../mocks/elementMocks';
import { addElement } from '../utils/firebase';

export function SearchBar() {
    return (
        <React.Fragment>
            <Bar />
            <AddButton
                onAdd={addElement}
                element={book1}
            />
            <AddButton
                onAdd={addElement}
                element={book2}
            />
        </React.Fragment>
    );
}