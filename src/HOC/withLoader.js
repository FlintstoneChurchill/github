import React, {Component} from "react";
import axios from "../axios-config";
import Loader from "../components/UI/Loader/Loader";

const withLoader = (WrappedComponent) => {
  return class extends Component {
    state = {
      loading: false
    };
    interceptorRequestId = axios.interceptors.request.use(req => {
      if(this.mounted) {
        this.setState({loading: true});
      }
      return req;
    });
    interceptorResponseId = axios.interceptors.response.use(res => {
      if(this.mounted) {
        this.setState({loading: false});
      }
      return res;
    }, err => {
      this.setState({loading: false});
      return Promise.reject(err);
    });

    componentDidMount() {
      this.mounted = true;
    }
    componentWillUnmount() {
      this.mounted = false;
      axios.interceptors.response.eject(this.interceptorRequestId);
      axios.interceptors.response.eject(this.interceptorResponseId);
    }

    render() {
      return (
        <>
          {this.state.loading ? <Loader /> : null}
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }
};

export default withLoader;
