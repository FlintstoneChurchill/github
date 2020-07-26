import React, {Component} from "react";
import Loader from "../../components/UI/Loader/Loader";

const withLoader = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false
      };

      this.interceptorRequestId = axios.interceptors.request.use(req =>{
        this.setState({loading: true});
        return req;
      });

      this.interceptorResponseId = axios.interceptors.response.use(res => {
        this.setState({loading: false});
        return res;
      }, err => {
        this.setState({loading: false});
        return Promise.reject(err);
      });
    }

    componentWillUnmount() {
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
