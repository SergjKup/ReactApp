import React, { Component } from "react";
import { connect } from "react-redux";
import { getSession } from "../../Actions/Session";
import "./Profile.css";

class Login extends Component {
    createGuestSession = () => {
    if (this.props.token === null) {
      this.props.getSession(
        `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${this.props.apiKey}`,
        "guest"
      );
    } else if (this.props.token !== null) {
      this.props.getSession(this.props.token, "guest");
    } else {
      alert("Вы уже вошли!");
    }
  };

  render() {
    return (
      <div id="login-container">
        <div className="login-wrapper">
          <h1>Login</h1>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button>Login</button>
          <div></div>
          <button onClick={this.createGuestSession}>Guest Login</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  apiKey: state.apiKeyConfig.apiKey,
  token: state.session.token,
});

const mapDispatchToProps = (dispatch) => ({
  getSession: (url, session) => dispatch(getSession(url, session)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
