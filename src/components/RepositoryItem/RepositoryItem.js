import React from "react";
import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import PropTypes from "prop-types";

const RepositoryItem = ({repo, owner}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <a href={repo.html_url} rel="noopener noreferrer" target="_blank">
            {repo.name}
          </a>
        </CardTitle>
        <CardSubtitle>
          Owner: <a href={owner.html_url} rel="noopener noreferrer" target="_blank">
          {owner.login}
        </a>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

RepositoryItem.propTypes = {
  repo: PropTypes.object.isRequired,
  owner: PropTypes.object.isRequired
};

export default RepositoryItem;