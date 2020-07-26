import React from "react";
import {Card, CardBody, CardTitle} from "reactstrap";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const UserItem = ({user}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <NavLink to={`/${user.login}/repos`}>
            {user.login}
          </NavLink>
        </CardTitle>
      </CardBody>
    </Card>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;