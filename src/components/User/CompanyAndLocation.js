import React from "react";
import PropTypes from "prop-types";

const CompanyAndLocation = ({user}) => {
  let companyAndLocation = null;
  if (user.company || user.location) {
    companyAndLocation = <p>
      {user.company}
      {user.location ? <em className="d-block">{user.location}</em> : null}
    </p>
  }
  return companyAndLocation;
};

CompanyAndLocation.propTypes = {
  user: PropTypes.object.isRequired
};

export default CompanyAndLocation;