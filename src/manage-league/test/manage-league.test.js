import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import ManageLeague from '../manage-league';
import LeagueNameEditContainer from '../league-name-edit-container';
import TeamListContainer from '../team-list-container';

describe('<ManageLeague />', () => {
    it('should render <LeagueNameEditContainer />', () => {
        const wrapper = shallow(<ManageLeague />);
        expect(wrapper.find(LeagueNameEditContainer).length).toBe(1);
    });
    it('should render <TeamListContainer />', () => {
        const wrapper = shallow(<ManageLeague />);
        expect(wrapper.find(TeamListContainer).length).toBe(1);
    });
});