import React from "react";
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import CompanyAndLocation from "./CompanyAndLocation";
import Email from "./Email";
import Avatar from "../Avatar/Avatar";

const UserInfo = ({user, copyLink}) => {
  return (
    <>
      <h1>
        {user.name}
        <small className="d-block">{user.login}</small>
      </h1>
      <Row>
        <Col md={4}>
          <Avatar user={user}/>
          <Email user={user}/>
          <a
            href="/"
            className="d-block"
            onClick={copyLink}
            id="link"
            title="Copy to clipboard"
          >
            {user.html_url} ⎘
          </a>
          <Link to={`/${user.login}/repos`}>Repositories</Link>
        </Col>
        <Col md={8}>
          <CompanyAndLocation user={user}/>
          <p>{user.bio || "There is no info about user"}</p>
        </Col>
      </Row>
    </>
  );
};

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
  copyLink: PropTypes.func.isRequired,
  copied: PropTypes.bool
};

export default UserInfo;