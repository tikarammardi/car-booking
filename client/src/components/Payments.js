import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
class Paymants extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIP_PK}
      >
        {' '}
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Book Now
          <i className="material-icons right">send</i>
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Paymants);
