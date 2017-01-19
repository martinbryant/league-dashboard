import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';

import * as leagueActions from '../actions/leagueActions';
import CoreTextBox from './core/CoreTextBox';
import CoreButton from './core/CoreButton';

class AddLeague extends Component {
    constructor(props) {
        super(props);
        this.changeText = this.changeText.bind(this);
        this.saveLeague = this.saveLeague.bind(this);
        this.state = {
            textValue: '',
            isButtonDisabled: true
        };
    }

    changeText(value) {
        this.setState({ textValue: value, 
            isButtonDisabled: (!value) ? true : false });
    }

    saveLeague() {
        console.log(this.state.textValue);
    }

    render() {
        return (
            <div>
                <h2>Add new League</h2>
                <CoreTextBox
                    textValue={this.state.textValue}
                    textName="leagueName"
                    placeholder="Enter league name"
                    changeText={this.changeText} />
                <CoreButton
                    disabled={this.state.isButtonDisabled}
                    buttonClick={this.saveLeague}
                    buttonText="Save league" />
            </div>
        );
    }
}

AddLeague.propTypes = {
    league: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        league: { leagueName: '' }
    };
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps)(AddLeague);