import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LeagueNameEditComponent from './league-name-edit-component';
import { findLeagueNameForSelectedLeague, checkNameIsUnique } from '../selectors/data-selectors';
import { enableEditMode, disableEditMode, openDeleteModal } from '../actions/ui-actions';
import { editLeagueNameSuccess } from '../actions/data-actions';

const mapStateToProps = (state, ownProps) => {
    const { inEditMode, editField } = state.ui;
    const { leagues } = state.data;
    const { leagueId } = ownProps.match.params;
    return {
        leagueName: findLeagueNameForSelectedLeague(leagues, leagueId),
        leagueId,
        inEditMode,
        editField,
        isNameUnique: (name) => checkNameIsUnique(leagues, name, 'leagueName')
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { leagueId } = ownProps;
    return {
        enableEditMode: (e) => {
            dispatch(enableEditMode(e.target.id));
        },
        saveLeagueName: (e) => {
            e.preventDefault();
            let leagueName = e.target['0'].value;
            dispatch(editLeagueNameSuccess(leagueId, leagueName));
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

const LeagueNameEditContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LeagueNameEditComponent));

export default LeagueNameEditContainer;