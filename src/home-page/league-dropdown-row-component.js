import React from 'react';
import PropTypes from 'prop-types';

const LeagueDropdownRowComponent = ({leagueName, _id}) => (
    <option value={_id}>
        {leagueName}
    </option>
);

LeagueDropdownRowComponent.propTypes = {
    leagueName: PropTypes.string.isRequired,
    _id : PropTypes.string.isRequired
};

export default LeagueDropdownRowComponent;