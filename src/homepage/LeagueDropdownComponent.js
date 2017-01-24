import React, { PropTypes } from 'react';

import LeagueDropdownRowComponent from './LeagueDropdownRowComponent';

const LeagueDropDownComponent = ({leagues, onLeagueChange}) => (
    <select onChange={onLeagueChange}>
        {leagues.map(league => {
            return (<LeagueDropdownRowComponent key={league._id}
                {...league}
                />);
        })}
    </select>
);

LeagueDropDownComponent.propTypes = {
    leagues: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        leagueName: PropTypes.string.isRequired
    })),
    onLeagueChange: PropTypes.func.isRequired
};


export default LeagueDropDownComponent;