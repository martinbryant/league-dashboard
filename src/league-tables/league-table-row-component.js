import React from 'react';
import PropTypes from 'prop-types';

const LeagueTableRowComponent = ({ _id, teamName, played, won, drawn, lost, shotsFor, shotsAgainst, shotsDifference, points }) => (
    <tr>
        <td>{teamName}</td>
        <td>{played}</td>
        <td>{won}</td>
        <td>{drawn}</td>
        <td>{lost}</td>
        <td>{shotsFor}</td>
        <td>{shotsAgainst}</td>
        <td>{shotsDifference}</td>
        <td>{points}</td>
    </tr>
);

LeagueTableRowComponent.propTypes = {
    _id: PropTypes.string.isRequired,
    teamName: PropTypes.string.isRequired,
    played: PropTypes.number.isRequired,
    won: PropTypes.number.isRequired,
    drawn: PropTypes.number.isRequired,
    lost: PropTypes.number.isRequired,
    shotsFor: PropTypes.number.isRequired,
    shotsAgainst: PropTypes.number.isRequired,
    shotsDifference: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired
};

export default LeagueTableRowComponent;