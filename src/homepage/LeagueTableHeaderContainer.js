import { connect } from 'react-redux';

import { sortTableByColumn, toggleSortOrder } from './homePageActions';

import LeagueTableHeaderComponent from './LeagueTableHeaderComponent';

const mapStateToProps = (state) => {
    const {tableColumns, sortOrder, sortColumn} = state;
    return {
        tableColumns,
        sortOrder,
        sortColumn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortColumnChange: (e) => {
            dispatch(sortTableByColumn(e.target.value));
        },
        onSortOrderChange: (e) =>{
            let order = (e.target.value == 'desc') ? 'asc' : 'desc';
            dispatch(toggleSortOrder(order));
        }
    };
};

const LeagueTableHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(LeagueTableHeaderComponent);

export default LeagueTableHeaderContainer;