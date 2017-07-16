import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LeagueNameEditComponent from './league-name-edit-component';
import { findLeagueNameForSelectedLeague, checkNameIsUnique } from '../selectors/data-selectors';
import { enableEditMode, disableEditMode, openDeleteModal } from '../actions/ui-actions';
import { editLeagueName } from '../actions/data-actions';

const mapStateToProps = (state, ownProps) => {
    const { inEditMode, editField, selectedLeague } = state.ui;
    const { leagues } = state.data;
    return {
        leagueName: findLeagueNameForSelectedLeague(leagues, selectedLeague),
        selectedLeague,
        inEditMode,
        editField,
        isNameUnique: (name) => checkNameIsUnique(leagues, name, 'leagueName')
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        enableEditMode: (e) => {
            dispatch(enableEditMode(e.target.id));
        },
        saveLeagueName: (e) => {
            e.preventDefault();
            const leagueName = e.target['0'].value;
            const leagueId = e.target[0].id;
            dispatch(editLeagueName(leagueId, leagueName));
            dispatch(disableEditMode());
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
            dispatch(openDeleteModal(id, value, 'league'));
        }
    };
};

const LeagueNameEditContainer = connect(mapStateToProps, mapDispatchToProps)(LeagueNameEditComponent);

export default LeagueNameEditContainer;