import { connect } from 'react-redux';

import { changeSelectedLeague } from '../actions/ui-actions';
import LeagueDropdownComponent from './league-dropdown-component';

export const mapStateToProps = (state) => {
    const { leagues } = state.data;
    const { selectedLeague } = state.ui;
    return {
        selectedLeague,
        leagues: leagues.map(league => {
            return {
                leagueName: league.leagueName,
                _id: league._id
            };
        })
    };
};

const mapDispatchToProps = (dispatch) => ({
    onLeagueChange: (e) => dispatch(changeSelectedLeague(e.target.value))
});

const LeagueDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(LeagueDropdownComponent);

export default LeagueDropdownContainer;