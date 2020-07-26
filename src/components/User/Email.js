import React from "react";

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

export default Email;