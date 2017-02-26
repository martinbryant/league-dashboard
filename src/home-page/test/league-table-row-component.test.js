import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LeagueTableRowComponent from '../league-table-row-component';

const setup = (setupProps) => {
    return shallow(<LeagueTableRowComponent {...setupProps} />);
};

const mockTeam = {
    _id: 'id',
    teamName: 'team',
    played: 1,
    won: 2,
    drawn: 3,
    lost: 4,
    shotsFor: 5,
    shotsAgainst: 6,
    shotsDifference: 7,
    points: 8
};

describe('<LeagueDropdownRowComponent/>', () => {
    it('should render a <tr> and 9 <td>', () => {
        const wrapper = setup({});
        expect(wrapper.find('tr').length).toBe(1);
        expect(wrapper.find('td').length).toBe(9);
    });
    it('text for each <td> should equal values provided in props', () => {
        const wrapper = setup(mockTeam);
        expect(wrapper.find('tr').text()).toBe('team12345678');
    });
});