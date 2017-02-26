import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import HomePage from '../home-page';
import LeagueDropdownContainer from '../league-dropdown-container';
import LeagueTableContainer from '../league-table-container';
import FixtureListContainer from '../fixture-list-container';
import ResultListContainer from '../result-list-container';
import LeagueControlsContainer from '../league-controls-container';

describe('<HomePage />', () => {
  it('should render <LeagueDropdownContainer />', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(LeagueDropdownContainer).length).toBe(1);
  });
  it('should render <LeagueTableContainer />', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(LeagueTableContainer).length).toBe(1);
  });
  it('should render <FixtureListContainer />', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(FixtureListContainer).length).toBe(1);
  });
  it('should render <ResultListContainer />', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(ResultListContainer).length).toBe(1);
  });
  it('should render <LeagueControlsContainer />', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(LeagueControlsContainer).length).toBe(1);
  });
});