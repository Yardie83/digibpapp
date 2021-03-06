import React from "react";
import { List, Image } from "semantic-ui-react";

const JobListItem = props => {
  const listItemStyle = () => {
    return ({
      backgroundColor: props.item.isSelected
        ? "papayawhip" : "white",
        padding: "10px",

    });
  };

  return (
    <>
      <List.Item onClick={props.onClick} style={listItemStyle()}>
        <Image size={"tiny"} src={props.item.logoUrl} avatar />
        <List.Content>
          <List.Header as="a">{props.item.title}</List.Header>
          <List.Description>{props.item.createdAt}</List.Description>
        </List.Content>
      </List.Item>
    </>
  );
};

export default JobListItem;
