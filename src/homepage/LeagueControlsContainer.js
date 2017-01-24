import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import LeagueControlsComponent from '../homepage/LeagueControlsComponent';

const mapStateToProps = (state) => {
    return {
        editLeagueDisabled: state.leagues.length < 1,
        selectedLeague: state.selectedLeague
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addLeague: () => {
            // dispatch(push('/add-league'));
        },
        editLeague: (selectedLeague) => {
            browserHistory.push('/manage-league/' + selectedLeague);
        }
    };
};

const LeagueControlsContainer = connect(mapStateToProps, mapDispatchToProps)(LeagueControlsComponent);

export default LeagueControlsContainer;