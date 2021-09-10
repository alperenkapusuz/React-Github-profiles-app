import React, { useState } from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";
import RepositoriesTable from "./components/RepositoriesTable";
import ProfilesCard from "./components/ProfilesCard";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [userStats, setUserStats] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
    searchUsersStats()
  }

  function searchUsersStats() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}`,
    }).then((res) => {
      setLoading(false);
      setUserStats(res.data);
    });
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
  }

  function renderRepo(repo) {
    return <RepositoriesTable repo={repo} />;
  }

  return (
    <div>
      <div className="form-div">
        <Form className="form">
          <Form.Group>
            <Form.Input
              placeholder="username"
              name="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Button content="Search" onClick={handleSubmit}>
              {loading ? "Searching..." : "Search"}
            </Form.Button>
          </Form.Group>
        </Form>
      </div>
      <div><ProfilesCard userStats={userStats} /></div>
      <div>{repos.map(renderRepo)}</div>
    </div>
  );
};

export default App;
