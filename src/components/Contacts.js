'use strict';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactList from './ContactList';
import ChipItem from './ChipItem';
import {
  fetchContacts,
  searchContact,
  selectContact,
} from '../action/ActionContacts';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chipList: [] };
    this.textInput = React.createRef();
    this.onSearch = this.onSearch.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onRemoveHandler = this.onRemoveHandler.bind(this);
  }

  static get propTypes() {
    return {
      dispatch: PropTypes.any,
      massage: PropTypes.string,
      searchKeyword: PropTypes.string,
      contacts: PropTypes.array,
      displayContacts: PropTypes.array,
      selectedContact: PropTypes.object,
      onSearch: PropTypes.functions,
      onAddHandler: PropTypes.functions,
      fetchContacts: PropTypes.functions,
      onRemoveHandler: PropTypes.functions,
    };
  }

  onSearch(event) {
    this.props.onSearch(event.target.value, this.props.contacts);
  }

  onAddHandler(item) {
    let chipList = this.state.chipList;
    chipList.push(item);
    this.setState({ chipList: chipList });
  }

  onRemoveHandler(index) {
    let chipList = this.state.chipList;
    chipList.splice(index, 1);
    this.setState({ chipList: chipList });
  }

  componentDidMount() {
    this.props.fetchContacts();
    if (this.textInput.current) this.textInput.current.focus();
  }

  render() {
    let chipList = this.state.chipList;
    if (
      this.props.contacts == null ||
      this.props.contacts == undefined ||
      this.props.contacts.length === 0 ||
      this.props.contacts.length == undefined
    ) {
      return <div className="alert-box">{this.props.massage}</div>;
    }
    let chipListItems = [];
    chipList.map((item, index) => {
      chipListItems[item.index] = (
        <ChipItem
          user={item}
          index={index}
          onRemoveHandler={this.onRemoveHandler}
        />
      );
    });

    return (
      <div className="contacts">
        <div className="search_box">
          {chipListItems}
          <input
            type="text"
            ref={this.textInput}
            className="search_input"
            onChange={this.onSearch}
            placeholder="Search Contact..."
            value={this.props.searchKeyword}
          />
        </div>
        <div className="contactlist_box">
          <ContactList
            massage={this.props.massage}
            onAddHandler={this.onAddHandler}
            dbContactsList={this.props.displayContacts}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>
  state.contact
    ? {
        massage: state.contact.massage,
        contacts: state.contact.contacts,
        searchKeyword: state.contact.searchKeyword,
        selectedContact: state.contact.selectedContact,
        displayContacts: state.contact.displayContacts,
      }
    : {};

const mapActionToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
  onSearch: (searchKeyword, contacts) =>
    dispatch(searchContact(searchKeyword, contacts)),
  onSelect: contact => dispatch(selectContact(contact)),
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Contacts);
