import React from 'react';
import PropTypes from 'prop-types';

import TableSortIndicatorComponent from './table-sort-indicator-component';

const LeagueTableHeaderComponent = ({ tableColumns, sortColumn, sortOrder, onSortColumnChange, onSortOrderChange }) => {
    return (
        <tr>
            {tableColumns.map(column => {
                return (
                    <th key={column.field}
                        id={column.field}
                        onClick={(sortColumn != column.field)
                            ? onSortColumnChange
                            : null}>{column.heading}
                        {(column.field == sortColumn)
                            ? <TableSortIndicatorComponent sortOrder={sortOrder}
                                onSortOrderChange={onSortOrderChange} />
                            : null}</th>);
            })}
        </tr>
    );
};

LeagueTableHeaderComponent.propTypes = {
    tableColumns: PropTypes.array.isRequired,
    sortColumn: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
    onSortColumnChange: PropTypes.func.isRequired,
    onSortOrderChange: PropTypes.func.isRequired
};

export default LeagueTableHeaderComponent;