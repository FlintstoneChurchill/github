import React from "react";

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

export default CompanyAndLocation;