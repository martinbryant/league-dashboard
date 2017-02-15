import { connect } from 'react-redux';

import {reOrderTable} from './homePageActions';

import LeagueTableHeaderComponent from './LeagueTableHeaderComponent';

const mapStateToProps = (state) => {
    return {
        columns: state.tableColumns
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (e) => {
            dispatch(reOrderTable(e.target.value));
        }
    };
};

const LeagueTableHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(LeagueTableHeaderComponent);

export default LeagueTableHeaderContainer;