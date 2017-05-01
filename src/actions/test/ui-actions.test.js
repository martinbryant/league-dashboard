import expect from 'expect';

import * as actions from '../ui-actions';

describe('ui actions', () => {
  it('should create an action to change the selected league', () => {
    const mockLeagueId = 'LeagueId';
    const expectedAction = {
      type: 'CHANGE_SELECTED_LEAGUE',
      _id: mockLeagueId
    };
    expect(actions.changeSelectedLeague(mockLeagueId)).toEqual(expectedAction);
  });
  it('should create an action to sort the table by the selected column', () => {
    const mockTableColumn = 'Table Column';
    const expectedAction = {
      type: 'SORT_TABLE_BY_COLUMN',
      column: mockTableColumn
    };
    expect(actions.sortTableByColumn(mockTableColumn)).toEqual(expectedAction);
  });
  it('should create an action to toggle the column sort order', () => {
    const mockSortOrder = 'Sort order';
    const expectedAction = {
      type: 'TOGGLE_SORT_ORDER',
      order: mockSortOrder
    };
    expect(actions.toggleSortOrder(mockSortOrder)).toEqual(expectedAction);
  });
});