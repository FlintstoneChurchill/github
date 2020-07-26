import React from "react";
import {Col, Row} from "reactstrap";
import Avatar from "../Avatar/Avatar";
import Email from "./Email";
import {Link} from "react-router-dom";
import CompanyAndLocation from "./CompanyAndLocation";

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
          >
            {user.url}
          </a>
          <Link to="/">Repositories</Link>
        </Col>
        <Col md={8}>
          <CompanyAndLocation user={user}/>
          <p>{user.bio || "There is no info about user"}</p>
        </Col>
      </Row>
    </>
  );
};

export default UserInfo;