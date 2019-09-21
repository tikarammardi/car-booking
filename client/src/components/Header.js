import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="123">
            <a className="btn black" href="/booking">
              Book
            </a>
          </li>,

          <li key="1fdfk">
            <a className="btn black" href="/auth/google">
              Login with G+
            </a>
          </li>
        ];
      default:
        return [
          <li key="2">
            <a className="btn black" href="/api/logout">
              Logout
            </a>
          </li>
        ];
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav className="light-blue accent-4">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? 'booking' : '/'}
            className="left brand-logo"
          >
            InstaCar
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(
  mapStateToProps,
  null
)(Header);
