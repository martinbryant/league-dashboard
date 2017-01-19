import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormControl, Button } from 'react-bootstrap';
import toastr from 'toastr';

import * as leagueActions from '../actions/leagueActions';

class ManageLeague extends Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSaveButton = this.handleSaveButton.bind(this);
        this.state = {
            league: {
                leagueName: props.league.leagueName
            },
            saveButtonActive: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.league != nextProps.league) {
            this.setState({
                league: { leagueName: nextProps.league.leagueName }
            });
        }
    }

    handleTextChange(e) {
        this.setState({
            league: { leagueName: e.target.value }
        });
        let active = (!e.target.value || e.target.value == this.props.league.leagueName) ? false : true;
        this.setState({ saveButton: active });
    }
    handleSaveButton() {
        this.setState({ saveButton: false });
        this.props.actions.changeLeagueName(this.props.league._id, this.state.league.leagueName)
            .then(() => toastr.success('League saved'))
            .catch(error => {
                toastr.error(error.response.data.leagueName.message);
                this.setState({
                    league: { leagueName: this.props.league.leagueName }
                });
            });
    }
    render() {
        return (
            <div>
                <h2>Manage {this.props.league.leagueName}</h2>
                <FormControl
                    name="leagueName"
                    type="text"
                    value={this.state.league.leagueName}
                    placeholder="Enter league name"
                    onChange={this.handleTextChange}
                    />
                <Button
                    disabled={!this.state.saveButton}
                    onClick={this.handleSaveButton}>Save League</Button>
            </div>
        );
    }
}

ManageLeague.propTypes = {
    league: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    if (!ownProps.params.id || !state.leagues.length > 0) {
        return {
            league: { leagueName: '' }
        };
    } else {
        let findLeague = function (l) {
            return l._id === ownProps.params.id;
        };
        let newLeague = state.leagues.find(findLeague);
        return {
            league: newLeague

        };
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(leagueActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageLeague);