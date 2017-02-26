import React, { PropTypes } from 'react';

import CoreButton from '../components/core/CoreButton';

const LeagueControlsComponent = ({selectedLeague, editLeagueDisabled, addLeague, editLeague}) => {
    return (
        <div>
            <CoreButton
                value={''}
                buttonClick={addLeague}
                buttonText="Add league"
                disabled={false} />
            <CoreButton
                value={selectedLeague}
                buttonClick={editLeague}
                buttonText="Edit league"
                disabled={editLeagueDisabled} />
        </div>
    );
};

LeagueControlsComponent.propTypes = {
    selectedLeague: PropTypes.string.isRequired,
    editLeagueDisabled: PropTypes.bool.isRequired,
    addLeague: PropTypes.func.isRequired,
    editLeague: PropTypes.func.isRequired
};

export default LeagueControlsComponent;