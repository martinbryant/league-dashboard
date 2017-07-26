import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

import LoginFormContainer from './login-form-container';

const LoginPage = () => (
    <div>
        <DocumentTitle title="Login" />
        <Grid>
            <Row className="show-grid">
                <Col md={4} />
                <Col md={4}><LoginFormContainer /> </Col>
                <Col md={4} />
            </Row>
        </Grid>
    </div>
);

export default LoginPage;