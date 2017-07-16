import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

import CoreButton from '../shared-components/core/CoreButton';

const LeagueControlsComponent = ({selectedLeague, hasLeagues, addLeague, editLeague}) => {
    return (
        <div>
            <CoreButton
                value={''}
                buttonClick={addLeague}
                buttonText="Add league"
                disabled={false} />
            <Button
                id={selectedLeague}
                disabled={hasLeagues}
                onClick={editLeague}>
                Edit League</Button>
                
        </div>
    );
};

LeagueControlsComponent.propTypes = {
    selectedLeague: PropTypes.string.isRequired,
    hasLeagues: PropTypes.bool.isRequired,
    addLeague: PropTypes.func.isRequired,
    editLeague: PropTypes.func.isRequired
};

export default LeagueControlsComponent;