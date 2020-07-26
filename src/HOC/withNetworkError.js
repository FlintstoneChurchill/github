import React, {Component} from "react";
import axios from "../axios-config";
import {Alert} from "reactstrap";

const withNetworkError = (WrappedComponent) => {
  return class extends Component {
    state = {
      error: null
    };

    interceptorId = axios.interceptors.response.use(res => {
      return res;
    }, error => {
      if (this.mounted) {
        this.setState({error});
      }
      return Promise.reject(error);
    });

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
      axios.interceptors.response.eject(this.interceptorId);
    }

    errorDismissedHandler = () => {
      this.setState({error: null});
    };

    render() {
      const {error} = this.state;
      return (
        <>
          <Alert color="danger" isOpen={error} toggle={this.errorDismissedHandler}>
            {error && error.message}
          </Alert>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }
};

export default withNetworkError;
