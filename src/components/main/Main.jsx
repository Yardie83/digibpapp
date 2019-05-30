import React, { useRef } from "react";
import { Grid, Segment, Ref } from "semantic-ui-react";

const Main = props => {
  const contextRef = useRef();

  return (
      <Grid centered columns={2} style={{ paddingTop: "70px", paddingBottom: "70px", paddingRight: "100px", margin: "0px" }}>
        <Grid.Column>
          <Ref innerRef={contextRef}>
            <Segment>{props.children}</Segment> 
          </Ref>
        </Grid.Column>
      </Grid>
  );
};

export default Main;
