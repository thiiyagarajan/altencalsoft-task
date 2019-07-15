'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  static get propTypes() {
    return { user: PropTypes.object, onSelect: PropTypes.func };
  }

  onSelect() {
    this.props.onSelect(this.props.user);
  }

  render() {
    const { firstName, lastName, mail, avatar } = this.props.user;
    return (
      <div className="contactitem" onClick={this.onSelect}>
        <img className="avatar" src={avatar} />
        <div className="name">{firstName + ' ' + lastName}</div>
        <div className="mail"> {mail}</div>
      </div>
    );
  }
}
