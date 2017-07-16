import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import LeagueNameEditContainer from './league-name-edit-container';
import TeamListConatiner from './team-list-container';
import AddTeamContainer from './add-team-container';
import LoadingSpinner from '../shared-components/loading-spinner';
import { findLeague } from '../selectors/data-selectors';

const ManageLeague = ({ loading }) => {
    return (
        <div>
            {(loading)
                ? <LoadingSpinner />
                : (
                    <div>
                        <div>
                            <LeagueNameEditContainer />
                        </div>
                        <Grid>
                            <Row className="show-grid">
                                <Col md={6}><TeamListConatiner />
                                    <AddTeamContainer /></Col>
                                <Col md={6}> </Col>
                            </Row>
                        </Grid>
                    </div>)}
        </div>
    );
};

const mapStateToProps = (state) => {
    const { loading } = state.ui;
    return {
        loading
    };
};

ManageLeague.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(ManageLeague);