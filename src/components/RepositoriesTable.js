import React from "react";
import { List } from "semantic-ui-react";

const RepositoriesTable = ({ repo }) => {
  return (
    <div>
      <List divided relaxed>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">{repo.name}</List.Header>
            <List.Description as="a">Forks: {repo.forks}</List.Description>
            <List.Description as="a">Langugae: {repo.language}</List.Description>
            <List.Description as="a">Stars: {repo.stargazers_count}</List.Description>
          </List.Content>
          <hr/>
        </List.Item>
      </List>
    </div>
  );
};

export default RepositoriesTable;
