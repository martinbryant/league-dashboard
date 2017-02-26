import { connect } from 'react-redux';

import { toggleSortOrder } from './home-page-actions';
import TableSortIndicatorComponent from './table-sort-indicator-component';

const mapStateToProps = (state, ownProps) => {
    const {sortOrder, sortColumn} = state;
    const {sortField} = ownProps;

    return {
        sortOrder,
        isSortIndicatorDisplayed : sortField == sortColumn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortOrderChange: (e) => {
            let order = (e.target.value == 'desc') ? 'asc' : 'desc';
            dispatch(toggleSortOrder(order));
        }
    };
};

const TableSortIndicatorContainer = connect(mapStateToProps, mapDispatchToProps)(TableSortIndicatorComponent);

export default TableSortIndicatorContainer;