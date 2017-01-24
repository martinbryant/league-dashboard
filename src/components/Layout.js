import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as leagueActions from '../actions/leagueActions';
// import LeagueDropdown from './LeagueDropdown';
import TableView from './TableView';
import FixtureView from './FixtureView';
import ResultView from './ResultView';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.changeLeague = this.changeLeague.bind(this);
        this.state = {
            selectedLeague: Object.assign({}, props.leagues[0])
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.leagues[0] != this.state.selectedLeague) {
            this.setState({ selectedLeague: nextProps.leagues[0] });
        }
    }

    changeLeague(league) {
        let findLeague = function (l) {
            return l._id === league;
        };
        let newLeague = this.props.leagues.find(findLeague);
        this.setState({ selectedLeague: newLeague });
    }

    addNewLeague(){
        browserHistory.push('/add-league');
    }

    editLeague(leagueId){
        browserHistory.push('/manage-league/' + leagueId);
    }

    render() {
        return (
            <div>
                
                <div>
                    <Grid>
                        <Row className="show-grid">
                            <Col md={8}><TableView league={this.state.selectedLeague} addNewLeague={this.addNewLeague} editLeague={this.editLeague} /></Col>
                            <Col md={4}><h4>Fixtures</h4><FixtureView fixtures={this.state.selectedLeague.fixtures} /><br />
                                <h4>Results</h4><ResultView fixtures={this.state.selectedLeague.fixtures} /></Col>
                        </Row>
                    </Grid>
                </div>

            </div>
        );
    }
}

Layout.propTypes = {
    dispatch: PropTypes.func.isRequired,
    leagueDropdown: PropTypes.array.isRequired,
    leagues: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    if (state.leagues.length > 0) {
        return {
            leagues: state.leagues,
            leagueDropdown: state.leagues.map(function (league) {
                return {
                    leagueName: league.leagueName,
                    _id: league._id
                };
            })
        };
    } else {
        return {
            leagues: [{ teams: [], fixtures: [] }],
            leagueDropdown: []
        };
    }
}

function mapDispatchToProps() {

}

export default connect(mapStateToProps)(Layout);

// <div>
//                     <LeagueDropdown leagueNames={this.props.leagueDropdown} changeLeague={this.changeLeague} />
//                 </div>