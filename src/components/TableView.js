import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

const TableView = ({league, addNewLeague, editLeague}) => {

  function handleAddLeague() {
    addNewLeague();
  }

  function handleEditLeague() {
    editLeague(league._id);
  }

  let sortedLeagueByPoints = league.teams.sort((a, b) => {
    return a.points + b.points;
  });

  let teamRows = sortedLeagueByPoints.map(function (team) {
    return (
      <tr key={team._id}>
        <td>{team.teamName}</td>
        <td>{team.played}</td>
        <td>{team.won}</td>
        <td>{team.drawn}</td>
        <td>{team.lost}</td>
        <td>{team.shotsFor}</td>
        <td>{team.shotsAgainst}</td>
        <td>{team.points}</td>
      </tr>);
  });
  return (
    <div>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>Shots For </th>
            <th>Shots Against</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teamRows}
        </tbody>
      </Table>
      <br />
      <Button onClick={handleAddLeague}>Add new league</Button>
      <Button onClick={handleEditLeague}>Edit league</Button>
    </div>
  );
};

TableView.propTypes = {
  league: React.PropTypes.object.isRequired,
  addNewLeague: React.PropTypes.func.isRequired,
  editLeague: React.PropTypes.func.isRequired
};

export default TableView;