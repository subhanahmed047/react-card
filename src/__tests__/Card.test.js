import React from 'react';
import { create } from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    Card,
    CardWrapper,
    CardImage,
    CardContent,
    CardTitle,
    CardContentLogo,
} from '../components/card';

Enzyme.configure({ adapter: new Adapter() });

describe('Card Component Unit Tests', () => {
    test('CardWrapper Component Exists', () => {
        const wrapper = shallow(<CardWrapper />);
        expect(wrapper.exists()).toBe(true);
    });

    test('CardImage Component Exists', () => {
        const wrapper = shallow(<CardImage />);
        expect(wrapper.exists()).toBe(true);
    });

    test('CardContent Component Exists', () => {
        const wrapper = shallow(<CardContent />);
        expect(wrapper.exists()).toBe(true);
    });

    test('CardTitle Component Exists', () => {
        const wrapper = shallow(<CardTitle />);
        expect(wrapper.exists()).toBe(true);
    });

    test('CardContentLogo Component Exists', () => {
        const wrapper = shallow(<CardContentLogo />);
        expect(wrapper.exists()).toBe(true);
    });
});

describe('Card Component Integration Tests', () => {
    test('Renders Card even when the title changes', () => {
        const cardProps = {
            img: 'https://i.ibb.co/jkqfpL9/tile.jpg',
            title: 'Test Title',
            logo: 'https://i.ibb.co/pQGpztg/logo.png',
        };

        const card = mount(<Card card={cardProps} />);

        card.setProps({
            card: {
                img: 'https://i.ibb.co/jkqfpL9/tile.jpg',
                title: 'Some Other Title',
                logo: '',
            },
        });

        expect(card.find('h4').text()).toEqual('Some Other Title');
    });
});

describe('Card Component Snapshot Tests', () => {
    test('CardWrapper Component matches the snapshot', () => {
        const component = create(<CardWrapper />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
