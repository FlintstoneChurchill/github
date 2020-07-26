import React from "react";
import PropTypes from "prop-types";
import {CardColumns} from "reactstrap";
import RepositoryItem from "../RepositoryItem/RepositoryItem";

const RepositoriesList = ({repos}) => {
  return (
    <div className="RepositoriesList">
      <CardColumns>
        {
          repos.map(repo => {
            const {owner} = repo;
            return (
              <RepositoryItem
                key={repo.id}
                repo={repo}
                owner={owner}
              />
            );
          })
        }
      </CardColumns>
    </div>
  );
};

RepositoriesList.propTypes = {
  repos: PropTypes.array.isRequired
};

export default RepositoriesList;