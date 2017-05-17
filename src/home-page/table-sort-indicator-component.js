import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SORT_ARROW_UP, SORT_ARROW_DOWN } from '../constants';

const TableSortIndicatorComponent = ({ sortOrder, onSortOrderChange }) => {
    return (
        <span style={{ float: 'right' }}
            id={sortOrder}
            className={(sortOrder == 'desc') ? SORT_ARROW_DOWN : SORT_ARROW_UP}
            onClick={onSortOrderChange} />
    );
};

TableSortIndicatorComponent.propTypes = {
    sortOrder: PropTypes.string.isRequired,
    onSortOrderChange: PropTypes.func.isRequired
};

export default TableSortIndicatorComponent;