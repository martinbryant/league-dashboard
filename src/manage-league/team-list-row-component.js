import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

const TeamListRowComponent = ({ team, inEditMode, enableEditMode, openModal }) => {
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
                    value={team.teamName}
                    bsStyle="danger"
                    bsSize="xsmall"
                    disabled={inEditMode}
                    onClick={openModal}>
                    <Glyphicon
                        glyph="remove" /></Button>
            </ButtonToolbar>
        </ListGroupItem>
    );
};

TeamListRowComponent.propTypes = {
    team: PropTypes.object.isRequired,
    inEditMode: PropTypes.bool.isRequired,
    enableEditMode: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
};

export default TeamListRowComponent;