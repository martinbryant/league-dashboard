import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import LeagueControlsComponent from '../homepage/LeagueControlsComponent';

const mapStateToProps = (state) => {
    const {leagues, selectedLeague} = state;
    return {
        editLeagueDisabled: leagues.length < 1,
        selectedLeague
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