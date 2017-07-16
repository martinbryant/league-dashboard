import { connect } from 'react-redux';
import { orderBy } from 'lodash';

import LeagueTableComponent from './league-table-component';
import { findTeamsForSelectedLeague, sortTable } from '../selectors/data-selectors';

const mapStateToProps = (state) => {
    const { leagues, teams } = state.data;
    const { sortColumn, sortOrder, selectedLeague } = state.ui;
    return {
        teams: sortTable(findTeamsForSelectedLeague(leagues, teams, selectedLeague), sortColumn, sortOrder)
    };
};

const LeagueTableContainer = connect(mapStateToProps)(LeagueTableComponent);

export default LeagueTableContainer;