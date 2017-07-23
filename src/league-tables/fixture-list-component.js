import React from 'react';
import PropTypes from 'prop-types';

import FixtureListRowComponent from './fixture-list-row-component';

const FixtureListComponent = ({ fixtures }) => (
    <ul>{
        fixtures.map(fixture => {
            return (<FixtureListRowComponent key={fixture._id} {...fixture} />);
        })
    }
    </ul>
);

FixtureListComponent.propTypes = {
    fixtures: PropTypes.arrayOf(PropTypes.shape({
        homeTeamName: PropTypes.string.isRequired,
        awayTeamName: PropTypes.string.isRequired
    }))
};

export default FixtureListComponent;