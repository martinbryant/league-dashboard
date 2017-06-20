import { connect } from 'react-redux';

import TeamListComponent from './team-list-component';
import { enableEditMode, disableEditMode } from '../actions/ui-actions';
import { editTeam, deleteTeam } from '../actions/data-actions';
import { findTeamNamesAndIdForSelectedLeague, checkNameIsUnique } from '../selectors/data-selectors';

// change hardcoded leagueId for ownProps

const mapStateToProps = (state) => {
    const { inEditMode, editField } = state.ui;
    const { leagues, teams } = state.data;
    return {
        inEditMode,
        editField,
        teams: findTeamNamesAndIdForSelectedLeague(leagues, teams, "5776ce4e8c1880374cddd328"),
        isNameUnique: (name) => checkNameIsUnique(teams, name, 'teamName')

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        enableEditMode: e => {
            dispatch(enableEditMode(e.target.id));
        },
        saveTeamName: e => {
            e.preventDefault();
            let teamNameText = e.target['0'].value;
            let teamId = e.target['0'].id;
            dispatch(editTeam(teamId, teamNameText));
            dispatch(disableEditMode());
        },
        deleteTeam: e => {
            let teamId = e.target.id;
            dispatch(deleteTeam(teamId));
            dispatch(disableEditMode());
        },
        cancelEdit: () => {
            dispatch(disableEditMode());
        }
    };
};

const TeamListContainer = connect(mapStateToProps, mapDispatchToProps)(TeamListComponent);

export default TeamListContainer;