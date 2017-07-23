import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import LoginInfoContainer from './login-info-container';

const LoginBar = () => (
    <div>
        <Grid>
            <Row className="show-grid">
                <Col md={9} />
                <Col md={3}><LoginInfoContainer /></Col>
            </Row>
        </Grid>
    </div>
);

export default LoginBar;