import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import scenarios from '../data/scenarios';
import strings from '../data/strings';

class Scenario extends Component {
  state = {
    name: this.props.name,
    data: scenarios[this.props.name],
    strings: strings[this.props.name]
  };

  intro() {
    return (
      <div className="intro">
        <ReactMarkdown source={this.state.strings.intro} />
      </div>
    );
  }

  setup() {
    return (
      <ol className="setup">
        {this.state.data.setup.map((id, i) => (
          <li key={`setup_${i}`}>
            <ReactMarkdown
              source={this.state.strings[id]}
              disallowedTypes={['paragraph']}
              unwrapDisallowed={true}
            />
          </li>
        ))}
      </ol>
    );
  }

  resolutions() {
    return (
      <div className="resolutions">
        {this.state.data.resolutions.map((res, i) => {
          return (
            <div key={`resolution_${i}`}>
              <ReactMarkdown source={this.state.strings[res[0]]} />
              {res.slice(1).map((outcome, j) => (
                <li key={`resolution_${i}_outcome_${j}`}>
                  <ReactMarkdown
                    source={this.state.strings[outcome]}
                    disallowedTypes={['paragraph']}
                    unwrapDisallowed={true}
                  />
                </li>
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    if (!this.state.data) {
      return <div>Scenario '{this.state.name}' not found</div>;
    }

    return (
      <div className="scenario">
        <h2>{this.state.name}</h2>
        {this.intro()}
        <h3>Setup</h3>
        {this.setup()}
        <h3>Resolutions</h3>
        {this.resolutions()}
      </div>
    );
  }
}

export default Scenario;
