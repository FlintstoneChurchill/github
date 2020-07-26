import React, {Component} from "react";
import {Alert} from "reactstrap";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    componentDidMount() {
      this.interceptorId = axios.interceptors.response.use(res => {
        return res;
      }, error => {
        this.setState({error});
        return Promise.reject(error);
      });
    }

    componentWillUnmount() {
      axios.interceptors.response.eject(this.interceptorId);
    }

    errorDismissedHandler = () => {
      this.setState({error: null});
    };

    render() {
      return (
        <>
          <Alert color="danger" isOpen={this.state.error} toggle={this.errorDismissedHandler}>
            Error message
          </Alert>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }
};

export default withErrorHandler;
