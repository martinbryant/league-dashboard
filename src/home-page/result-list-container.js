import { connect } from 'react-redux';

import ResultListComponent from './result-list-component';
import { findResultsForSelectedLeague } from './home-page-selectors';

const mapStateToProps = (state) => {
    const {leagues, selectedLeague} = state.data;
    return {
        results: findResultsForSelectedLeague(leagues, selectedLeague)
            .map(result => {
                return {
                    _id: result._id,
                    homeTeamName: result.homeTeam.teamName,
                    awayTeamName: result.awayTeam.teamName,
                    homeTeamScore: result.homeScore,
                    awayTeamScore: result.awayScore
                };
            })
    };
};

const ResultListContainer = connect(mapStateToProps)(ResultListComponent);

export default ResultListContainer;