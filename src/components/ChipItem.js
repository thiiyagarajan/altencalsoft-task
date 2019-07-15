'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChipItem extends Component {
  constructor(props) {
    super(props);
    this.onRemoveHandler = this.onRemoveHandler.bind(this);
  }

  static get propTypes() {
    return {
      index: PropTypes.number,
      user: PropTypes.object,
      onRemoveHandler: PropTypes.func,
    };
  }

  onRemoveHandler() {
    this.props.onRemoveHandler(this.props.index);
  }

  render() {
    return (
      <div className="chipitem">
        <img className="avatar" src ={this.props.user.avatar} />
        <div className="mail">
          {`${this.props.user.firstName} ${this.props.user.lastName}`}
        </div>
        <div className="btn_close" onClick={this.onRemoveHandler}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/macos-close.png"/>
        </div>  
      </div>
    );
  }
}
