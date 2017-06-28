import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

import EditForm from './edit-form-component';

const LeagueNameEditComponent = ({ leagueName, leagueId, inEditMode, editField, saveLeagueName, enableEditMode, cancelEdit, isNameUnique, openModal }) => {
    return (
        <div>
            <h3>Manage {leagueName}</h3>
            {(inEditMode && editField === 'leagueName')
                ? <EditForm
                    id="leagueName"
                    defaultText={leagueName}
                    saveTextFieldData={saveLeagueName}
                    resetEditMode={cancelEdit}
                    isNameUnique={isNameUnique} />
                : <ButtonToolbar>
                    <Button
                        type="button"
                        id="leagueName"
                        bsStyle="primary"
                        disabled={inEditMode}
                        onClick={enableEditMode}>
                        <Glyphicon
                            id="leagueName"
                            glyph="edit" /></Button>
                    <Button
                        type="button"
                        id={leagueId}
                        value={leagueName}
                        bsStyle="danger"
                        disabled={inEditMode}
                        onClick={openModal}>
                        <Glyphicon
                            glyph="remove" /></Button>
                </ButtonToolbar>}
        </div>
    );
};

LeagueNameEditComponent.propTypes = {
    leagueName: PropTypes.string.isRequired,
    leagueId: PropTypes.string.isRequired,
    inEditMode: PropTypes.bool.isRequired,
    editField: PropTypes.string.isRequired,
    saveLeagueName: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    enableEditMode: PropTypes.func.isRequired,
    isNameUnique: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
};

export default LeagueNameEditComponent;