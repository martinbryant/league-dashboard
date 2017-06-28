import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AddTeamComponent from './add-team-component';
import { enableEditMode, disableEditMode } from '../actions/ui-actions';
import { addTeam } from '../actions/data-actions';
import { checkNameIsUnique } from '../selectors/data-selectors';

// change hardcoded leagueId for ownProps

const mapStateToProps = (state) => {
    const { inEditMode, editField } = state.ui;
    const { leagues, teams } = state.data;
    return {
        inEditMode,
        editField,
        isNameUnique: (name) => checkNameIsUnique(teams, name, 'teamName')
    };
};

//ownProps for leagueId

const mapDispatchToProps = (dispatch, ownProps) => {
    const { leagueId } = ownProps.match.params;
    return {
        enableEditMode: e => {
            dispatch(enableEditMode(e.target.id));
        },
        saveTeamName: e => {
            e.preventDefault();
            let teamNameText = e.target['0'].value;
            dispatch(addTeam(leagueId, teamNameText));
            dispatch(disableEditMode());
        },
        cancelEdit: () => {
            dispatch(disableEditMode());
        }
    };
};

const AddTeamContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddTeamComponent));

export default AddTeamContainer;