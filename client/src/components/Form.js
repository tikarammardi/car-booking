import React, { Component } from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import 'react-widgets/dist/css/react-widgets.css';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bookCar, selectTrip } from '../actions';
import Payments from './Payments';

Moment.locale('en');
momentLocalizer();

class Form extends Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div>
          <p className="red-text lighten-1">{error}</p>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    console.log('testing', input);
    return (
      <div className="input-field">
        <input {...input} placeholder={label} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderDateTimePicker = ({ input: { onChange, value, label }, showTime }) => {
    return (
      <DateTimePicker
        onChange={onChange}
        format="DD MMM YYYY"
        placeholder={label}
        alue={new Date()}
        time={showTime}
      />
    );
  };

  onSubmit = formValues => {
    this.props.bookCar(formValues);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="tripType"
          component={this.renderInput}
          label="Trip"
        ></Field>
        <Field
          name="startCity"
          component={this.renderInput}
          label="Depart From"
          value="Bangalore"
        ></Field>
        <Field
          name="destinationCity"
          component={this.renderInput}
          label="Going To "
        ></Field>
        <div>
          <label>Depature Date</label>
          <Field
            name="depature_date"
            label="Depature Date"
            component={this.renderDateTimePicker}
          />
          <label>Return Date</label>
          <Field
            name="return_date"
            showTime={true}
            component={this.renderDateTimePicker}
          />
        </div>
        <div>
          <Payments />
        </div>
      </form>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (!formValues.destinationCity) {
    //if form data is not there
    errors.destinationCity = 'Enter your Destination ';
  }

  return errors;
};

const mapStateToProps = state => {
  return { trips: state.trips, selectedTrip: state.selectedTrip };
};

const formWrapped = reduxForm({
  form: 'booking',
  validate
})(Form);

export default connect(
  mapStateToProps,
  { bookCar, selectTrip }
)(formWrapped);
