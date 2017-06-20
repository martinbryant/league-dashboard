import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { teamName, confirmAction } = this.props;
       return (
            <div className="static-modal">
                <Modal show="true">
                    <Modal.Header>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you wish to delete {teamName}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="error">Cancel</Button>
                        <Button bsStyle="success" onClick={confirmAction}>Delete {teamName}</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        );
    }
}

DeleteModal.propTypes = {
    teamName: PropTypes.string.isRequired,
    confirmAction: PropTypes.func.isRequired
};

export default DeleteModal;