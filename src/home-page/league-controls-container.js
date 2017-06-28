import { connect } from 'react-redux';

import LeagueControlsComponent from './league-controls-component';

const mapStateToProps = (state) => {
    const {leagues, selectedLeague} = state.data;
    return {
        editLeagueDisabled: leagues.length < 1,
        selectedLeague
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addLeague: () => {
            // dispatch(push('/add-league'));
        }
    };
};

const LeagueControlsContainer = connect(mapStateToProps, mapDispatchToProps)(LeagueControlsComponent);

export default LeagueControlsContainer;