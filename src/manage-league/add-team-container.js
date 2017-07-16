import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AddTeamComponent from './add-team-component';
import { enableEditMode, disableEditMode } from '../actions/ui-actions';
import { addTeam } from '../actions/data-actions';
import { checkNameIsUnique } from '../selectors/data-selectors';

// change hardcoded leagueId for ownProps

const mapStateToProps = (state) => {
    const { inEditMode, editField, selectedLeague } = state.ui;
    const { teams } = state.data;
    return {
        inEditMode,
        editField,
        isNameUnique: (name) => checkNameIsUnique(teams, name, 'teamName'),
        selectedLeague
    };
};

//ownProps for leagueId

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        enableEditMode: e => {
            dispatch(enableEditMode(e.target.id));
        },
        saveTeamName: e => {
            e.preventDefault();
            const leagueId = e.target['0'].id;
            const teamNameText = e.target['0'].value;
            dispatch(addTeam(leagueId, teamNameText));
            dispatch(disableEditMode());
        },
        cancelEdit: () => {
            dispatch(disableEditMode());
        }
    };
};

const AddTeamContainer = connect(mapStateToProps, mapDispatchToProps)(AddTeamComponent);

export default AddTeamContainer;