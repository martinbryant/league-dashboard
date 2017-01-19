import React, { Component } from 'react';

const LeagueDropdown = ({leagueNames, changeLeague}) => {
    function handleChange(e) {
        const newLeague = e.target.value;
        changeLeague(newLeague);
    }

    let leagueOptions = leagueNames.map(function (league) {
        return <option key={league._id} value={league._id}>{league.leagueName}</option>;
    });
    return (
        <select onChange={handleChange}>
            {leagueOptions}
        </select>);
};

LeagueDropdown.propTypes = {
    leagueNames: React.PropTypes.array.isRequired,
    changeLeague: React.PropTypes.func.isRequired
};

export default LeagueDropdown;