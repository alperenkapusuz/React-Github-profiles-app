import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";


const ProfilesCard = ({userStats}) => {  

  return (
    <div>
      <Card>
        <Image src={userStats.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{userStats.name}</Card.Header>
          <Card.Meta>
            <span className="date">{userStats.login}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {userStats.followers}
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {userStats.following}
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {userStats.public_repos}
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProfilesCard;
