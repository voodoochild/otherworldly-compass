import React, { Component } from 'react';

import investigators from '../data/investigators';

class Investigators extends Component {
  state = {
    edit: false,
    investigator: ''
  };

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.add(this.state.name);
    this.setState({ name: '' });
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  dropdown() {
    const groups = Object.keys(investigators);
    const ineligible = this.props.items.map(item => item.name);

    return (
      <select name="name" value={this.state.name} onChange={this.onChange}>
        <option value="" />
        {groups.map(group => (
          <optgroup label={group} key={group}>
            {investigators[group].map(name => (
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
    const { edit } = this.state;
    const { items } = this.props;

    return (
      <div className="investigators">
        <h2>Investigators</h2>
        <button type="button" onClick={this.toggleEdit}>
          {edit ? 'Close' : 'Edit'}
        </button>
        {Boolean(items.length) && (
          <ul>
            {items.map(({ name }) => (
              <li key={name}>
                {name}
                {edit && (
                  <button type="button" onClick={() => this.props.remove(name)}>
                    x
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
        {edit && items.length < 4 && (
          <form onSubmit={this.onSubmit}>
            {this.dropdown()}
            <button type="submit">Add</button>
          </form>
        )}
      </div>
    );
  }
}

export default Investigators;
