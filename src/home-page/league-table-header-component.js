import React, { PropTypes } from 'react';

import TableSortIndicatorContainer from './table-sort-indicator-container';
import { sortArrowUp, sortArrowDown } from '../constants';

const LeagueTableHeaderComponent = ({tableColumns, sortColumn, onSortColumnChange}) => {
    return (
        <tr>
            {tableColumns.map(column => {
                return (
                    <th key={column.field}
                        id={column.field}
                        onClick={(sortColumn != column.field) ? onSortColumnChange : ''}>{column.heading}
                        <TableSortIndicatorContainer sortField={column.field} /></th>);
            })}
        </tr>
    );
};

LeagueTableHeaderComponent.propTypes = {
    tableColumns: PropTypes.array.isRequired,
    sortColumn: PropTypes.string.isRequired,
    onSortColumnChange: PropTypes.func.isRequired
};

export default LeagueTableHeaderComponent;