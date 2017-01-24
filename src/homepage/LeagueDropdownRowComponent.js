import React, { PropTypes } from 'react';

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