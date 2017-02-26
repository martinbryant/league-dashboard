import { connect } from 'react-redux';
import { orderBy } from 'lodash';

import LeagueTableComponent from './league-table-component';

const findTeamsForSelectedLeague = (leagues, selectedLeague) =>
    leagues.find(league => league._id === selectedLeague).teams;

const sortTable = (teams, sortColumn, sortOrder) => {
    let sortArray = [];
    if (sortColumn === 'default') {
        sortArray = ['points', 'shotsDifference', 'shotsFor'];
    } else {
        sortArray = [sortColumn];
    }
    return orderBy(teams, sortArray, [sortOrder, sortOrder, sortOrder]);
};

const mapStateToProps = (state) => {
    const {leagues, selectedLeague, sortColumn, sortOrder} = state;
    return {
        teams: sortTable(findTeamsForSelectedLeague(leagues, selectedLeague),
            sortColumn, sortOrder)
    };
};

const LeagueTableContainer = connect(mapStateToProps)(LeagueTableComponent);

export default LeagueTableContainer;