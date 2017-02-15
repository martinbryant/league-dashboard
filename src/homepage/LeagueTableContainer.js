import { connect } from 'react-redux';
import { orderBy } from 'lodash';

import LeagueTableComponent from '../homepage/LeagueTableComponent';

const findTeamsForSelectedLeague = (leagues, selectedLeague) =>
    leagues.find(league => league._id === selectedLeague).teams;

const sortTable = (teams, sortField) => {
    let sortArray = [];
    if (sortField === 'default') {
        sortArray = ['points', 'shotsDifference', 'shotsFor'];
    } else {
        sortArray = [sortField];
    }
    return orderBy(teams, sortArray, ['desc', 'desc', 'desc']);
};

const mapStateToProps = (state) => {
    return {
        teams: sortTable(findTeamsForSelectedLeague(state.leagues, state.selectedLeague),
            state.sortField)
    };
};

const LeagueTableContainer = connect(mapStateToProps)(LeagueTableComponent);

export default LeagueTableContainer;