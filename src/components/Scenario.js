import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import scenarios from '../data/scenarios';
import strings from '../data/strings';

import OutcomeForm from './OutcomeForm';

class Scenario extends Component {
  state = {
    data: scenarios[this.props.name],
    strings: strings[this.props.name]
  };

  intro() {
    if (!this.state.data.intro) {
      return;
    }

    const _intro =
      typeof this.state.data.intro === 'function'
        ? this.state.data.intro(this.props)
        : this.state.data.intro;

    const introTxt = _intro.reduce(
      (acc, id) => (acc += `\n\r${this.state.strings[id]}`),
      ''
    );

    return (
      <div className="intro">
        <ReactMarkdown source={introTxt} />
      </div>
    );
  }

  setup() {
    if (!this.state.data.setup) {
      return;
    }

    const _setup =
      typeof this.state.data.setup === 'function'
        ? this.state.data.setup(this.props)
        : this.state.data.setup;

    return (
      <ol className="setup">
        {_setup.map((id, i) => (
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
    if (!this.state.data.resolutions) {
      return;
    }

    return (
      <div className="resolutions">
        {this.state.data.resolutions.map((res, i) => {
          const _res = typeof res === 'function' ? res(this.props) : res;

          return (
            <div key={`resolution_${i}`}>
              <ReactMarkdown source={this.state.strings[_res[0]]} />
              {_res.slice(1).map((outcome, j) => (
                <li key={`resolution_${i}_outcome_${j}`}>
                  {typeof outcome === 'string' && (
                    <ReactMarkdown
                      source={this.state.strings[outcome]}
                      disallowedTypes={['paragraph']}
                      unwrapDisallowed={true}
                    />
                  )}
                  {typeof outcome === 'object' && outcome.form && (
                    <OutcomeForm
                      strings={this.state.strings}
                      outcome={outcome}
                    />
                  )}
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
      return <div>Scenario '{this.props.name}' not found</div>;
    }

    return (
      <div className="scenario">
        <h2>{this.props.name}</h2>
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
