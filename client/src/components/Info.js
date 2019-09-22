import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDriver } from '../actions';

class Info extends Component {
  componentDidMount() {
    this.props.fetchDriver();
  }
  render() {
    return <div>Information</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    driver: state.driver
  };
};
export default connect(
  mapStateToProps,
  { fetchDriver }
)(Info);
