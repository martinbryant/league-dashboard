import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import HomePage from '../HomePage';
import LeagueDropdownContainer from '../LeagueDropdownContainer';
import LeagueTableContainer from '../LeagueTableContainer';
import FixtureListContainer from '../FixtureListContainer';
import ResultListContainer from '../ResultListContainer';
import LeagueControlsContainer from '../LeagueControlsContainer';

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