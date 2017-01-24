import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import LeagueDropdownContainer from '../homepage/LeagueDropdownContainer';
import LeagueTableContainer from '../homepage/LeagueTableContainer';
import FixtureListContainer from '../homepage/FixtureListContainer';
import ResultListContainer from '../homepage/ResultListContainer';
import LeagueControlsContainer from '../homepage/LeagueControlsContainer';

const HomePage = () => {
    return (
        <div>
            <LeagueDropdownContainer />
            <Grid>
                <Row className="show-grid">
                    <Col md={8}><LeagueTableContainer /><LeagueControlsContainer /></Col>
                    <Col md={4}><h4>Fixtures</h4><FixtureListContainer /><br/>
                    <h4>Results</h4><ResultListContainer /></Col>
                </Row>
            </Grid>
        </div>
    );
};

export default HomePage;