import React from 'react';
import { create } from 'react-test-renderer';
import CardWrapper from '../components/card/wrapper';

describe('Card Wrapper component', () => {
    test('card wrapper component matches the snapshot', () => {
        const component = create(<CardWrapper />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
