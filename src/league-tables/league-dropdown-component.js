import React from 'react';
import PropTypes from 'prop-types';

import LeagueDropdownRowComponent from './league-dropdown-row-component';

const LeagueDropDownComponent = ({selectedLeague, leagues, onLeagueChange}) => (
    <select value={selectedLeague} onChange={onLeagueChange}>
        {(leagues.length != 0) ? leagues.map(league => {
            return (<LeagueDropdownRowComponent key={league._id}
                {...league}
                />);
        }) : <option>No leagues to display</option>}
    </select>
);

LeagueDropDownComponent.propTypes = {
    selectedLeague : PropTypes.string.isRequired,
    leagues: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        leagueName: PropTypes.string.isRequired
    })),
    onLeagueChange: PropTypes.func.isRequired
};

export default LeagueDropDownComponent;