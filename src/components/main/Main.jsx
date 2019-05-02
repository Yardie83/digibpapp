import React, { useRef } from "react";
import { Grid, Segment, Ref } from "semantic-ui-react";

const Main = props => {
  const contextRef = useRef();

  return (
    <Segment style={{ paddingTop: "70px", paddingBottom: "70px", margin: "0px" }}>
      <Grid centered columns={2}>
        <Grid.Column>
          <Ref innerRef={contextRef}>
            <Segment>{props.children}</Segment>
          </Ref>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Main;
