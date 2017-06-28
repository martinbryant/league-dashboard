import React from 'react';
import PropTypes from 'prop-types';
import { Table, ListGroup, ListGroupItem, Button, ButtonGroup, ButtonToolbar, Glyphicon } from 'react-bootstrap';

import EditForm from './edit-form-component';
import TeamListRowComponent from './team-list-row-component';
import DeleteModal from './delete-modal';

const TeamListComponent = ({ teams, inEditMode, editField, enableEditMode, saveTeamName, deleteTeam, cancelEdit, isNameUnique, openModal }) => {
    return (
        <div>
            <ListGroup>
                {
                    teams.map(team => {
                        return (
                            (inEditMode && editField === team._id)
                                ? <EditForm
                                    key={team._id}
                                    id={team._id}
                                    defaultText={team.teamName}
                                    saveTextFieldData={saveTeamName}
                                    resetEditMode={cancelEdit}
                                    isNameUnique={isNameUnique} />
                                : <TeamListRowComponent
                                    key={team._id}
                                    team={team}
                                    inEditMode={inEditMode}
                                    enableEditMode={enableEditMode}
                                    openModal={openModal} />
                        );
                    })
                }
            </ListGroup>
            <DeleteModal />
        </div>
    );
};

TeamListComponent.propTypes = {
    teams: PropTypes.array.isRequired,
    inEditMode: PropTypes.bool.isRequired,
    editField: PropTypes.string.isRequired,
    enableEditMode: PropTypes.func.isRequired,
    saveTeamName: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    deleteTeam: PropTypes.func.isRequired,
    isNameUnique: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
};

export default TeamListComponent;