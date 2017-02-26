import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LeagueDropdownComponent from '../league-dropdown-component';

const mockLeagues = [{
    _id: 'a',
    leagueName: ''
},
{
    _id: 'b',
    leagueName: ''
}];

const setup = (setupProps) => {
    const {selectedLeague = '', leagues = [], onLeagueChange = () => { }} = setupProps;
    const defaultProps = {
        selectedLeague,
        leagues,
        onLeagueChange
    };
    return shallow(<LeagueDropdownComponent {...defaultProps} />);
};

describe('<LeagueDropdownComponent/>', () => {
    it('should render a <select> element with a value attribute', () => {
        const wrapper = setup({ selectedLeague: 'a' });
        expect(wrapper.find('select').length).toBe(1);
        expect(wrapper.find('select').prop('value')).toBe('a');
    });
    it('should call onLeagueChange when different league selected', () => {
        const spy = expect.createSpy();
        const wrapper = setup({ leagues: mockLeagues, onLeagueChange: spy });
        wrapper.find('select').simulate('change');
        expect(spy).toHaveBeenCalled();
    });
    it('should render 2 <LeagueDropdownRowComponent/>', () => {
        const wrapper = setup({ leagues: mockLeagues });
        expect(wrapper.find('LeagueDropdownRowComponent').length).toBe(2);
    });
    it('should render <LeagueDropdownRowComponent/> with props _id and leagueName', () => {
        const wrapper = setup({ leagues: [{ _id: 'id', leagueName: 'name' }] });
        expect(wrapper.find('LeagueDropdownRowComponent').prop('_id')).toEqual('id');
        expect(wrapper.find('LeagueDropdownRowComponent').prop('leagueName')).toEqual('name');
    });
    it('should render a <option> when 0 leagues and display message', () => {
        const wrapper = setup({});
        expect(wrapper.find('option').length).toBe(1);
        expect(wrapper.find('option').text()).toEqual('No leagues to display');
    });
});