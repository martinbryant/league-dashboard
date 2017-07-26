import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

import EditForm from './edit-form-component';

const LeagueNameEditComponent = ({
    leagueName,
    selectedLeague,
    inEditMode,
    editField,
    saveLeagueName,
    enableEditMode,
    cancelEdit,
    isNameUnique,
    openModal }) => (
        <div>
            <DocumentTitle title={`Manage ${leagueName}`} />
            <h3>Manage {leagueName}</h3>
            {(inEditMode && editField === 'leagueName')
                ? <EditForm
                    id={selectedLeague}
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
                        id={selectedLeague}
                        value={leagueName}
                        bsStyle="danger"
                        disabled={inEditMode}
                        onClick={openModal}>
                        <Glyphicon
                            glyph="remove" /></Button>
                </ButtonToolbar>}
        </div>
    );

LeagueNameEditComponent.propTypes = {
    leagueName: PropTypes.string.isRequired,
    selectedLeague: PropTypes.string.isRequired,
    inEditMode: PropTypes.bool.isRequired,
    editField: PropTypes.string.isRequired,
    saveLeagueName: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    enableEditMode: PropTypes.func.isRequired,
    isNameUnique: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
};

export default LeagueNameEditComponent;