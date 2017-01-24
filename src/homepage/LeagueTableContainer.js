import { connect } from 'react-redux';

import LeagueTableComponent from '../homepage/LeagueTableComponent';

const mapStateToProps = (state) => {
    return {
        teams : state.leagues.find(league => league._id === state.selectedLeague).teams
    };
};

const LeagueTableContainer = connect(mapStateToProps)(LeagueTableComponent);

export default LeagueTableContainer;