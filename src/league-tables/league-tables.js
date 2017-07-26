import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

import LeagueDropdownContainer from './league-dropdown-container';
import LeagueTableContainer from './league-table-container';
import FixtureListContainer from './fixture-list-container';
import ResultListContainer from './result-list-container';
import LeagueControlsContainer from './league-controls-container';

const LeagueTables = () => (
    <div>
        <DocumentTitle title="Tables" />
        <LeagueDropdownContainer />
        <Grid>
            <Row className="show-grid">
                <Col md={8}><LeagueTableContainer /><LeagueControlsContainer /></Col>
                <Col md={4}><h4>Fixtures</h4><FixtureListContainer /><br />
                    <h4>Results</h4><ResultListContainer /></Col>
            </Row>
        </Grid>
    </div>
);

export default LeagueTables;