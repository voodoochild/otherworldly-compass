import React, { Component } from 'react';

import globalState from '../globalState';
import Investigators from './Investigators';

class Campaign extends Component {
  state = {};

  componentWillMount() {
    this.setState(globalState.createCampaign());
  }

  addInvestigator(name) {
    this.setState({
      investigators: [...this.state.investigators, { name }]
    });
  }

  removeInvestigator(name) {
    this.setState({
      investigators: this.state.investigators.filter(item => item.name !== name)
    });
  }

  render() {
    return (
      <div className="campaign">
        <Investigators
          items={this.state.investigators}
          add={this.addInvestigator.bind(this)}
          remove={this.removeInvestigator.bind(this)}
        />
      </div>
    );
  }
}

export default Campaign;
