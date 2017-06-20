import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

const TeamListRowComponent = ({ team, inEditMode, enableEditMode, deleteTeam }) => {
    return (
        <ListGroupItem
            key={team._id}>{team.teamName}
            <ButtonToolbar style={{ float: 'right' }}>
                <Button
                    type="button"
                    id={team._id}
                    bsStyle="primary"
                    bsSize="xsmall"
                    disabled={inEditMode}
                    onClick={enableEditMode}>
                    <Glyphicon
                        id={team._id}
                        glyph="edit" /></Button>
                <Button
                    type="button"
                    id={team._id}
                    bsStyle="danger"
                    bsSize="xsmall"
                    disabled={inEditMode}
                    onClick={deleteTeam}>
                    <Glyphicon
                        id={team._id}
                        glyph="remove" /></Button>
            </ButtonToolbar>
        </ListGroupItem>
    );
};

TeamListRowComponent.propTypes = {
    team: PropTypes.object.isRequired,
    inEditMode: PropTypes.bool.isRequired,
    enableEditMode: PropTypes.func.isRequired,
    deleteTeam : PropTypes.func.isRequired
};

export default TeamListRowComponent;