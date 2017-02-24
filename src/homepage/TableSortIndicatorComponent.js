import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { toggleSortOrder } from './homePageActions';
import { sortArrowUp, sortArrowDown } from '../constants';

const TableSortIndicatorComponent = ({sortField, sortOrder, sortColumn, onSortOrderChange}) => {
    return (
        (sortColumn == sortField) ?
            <span style={{ float: 'right' }}
                value={sortOrder}
                className={(sortOrder == 'desc') ? sortArrowDown : sortArrowUp}
                onClick={onSortOrderChange}>
            </span>
            : null
    );
};

TableSortIndicatorComponent.propTypes = {
    sortField: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
    sortColumn: PropTypes.string.isRequired,
    onSortOrderChange: PropTypes.func.isRequired
};

export default TableSortIndicatorComponent;