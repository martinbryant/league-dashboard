import { connect } from 'react-redux';

import LeagueNameEditComponent from './league-name-edit-component';
import { findLeagueNameForSelectedLeague, checkNameIsUnique } from '../selectors/data-selectors';
import { enableEditMode, disableEditMode } from '../actions/ui-actions';
import { editLeagueNameSuccess } from '../actions/data-actions';


//ownProps for leagueId

const mapStateToProps = (state, ownProps) => {
    const { inEditMode, editField } = state.ui;
    const { leagues } = state.data;
    const { leagueId } = ownProps;
    return {
        leagueName: findLeagueNameForSelectedLeague(leagues, "5776ce4e8c1880374cddd328"),
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
            dispatch(editLeagueNameSuccess("5776ce4e8c1880374cddd328", leagueName));
            dispatch(disableEditMode());
        },
        cancelEdit: () => {
            dispatch(disableEditMode());
        }
    };
};

const LeagueNameEditContainer = connect(mapStateToProps, mapDispatchToProps)(LeagueNameEditComponent);

export default LeagueNameEditContainer;