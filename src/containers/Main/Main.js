import React, {Component} from "react";
import withLoader from "../../HOC/withLoader";
import {connect} from "react-redux";
import withNetworkError from "../../HOC/withNetworkError";
import {getUser} from "../../store/actions/usersActions";
import UserInfo from "../../components/User/UserInfo";

class Main extends Component {
  state = {
    copied: false
  };

  componentDidMount() {
    this.props.getUser("octocat");
  }

  copyLinkToClipboard = e => {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.innerText);
    this.setState({copied: true});
    setTimeout(() => {
      this.setState({copied: false});
    }, 500);
  };

  render() {
    const {user} = this.props;
    if (!user) {
      return null;
    }

    console.log(user)
    return (
      <>
        <UserInfo
          user={user}
          copyLink={this.copyLinkToClipboard}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUser: username => dispatch(getUser(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withLoader(withNetworkError(Main)));