import { connect } from 'react-redux';

import FixtureListComponent from './fixture-list-component';
import { findFixturesForSelectedLeague } from '../selectors/data-selectors';

const mapStateToProps = (state) => {
    const {leagues, fixtures, selectedLeague} = state.data;
    return {
        fixtures: findFixturesForSelectedLeague(leagues, fixtures, selectedLeague)
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