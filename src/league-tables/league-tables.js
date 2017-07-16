import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import LeagueDropdownContainer from './league-dropdown-container';
import LeagueTableContainer from './league-table-container';
import FixtureListContainer from './fixture-list-container';
import ResultListContainer from './result-list-container';
import LeagueControlsContainer from './league-controls-container';
import LoadingSpinner from '../shared-components/loading-spinner';

const LeagueTables = ({ loading }) => {
    return (
        <div>
            {(loading)
                ? <LoadingSpinner />
                : (
                    <div>
                        <LeagueDropdownContainer />
                        <Grid>
                            <Row className="show-grid">
                                <Col md={8}><LeagueTableContainer /><LeagueControlsContainer /></Col>
                                <Col md={4}><h4>Fixtures</h4><FixtureListContainer /><br />
                                    <h4>Results</h4><ResultListContainer /></Col>
                            </Row>
                        </Grid>
                    </div>)}
        </div>
    );
};

LeagueTables.propTypes = {
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    const { loading } = state.ui;
    return {
        loading
    };
};

export default connect(mapStateToProps)(LeagueTables);