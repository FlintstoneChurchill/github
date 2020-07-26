import React, {Component} from "react";
import {Form, FormGroup, Input} from "reactstrap";
import {connect} from "react-redux";
import {findUsers} from "../../store/actions/usersActions";
import UsersList from "../../components/UsersList/UsersList";

class UsersSearch extends Component {
  state = {
    search: ""
  };
  searchHandler = e => {
    this.props.findUsers(e.target.value);
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <>
        <h1>Users</h1>
        <Form className="mb-5">
          <FormGroup>
            <Input
              type="text"
              name="search"
              placeholder="Type here to start search"
              onChange={this.searchHandler}
              value={this.state.query}
            />
          </FormGroup>
        </Form>
        <div>
          {
            this.props.users.total_count ?
              <>
                <p>Total count: {this.props.users.total_count}</p>
                <UsersList users={this.props.users.items}/>
              </> :
              "No users found"
          }
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.foundUsers
  };
};
const mapDispatchToProps = dispatch => {
  return {
    findUsers: query => dispatch(findUsers(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersSearch);