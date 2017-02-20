import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LeagueDropdownRowComponent from '../LeagueDropdownRowComponent';

const setup = (leagues, onLeagueChange) => {
    const props = {
        _id: 'id',
        leagueName: 'name'
    };
    return shallow(<LeagueDropdownRowComponent {...props} />);
};

describe('<LeagueDropdownRowComponent/>', () => {
    it('should render <option> element with a value attribute and text', () => {
        const wrapper = setup();
        expect(wrapper.find('option').length).toBe(1);
        expect(wrapper.find('option').prop('value')).toEqual('id');
        expect(wrapper.find('option').text()).toEqual('name');
    });
});