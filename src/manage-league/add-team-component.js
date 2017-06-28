import React from 'react';
import PropTypes from 'prop-types';
import { Table, ListGroup, ListGroupItem, Button, ButtonGroup, ButtonToolbar, Glyphicon } from 'react-bootstrap';

import EditForm from './edit-form-component';

const AddTeamComponent = ({ inEditMode, editField, enableEditMode, saveTeamName, cancelEdit, isNameUnique }) => {
    return (
        <div>
            {(inEditMode && editField === 'newTeam')
                ? <EditForm
                    id="newTeam"
                    defaultText=""
                    saveTextFieldData={saveTeamName}
                    resetEditMode={cancelEdit}
                    isNameUnique={isNameUnique} />
                : <Button
                    type="button"
                    id="newTeam"
                    bsStyle="primary"
                    bsSize="small"
                    disabled={inEditMode}
                    onClick={enableEditMode}>
                    <Glyphicon
                        id="newTeam"
                        glyph="plus" /></Button>}
        </div>
    );
};

AddTeamComponent.propTypes = {
    inEditMode: PropTypes.bool.isRequired,
    editField: PropTypes.string.isRequired,
    enableEditMode: PropTypes.func.isRequired,
    saveTeamName: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    isNameUnique: PropTypes.func.isRequired
};

export default AddTeamComponent;