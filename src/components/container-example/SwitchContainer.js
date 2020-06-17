import React, { Component } from 'react';
import FlagSwitch from './FlagSwitch';
import ViewFlagValue from './ViewFlagValue';

class SwitchContainer extends Component {
    constructor() {
        super();
        this.handleFlag= this.handleFlag.bind(this);
        this.state = {
            flag: false,
        }
    }

    handleFlag() {
        this.setState({flag : !this.state.flag});
    }
    render() {
        return (
            <div>
                <FlagSwitch clickHandler={this.handleFlag}></FlagSwitch>
                <ViewFlagValue flag={this.state.flag}></ViewFlagValue>
            </div>
        );
    }
};

export default SwitchContainer;