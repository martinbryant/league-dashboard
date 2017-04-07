import { connect } from 'react-redux';

import { toggleSortOrder } from './home-page-actions';
import TableSortIndicatorComponent from './table-sort-indicator-component';

const mapStateToProps = (state, ownProps) => {
    const {sortOrder, sortColumn} = state.ui;
    const {sortField} = ownProps;

    return {
        sortOrder,
        isSortIndicatorDisplayed : sortField == sortColumn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortOrderChange: (e) => {
            dispatch(toggleSortOrder(e.target.value));
        }
    };
};

const TableSortIndicatorContainer = connect(mapStateToProps, mapDispatchToProps)(TableSortIndicatorComponent);

export default TableSortIndicatorContainer;