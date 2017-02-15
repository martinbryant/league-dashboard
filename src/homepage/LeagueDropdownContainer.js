import { connect } from 'react-redux';

import { changeSelectedLeague } from './homePageActions';

import LeagueDropdownComponent from './LeagueDropdownComponent';

const mapStateToProps = (state) => {
    return {
        selectedLeague : state.selectedLeague,
        leagues: state.leagues.map(league => {
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