import React, { PropTypes } from 'react';

const FixtureListRowComponent = ({homeTeamName, awayTeamName}) => {
    return (
        <li>{homeTeamName} v {awayTeamName}</li>
    );
};

FixtureListRowComponent.propTypes = {
    homeTeamName: PropTypes.string.isRequired,
    awayTeamName: PropTypes.string.isRequired
};

export default FixtureListRowComponent;