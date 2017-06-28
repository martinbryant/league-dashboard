import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TeamListComponent from './team-list-component';
import { enableEditMode, disableEditMode, openDeleteModal } from '../actions/ui-actions';
import { editTeamName, deleteTeam } from '../actions/data-actions';
import { findTeamNamesAndIdForSelectedLeague, checkNameIsUnique } from '../selectors/data-selectors';

// change hardcoded leagueId for ownProps

const mapStateToProps = (state, ownProps) => {
    const { inEditMode, editField, showModal } = state.ui;
    const { leagues, teams } = state.data;
    const { leagueId } = ownProps.match.params;
    return {
        inEditMode,
        editField,
        teams: findTeamNamesAndIdForSelectedLeague(leagues, teams, leagueId),
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
            const { value, id } = e.target['0'];
            dispatch(editTeamName(value, id));
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

const TeamListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamListComponent));

export default TeamListContainer;