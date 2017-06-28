import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

import CoreButton from '../components/core/CoreButton';

const LeagueControlsComponent = ({selectedLeague, editLeagueDisabled, addLeague}) => {
    return (
        <div>
            <CoreButton
                value={''}
                buttonClick={addLeague}
                buttonText="Add league"
                disabled={false} />
            <Link to={`/league/${selectedLeague}`}>
            <Button
                id={selectedLeague}
                disabled={editLeagueDisabled}>
                Edit League</Button>
                </Link>
        </div>
    );
};

LeagueControlsComponent.propTypes = {
    selectedLeague: PropTypes.string.isRequired,
    editLeagueDisabled: PropTypes.bool.isRequired,
    addLeague: PropTypes.func.isRequired
};

export default LeagueControlsComponent;