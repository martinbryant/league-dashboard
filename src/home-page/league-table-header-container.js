import { connect } from 'react-redux';

import { sortTableByColumn, toggleSortOrder } from '../actions/ui-actions';

import LeagueTableHeaderComponent from './league-table-header-component';

const mapStateToProps = (state) => {
    const { tableColumns, sortOrder, sortColumn } = state.ui;
    return {
        tableColumns,
        sortOrder,
        sortColumn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortColumnChange: (e) => {
            dispatch(sortTableByColumn(e.target.id));
        }
    };
};

const LeagueTableHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(LeagueTableHeaderComponent);

export default LeagueTableHeaderContainer;