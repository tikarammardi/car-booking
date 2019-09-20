import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bookCar } from '../actions';
class Form extends Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div>
          <p className="red lighten-1">{error}</p>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="input-field">
        <input {...input} placeholder={label} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.bookCar(formValues);
  };
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="startCity"
          component={this.renderInput}
          label="Depart From"
        ></Field>
        <Field
          name="destinationCity"
          component={this.renderInput}
          label="Going To "
        ></Field>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Book Now
          <i className="material-icons right">send</i>
        </button>
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

const formWrapped = reduxForm({
  form: 'booking',
  validate
})(Form);

export default connect(
  null,
  { bookCar }
)(formWrapped);
