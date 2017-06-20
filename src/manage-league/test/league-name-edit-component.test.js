import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LeagueNameEditComponent from '../league-name-edit-component';

describe('<LeagueNameEditComponent/>', () => {
    it('should render a div', () => {
        const wrapper = shallow(<LeagueNameEditComponent/>);
        expect(wrapper.find('div').length).toBe(1);
    });
    it('should render a h3', () => {
        const wrapper = shallow(<LeagueNameEditComponent/>);
        expect(wrapper.find('h3').length).toBe(1);
    });
});