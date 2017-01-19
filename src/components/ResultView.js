import React, { Component } from 'react';

const ResultView = ({ fixtures }) => {
    let resultList = fixtures.map(function (fixture) {
        if (fixture.played) {
            return (<li key={fixture._id}>{fixture.homeTeam.teamName}
                {fixture.homeScore} v {fixture.awayScore}
                {fixture.awayTeam.teamName}</li>
            );
        }
    });
    return (
        <ul>{resultList}</ul>
    );
};

ResultView.propTypes = {
    fixtures: React.PropTypes.array.isRequired
};

export default ResultView;