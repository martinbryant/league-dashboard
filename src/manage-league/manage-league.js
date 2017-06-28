import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import LeagueNameEditContainer from './league-name-edit-container';
import TeamListConatiner from './team-list-container';
import AddTeamContainer from './add-team-container';
import LoadingSpinner from './loading-spinner';
import { findLeague } from '../selectors/data-selectors';

const ManageLeague = ({ loading, league }) => {
    return (
        <div>
            {(loading)
                ? (<LoadingSpinner />)
                : (!league)
                    ? <Redirect to={{
                        pathname: '/'
                    }} />
                    : (<div>
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

const mapStateToProps = (state, ownProps) => {
    const { loading } = state.ui;
    const { leagues } = state.data;
    const { leagueId } = ownProps.match.params;
    return {
        loading,
        league: findLeague(leagues, leagueId)
    };
};

ManageLeague.propTypes = {
    loading: PropTypes.bool.isRequired,
    league: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(ManageLeague));