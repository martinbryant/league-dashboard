import React, { Component } from 'react';

const FixtureView = ({ fixtures }) => {
    let fixtureList = fixtures.map(function (fixture) {
        if (!fixture.played) {
            return <li key={fixture._id}>{fixture.homeTeam.teamName} v {fixture.awayTeam.teamName}</li>;
        }
    });
    return (
        <ul > {fixtureList}</ul>
    );
};

FixtureView.propTypes = {
    fixtures: React.PropTypes.array.isRequired
};

export default FixtureView;