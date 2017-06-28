import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

import { openDeleteModal, closeDeleteModal } from '../actions/ui-actions';
import { deleteField } from '../actions/data-actions';

const DeleteModal = ({ id, name, field, isOpen, confirmAction, cancelAction }) => {
    return (
        <div className="static-modal">
            <Modal show={isOpen} >
                <Modal.Header>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you wish to delete {name}
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="danger" onClick={cancelAction}>Cancel</Button>
                    <Button
                        type="button"
                        bsStyle="success"
                        id={id}
                        value={field}
                        onClick={confirmAction}>Delete {name}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

DeleteModal.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    field: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    confirmAction: PropTypes.func.isRequired,
    cancelAction: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        ...state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        cancelAction: (e) => {
            dispatch(closeDeleteModal());
        },
        confirmAction: (e) => {
            const { id, value } = e.target;
            dispatch(deleteField(value, id));
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);