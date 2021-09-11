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
          <p>
            <Icon name="star outline" />
            followers :
            {userStats.followers}
          </p>
        </Card.Content>
        <Card.Content extra>
          <p>
            <Icon name="user" />
            following :
            {userStats.following}
          </p>
        </Card.Content>
        <Card.Content extra>
          <p>
            <Icon name="github" />
            repos :
            {userStats.public_repos}
          </p>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProfilesCard;
