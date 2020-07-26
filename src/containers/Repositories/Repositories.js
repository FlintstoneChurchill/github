import React, {Component} from "react";
import {getRepositories} from "../../store/actions/reposActions";
import withLoader from "../../HOC/withLoader";
import withNetworkError from "../../HOC/withNetworkError";
import {connect} from "react-redux";
import RepositoriesList from "../../components/RepositoriesList/RepositoriesList";

class Repositories extends Component {
  componentDidMount() {
    const username = this.props.match.params.user;
    this.props.getRepos(username);
  }

  render() {
    return (
      <>
        <h1>Repositories</h1>
        <RepositoriesList repos={this.props.repos} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos.allRepos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRepos: (username) => dispatch(getRepositories(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withNetworkError(withLoader(Repositories)));