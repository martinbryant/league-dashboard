import React from 'react';
import PropTypes from 'prop-types';

const ResultListRowComponent = ({ homeTeamName, awayTeamName, homeTeamScore, awayTeamScore }) => (
    <li>{homeTeamName} {homeTeamScore} v {awayTeamScore} {awayTeamName}</li>
);

ResultListRowComponent.propTypes = {
    homeTeamName: PropTypes.string.isRequired,
    awayTeamName: PropTypes.string.isRequired,
    homeTeamScore: PropTypes.number.isRequired,
    awayTeamScore: PropTypes.number.isRequired
};

export default ResultListRowComponent;