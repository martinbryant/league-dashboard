import { connect } from 'react-redux';
import { orderBy } from 'lodash';

import LeagueTableComponent from './league-table-component';
import { findTeamsForSelectedLeague, sortTable } from './home-page-selectors';

const mapStateToProps = (state) => {
    const {leagues, selectedLeague} = state.data;
    const {sortColumn, sortOrder} = state.ui;
    return {
        teams: sortTable(findTeamsForSelectedLeague(leagues, selectedLeague), sortColumn, sortOrder)
    };
};

const LeagueTableContainer = connect(mapStateToProps)(LeagueTableComponent);

export default LeagueTableContainer;