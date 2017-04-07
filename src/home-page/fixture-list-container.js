import { connect } from 'react-redux';

import FixtureListComponent from './fixture-list-component';
import { findFixturesForSelectedLeague } from './home-page-selectors';

const mapStateToProps = (state) => {
    const {leagues, selectedLeague} = state.data;
    return {
        fixtures: findFixturesForSelectedLeague(leagues, selectedLeague)
            .map(fixture => {
                return {
                    _id: fixture._id,
                    homeTeamName: fixture.homeTeam.teamName,
                    awayTeamName: fixture.awayTeam.teamName
                };
            })
    };
};

const FixtureListContainer = connect(mapStateToProps)(FixtureListComponent);

export default FixtureListContainer;