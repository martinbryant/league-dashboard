import React, { PropTypes } from 'react';

import { sortArrowUp, sortArrowDown } from '../constants';

const LeagueTableHeaderComponent = ({tableColumns, sortOrder, sortColumn, onSortColumnChange, onSortOrderChange}) => {
    return (
        <tr>
            {tableColumns.map(column => {
                return (<th
                    key={column.field}
                    value={column.field}
                    onClick={(sortColumn != column.field) ? onSortColumnChange : ''}>{column.heading}
                    {(sortColumn == column.field) ?
                        <span style={{ float: 'right' }}
                            value={sortOrder}
                            className={(sortOrder == 'desc') ? sortArrowDown : sortArrowUp}
                            onClick={onSortOrderChange}>
                        </span> : ''}</th>);
            })}
        </tr>
    );
};

LeagueTableHeaderComponent.propTypes = {
    tableColumns: PropTypes.array.isRequired,
    sortOrder: PropTypes.string.isRequired,
    sortColumn: PropTypes.string.isRequired,
    onSortColumnChange: PropTypes.func.isRequired,
    onSortOrderChange: PropTypes.func.isRequired
};

export default LeagueTableHeaderComponent;