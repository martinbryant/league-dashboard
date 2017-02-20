import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LeagueDropdownComponent from '../LeagueDropdownComponent';

const mockLeagues = [{
    _id: 'a',
    leagueName: ''
},
{
    _id: 'b',
    leagueName: ''
}];

const setup = (leagues, onLeagueChange) => {
    const props = {
        selectedLeague: '',
        leagues,
        onLeagueChange: onLeagueChange
    };
    return shallow(<LeagueDropdownComponent {...props} />);
};

describe('<LeagueDropdownContainer/>', () => {
    it('should render a <select> element', () => {
        const wrapper = setup();
        expect(wrapper.find('select').length).toBe(1);
    });
    it('should render 2 <LeagueDropdownRowComponent/>', () => {
        const wrapper = setup(mockLeagues);
        expect(wrapper.find('LeagueDropdownRowComponent').length).toBe(2);
    });
    it('should render <LeagueDropdownRowComponent/> with props _id and leagueName', () => {
        const wrapper = setup([{ _id: 'id', leagueName: 'name' }]);
        expect(wrapper.find('LeagueDropdownRowComponent').prop('_id')).toEqual('id');
        expect(wrapper.find('LeagueDropdownRowComponent').prop('leagueName')).toEqual('name');
    });
    it('should render a <option> when 0 leagues and display message', () => {
        const wrapper = setup();
        expect(wrapper.find('option').length).toBe(1);
        expect(wrapper.find('option').text()).toEqual('No leagues to display');
    });
    it('should call onLeagueChange when different league selected', () => {
        const spy = expect.createSpy();
        const wrapper = setup(mockLeagues, spy);
        wrapper.find('select').simulate('change');
        expect(spy).toHaveBeenCalled();
    });
});