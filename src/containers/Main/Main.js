import axios from "axios";
import React, {Component} from "react";

class Main extends Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const code = params.getAll("code")[0];
    console.log(code);
    if (code) {
      axios.post(
        "http://localhost:8000/auth/" + code,
        null,
        {
          headers: {
            Access: "application/json"
          }
        }).then(response => {
        console.log(response.data);
      });
    }
  }

  render() {
    return (
      <>
        <h1>Main page</h1>
        <a
          href="https://github.com/login/oauth/authorize?client_id=e70a76fe9747a74b5998&redirect_url=http://localhost:3000&scope=user">Login</a>
      </>
    );
  }
}

export default Main;