import React, { Component, PropTypes } from 'react';
import style from '../css/main.css';
export default class SearchBox extends Component {
  

  render () {
    return (
      <input className={style.searchBox}
        type="text"
        autoFocus="true"
        placeholder="Enter a key word for search"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      //this.props.addFriend(name);
    	this.props.search(name);
      this.setState({ name: '' });
    }
  }

}
