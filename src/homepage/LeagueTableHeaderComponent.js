import React, { PropTypes } from 'react';

const LeagueTableHeaderComponent = ({columns, onClick}) => {
    return (
        <tr>
            {columns.map(column => {
                return <th key={column.field} value={column.field} onClick={onClick}>{column.heading}</th>;
            })}
        </tr>
    );
};

LeagueTableHeaderComponent.propTypes = {
    columns: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default LeagueTableHeaderComponent;