import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Layer from './index';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        editItem: jest.fn(),
        deleteItem: jest.fn()
    }

    const enzymeWrapper = shallow(<Layer {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('components', () => {
    describe('Layer', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();

            expect(enzymeWrapper.find('.layer-item')).toHaveLength(0);
        })
    })
})