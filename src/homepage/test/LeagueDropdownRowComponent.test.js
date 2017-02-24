import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LeagueDropdownRowComponent from '../LeagueDropdownRowComponent';

const setup = (setupProps) => {
    const {_id = '', leagueName = ''} = setupProps;
    const defaultProps = {
        _id,
        leagueName
    };
    return shallow(<LeagueDropdownRowComponent {...defaultProps} />);
};

describe('<LeagueDropdownRowComponent/>', () => {
    it('should render <option> element with a value attribute and text', () => {
        const wrapper = setup({ _id: 'id', leagueName: 'name' });
        expect(wrapper.find('option').length).toBe(1);
        expect(wrapper.find('option').prop('value')).toEqual('id');
        expect(wrapper.find('option').text()).toEqual('name');
    });
});