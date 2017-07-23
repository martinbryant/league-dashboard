import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import LeagueTableHeaderContainer from './league-table-header-container';
import LeagueTableRowComponent from './league-table-row-component';

const LeagueTableComponent = ({ teams }) => (
    <Table striped bordered condensed hover>
        <thead>
            <LeagueTableHeaderContainer />
        </thead>
        <tbody>
            {teams.map(team => {
                return <LeagueTableRowComponent key={team._id} {...team} />;
            })}
        </tbody>
    </Table>
);

LeagueTableComponent.propTypes = {
    teams: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        teamName: PropTypes.string.isRequired,
        played: PropTypes.number.isRequired,
        won: PropTypes.number.isRequired,
        drawn: PropTypes.number.isRequired,
        lost: PropTypes.number.isRequired,
        shotsFor: PropTypes.number.isRequired,
        shotsAgainst: PropTypes.number.isRequired,
        shotsDifference: PropTypes.number.isRequired,
        points: PropTypes.number.isRequired
    })).isRequired
};

export default LeagueTableComponent;