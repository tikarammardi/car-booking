import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { selectTrip } from '../actions';

class Card extends React.Component {
  renderList = () => {
    return this.props.trips.map((trip, i) => {
      return (
        <li key={i} className="tab">
          <button
            className="btn black"
            onClick={() => this.props.selectTrip(trip)}
          >
            {trip.title}
          </button>
        </li>
      );
    });
  };
  render() {
    return (
      <div className="card small">
        <div className="card-content"></div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">{this.renderList()}</ul>
        </div>
        <div className="card-content grey lighten-4">
          <Form />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { trips: state.trips };
};

export default connect(
  mapStateToProps,
  { selectTrip }
)(Card);
