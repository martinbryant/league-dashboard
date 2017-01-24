import React, { PropTypes } from 'react';

const ResultListRowComponent = ({homeTeamName, awayTeamName, homeTeamScore, awayTeamScore}) => {
    return (
        <li>{homeTeamName} {homeTeamScore} v {awayTeamScore} {awayTeamName}</li>
    );
};

ResultListRowComponent.propTypes = {
    homeTeamName: PropTypes.string.isRequired,
    awayTeamName: PropTypes.string.isRequired,
    homeTeamScore : PropTypes.number.isRequired,
    awayTeamScore : PropTypes.number.isRequired
};

export default ResultListRowComponent;