import React from "react";
import Panel from "./Panel";
import "./Profession.css";

class Login extends React.Component {
  /* since we are using react-router-dom for navigation, a history object is passed
       down as a prop to all child components of Router.
    */
  history = this.props.history;

  render() {
    return (
      <div className="Profession">
        <Panel title="Health Worker" />
        <p className="continue">continue as...</p>
        <div>
          <button
            onClick={() => this.history.push("/profession")}
            className="btn btn-client"
          >
            Clinician
          </button>
        </div>
        <div>
          <button
            onClick={() => this.history.push("/profession")}
            className="btn btn-client"
          >
            Nurse
          </button>
        </div>
        <div>
          <button
            onClick={() => this.history.push("/profession")}
            className="btn btn-client"
          >
            Health Educator
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
