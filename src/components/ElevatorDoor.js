import React from "react";
import styled from "styled-components";

const ElevatorFrame = styled.div`
  border-left: 10px solid #aaaaaa;
  background-color: #cccccc;
  display: flex;
  max-width: ${(props) => {
    if (props.isMoving) {
      return "100%";
    } else {
      return "0px";
    }
  }};
  transition: 1s all;
  flex-grow: 1;
`;
const ElevatorDoor = ({ isTraveling }) => {
  return <ElevatorFrame isMoving={isTraveling} />;
};

export default ElevatorDoor;
