import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { selectTrip } from '../actions';
import Landing from './Landing';

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
      <div className="">
        <Landing />
        <ul className="tabs ">{this.renderList()}</ul>
        <div className="">
          <Form />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { trips: state.trips };
};

export default connect(
  mapStateToProps,
  { selectTrip }
)(Card);
