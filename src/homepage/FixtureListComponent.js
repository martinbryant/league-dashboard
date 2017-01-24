import React, { PropTypes } from 'react';

import FixtureListRowComponent from './FixtureListRowComponent';

const FixtureListComponent = ({fixtures}) => {
    return (
        <ul>{
            fixtures.map(fixture => {
                return (<FixtureListRowComponent key={fixture._id} {...fixture} />);
            })
        }
        </ul>
    );
};

FixtureListComponent.propTypes = {
    fixtures: PropTypes.arrayOf(PropTypes.shape({
        homeTeamName: PropTypes.string.isRequired,
        awayTeamName: PropTypes.string.isRequired
    }))
};

export default FixtureListComponent;