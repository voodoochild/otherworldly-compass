import React, { Component } from 'react';

import sets from '../data/sets';

class ScenarioChooser extends Component {
  state = {
    name: ''
  };

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.choose(this.state.name);
  }

  dropdown() {
    const groups = Object.keys(sets);
    const ineligible = this.props.completed.map(item => item.name);

    return (
      <select name="name" value={this.state.name} onChange={this.onChange}>
        <option value="" />
        {groups.map(group => (
          <optgroup label={group} key={group}>
            {sets[group].map(name => (
              <option key={name} disabled={ineligible.indexOf(name) !== -1}>
                {name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div className="scenarioChooser">
        <h2>Choose your next scenario</h2>
        <form onSubmit={this.onSubmit}>
          {this.dropdown()}
          <button type="submit">OK</button>
        </form>
      </div>
    );
  }
}

export default ScenarioChooser;
