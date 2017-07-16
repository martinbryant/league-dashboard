import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TeamListComponent from './team-list-component';
import { enableEditMode, disableEditMode, openDeleteModal } from '../actions/ui-actions';
import { editTeamName, deleteTeam } from '../actions/data-actions';
import { findTeamNamesAndIdForSelectedLeague, checkNameIsUnique } from '../selectors/data-selectors';

const mapStateToProps = (state, ownProps) => {
    const { inEditMode, editField, showModal, selectedLeague } = state.ui;
    const { leagues, teams } = state.data;
    return {
        inEditMode,
        editField,
        teams: findTeamNamesAndIdForSelectedLeague(leagues, teams, selectedLeague),
        isNameUnique: (name) => checkNameIsUnique(teams, name, 'teamName'),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        enableEditMode: e => {
            dispatch(enableEditMode(e.target.id));
        },
        saveTeamName: e => {
            e.preventDefault();
            const leagueId = e.target['0'].id;
            const teamNameText = e.target['0'].value;
            dispatch(editTeamName(leagueId, teamNameText));
            dispatch(disableEditMode());
        },
        deleteTeam: e => {
            const { id } = e.target;
            dispatch(deleteTeam(id));
        },
        cancelEdit: () => {
            dispatch(disableEditMode());
        },
        openModal: (e) => {
            let target;
            (e.target.nodeName === 'SPAN')
                ? target = e.target.parentNode
                : target = e.target;
            const { id, value } = target;
            dispatch(openDeleteModal(id, value, 'team'));
        }
    };
};

const TeamListContainer = connect(mapStateToProps, mapDispatchToProps)(TeamListComponent);

export default TeamListContainer;