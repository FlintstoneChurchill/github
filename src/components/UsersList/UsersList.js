import React from "react";
import {CardColumns} from "reactstrap";
import PropTypes from "prop-types";
import UserItem from "../UserItem/UserItem";

const UsersList = ({users}) => {
  return (
    <CardColumns>
      {
        users.map(user => {
          return (
            <UserItem key={user.id} user={user} />
          );
        })
      }
    </CardColumns>
  );
};

UserItem.propTypes = {
  users: PropTypes.array.isRequired
};

export default UsersList;