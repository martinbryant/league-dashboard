import { connect } from 'react-redux';

import AddTeamComponent from './add-team-component';
import { enableEditMode, disableEditMode} from '../actions/ui-actions';
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

const mapDispatchToProps = (dispatch) => {
    return {
        enableEditMode: e => {
            dispatch(enableEditMode(e.target.id));
        },
        saveTeamName: e => {
            e.preventDefault();
            let teamNameText = e.target['0'].value;
            dispatch(addTeam("5776ce4e8c1880374cddd328", teamNameText));
            dispatch(disableEditMode());
        },
        cancelEdit: () => {
            dispatch(disableEditMode());
        }
    };
};

const AddTeamContainer = connect(mapStateToProps, mapDispatchToProps)(AddTeamComponent);

export default AddTeamContainer;