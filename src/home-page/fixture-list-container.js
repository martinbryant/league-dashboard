import { connect } from 'react-redux';

import FixtureListComponent from './fixture-list-component';

const mapStateToProps = (state) => {
    return {
        fixtures: state.leagues.find(league => league._id === state.selectedLeague).fixtures
            .filter(fixture => !fixture.played)
            .map(fixture => {
                return {
                    _id : fixture._id,
                    homeTeamName: fixture.homeTeam.teamName,
                    awayTeamName: fixture.awayTeam.teamName
                };
            })
    };
};

const FixtureListContainer = connect(mapStateToProps)(FixtureListComponent);

export default FixtureListContainer;