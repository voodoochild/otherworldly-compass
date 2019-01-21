import React, { Component } from 'react';

import globalState from '../globalState';
import Investigators from './Investigators';
import ScenarioChooser from './ScenarioChooser';
import Scenario from './Scenario';

class Campaign extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.addInvestigator = this.addInvestigator.bind(this);
    this.removeInvestigator = this.removeInvestigator.bind(this);
    this.chooseScenario = this.chooseScenario.bind(this);
  }

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

  chooseScenario(name) {
    this.setState({
      scenario: name
    });
  }

  render() {
    return (
      <div className="campaign">
        <Investigators
          items={this.state.investigators}
          add={this.addInvestigator}
          remove={this.removeInvestigator}
        />
        {this.state.scenario === null && (
          <ScenarioChooser
            completed={this.state.completed}
            choose={this.chooseScenario}
          />
        )}
        {this.state.scenario !== null && (
          <Scenario name={this.state.scenario} />
        )}
      </div>
    );
  }
}

export default Campaign;
