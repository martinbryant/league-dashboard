import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import LeagueNameEditContainer from './league-name-edit-container';
import TeamListConatiner from './team-list-container';
import AddTeamContainer from './add-team-container';

const ManageLeague = () => (
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
    </div>
);

export default ManageLeague;