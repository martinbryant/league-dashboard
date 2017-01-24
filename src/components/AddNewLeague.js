import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const AddNewLeague = () => {
    return (
        <Grid>
            <Row className="show-grid">
                <Col md={8}><h3>Choose New League Name</h3><SetLeagueName /></Col>
                <Col md={4}>Warnings</Col>
            </Row>
        </Grid>
    );
};

export default AddNewLeague;