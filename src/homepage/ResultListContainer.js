import { connect } from 'react-redux';

import ResultListComponent from '../homepage/ResultListComponent';

const mapStateToProps = (state) => {
    return {
        results: state.leagues.find(league => league._id === state.selectedLeague).fixtures
            .filter(fixture => fixture.played)
            .map(result => {
                return {
                    _id : result._id,
                    homeTeamName: result.homeTeam.teamName,
                    awayTeamName: result.awayTeam.teamName,
                    homeTeamScore : result.homeScore,
                    awayTeamScore : result.awayScore
                };
            })
    };
};

const ResultListContainer = connect(mapStateToProps)(ResultListComponent);

export default ResultListContainer;