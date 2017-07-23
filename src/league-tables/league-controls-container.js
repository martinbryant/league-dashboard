import { connect } from 'react-redux';
import { push } from 'redux-json-router';

import LeagueControlsComponent from './league-controls-component';

const mapStateToProps = (state) => {
    const { leagues } = state.data;
    const { selectedLeague } = state.ui;
    return {
        hasLeagues: leagues.length < 1,
        selectedLeague
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    addLeague: () => null,
    editLeague: (e) => {
        const { id } = e.target;
        dispatch(push('/league/' + id));
    }
});

const LeagueControlsContainer = connect(mapStateToProps, mapDispatchToProps)(LeagueControlsComponent);

export default LeagueControlsContainer;