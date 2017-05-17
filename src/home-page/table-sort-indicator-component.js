import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sortArrowUp, sortArrowDown } from '../constants';

const TableSortIndicatorComponent = ({ sortOrder, isSortIndicatorDisplayed, onSortOrderChange}) => {
    return (
        (isSortIndicatorDisplayed) ?
            <span style={{ float: 'right' }}
                id={sortOrder}
                className={(sortOrder == 'desc') ? sortArrowDown : sortArrowUp}
                onClick={onSortOrderChange}>
            </span>
            : null
    );
};

TableSortIndicatorComponent.propTypes = {
    sortOrder: PropTypes.string.isRequired,
    isSortIndicatorDisplayed : PropTypes.bool.isRequired,
    onSortOrderChange: PropTypes.func.isRequired
};

export default TableSortIndicatorComponent;