import React from "react";
import PropTypes from "prop-types";

const Email = ({user}) => {
  return (
    <>
      {user.email ? <a
        className="d-block"
        href={`mailto:${user.email}`}
      >
        {user.email}
      </a> : null}
    </>
  );
};

Email.propTypes = {
  user: PropTypes.object.isRequired
};

export default Email;