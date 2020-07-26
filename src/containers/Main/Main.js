import React, {Component} from "react";
import {connect} from "react-redux";
import withLoader from "../../HOC/withLoader";
import withNetworkError from "../../HOC/withNetworkError";
import {getUser} from "../../store/actions/usersActions";
import UserInfo from "../../components/UserInfo/UserInfo";

class Main extends Component {
  state = {
    copied: false
  };

  componentDidMount() {
    this.props.getUser("flintstoneChurchill");
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