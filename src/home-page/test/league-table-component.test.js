import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LeagueTableComponent from '../league-table-component';
import LeagueTableRowComponent from '../league-table-row-component';

const setup = (setupProps) => {
    const {teams = []} = setupProps;
    const defaultProps = {
        teams
    };
    return shallow(<LeagueTableComponent {...defaultProps} />);
};

const mockTeams = [
    {
        _id: 'id',
        teamName: 'team 1',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        shotsFor: 0,
        shotsAgainst: 0,
        shotsDifference: 0,
        points: 0
    },
    {
        _id: 'it',
        teamName: 'team 2',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        shotsFor: 0,
        shotsAgainst: 0,
        shotsDifference: 0,
        points: 0
    }
];

describe('<LeagueTableComponent/>', () => {
    it('should render a <Table> and a <thead>', () => {
        const wrapper = setup({});
        expect(wrapper.find('Table').length).toBe(1);
        expect(wrapper.find('thead').length).toBe(1);
    });
    it('should render a <tbody> with a <LeagueTableRowComponent>', () => {
        const wrapper = setup({ teams: [{ _id: 'id' }] });
        expect(wrapper.find('tbody').length).toBe(1);
        expect(wrapper.find('LeagueTableRowComponent').length).toBe(1);
    });
    it('should render 2 <LeagueTableHeaderComponent>', () => {
        const wrapper = setup({ teams: mockTeams });
        expect(wrapper.find('LeagueTableRowComponent').length).toBe(2);
    });
    it('<LeagueTableHeaderComponent> should have a key equal to team.id', () => {
        const wrapper = setup({ teams: [mockTeams[0]] });
        expect(wrapper.find('LeagueTableRowComponent').length).toBe(1);
    });
    it('<LeagueTableHeaderComponent> should have props equal to mockTeams[0]', () => {
        const wrapper = setup({ teams: [mockTeams[0]] });
        expect(wrapper.find('LeagueTableRowComponent').props()).toEqual(mockTeams[0]);
    });
});