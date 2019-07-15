'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSelectContactItem = this.onSelectContactItem.bind(this);
  }

  static get propTypes() {
    return {
      loading: PropTypes.bool,
      error: PropTypes.object,
      dbContactsList: PropTypes.array,
      onAddHandler: PropTypes.functions,
      onSelectContactItem: PropTypes.functions,
    };
  }

  onSelectContactItem(item) {
    this.props.onAddHandler(item);
  }

  render() {
    const { error, loading, dbContactsList } = this.props;

    if (error) return <div className="alert-box">error.message</div>;

    if (loading) return <div className="alert-box">Loading...</div>;

    return dbContactsList ? (
      <div className="contactlist">
        {dbContactsList.map(contact => {
          return (
            <ContactItem
              user={contact}
              key={contact.number}
              onSelect={this.onSelectContactItem}
            />
          );
        })}
      </div>
    ) : null;
  }
}
