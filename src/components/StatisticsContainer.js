import React from "react";
import { Image,Container } from "semantic-ui-react";

const StatisticsContainer = ({ username }) => {
  return (
      <Container style={{display:"flex", width:"1150px", paddingTop:"100px"}}>
    <Image
     style={{width:"700px"}}
      src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
    />
    <Image
        style={{width:"590px"}}
      src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`}
    />
    </Container>
  );
};

export default StatisticsContainer;
