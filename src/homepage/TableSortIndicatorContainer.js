import { connect } from 'react-redux';

import { toggleSortOrder } from './homePageActions';
import TableSortIndicatorComponent from './TableSortIndicatorComponent';

const mapStateToProps = (state, ownProps) => {
    const {sortOrder, sortColumn} = state;
    const {sortField} = ownProps;
    return {
        sortOrder,
        sortColumn,
        sortField
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