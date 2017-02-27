import { connect } from 'react-redux';

import { changeSelectedLeague } from './home-page-actions';
import LeagueDropdownComponent from './league-dropdown-component';

export const mapStateToProps = (state) => {
    const {selectedLeague, leagues} = state;
    return {
        selectedLeague,
        leagues: leagues.map(league => {
            return {
                leagueName : league.leagueName,
                _id : league._id
            };
        })
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLeagueChange: (e) => {
            dispatch(changeSelectedLeague(e.target.value));
        }
    };
};

const LeagueDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(LeagueDropdownComponent);

export default LeagueDropdownContainer;