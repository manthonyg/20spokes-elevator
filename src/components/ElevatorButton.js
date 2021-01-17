// Elevator button needs to have a value of the floor and a representation of the floor it is on.

import React from "react";
import styled from "styled-components";

const ButtonClusterContainer = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  padding: 10px;
  display: flex;
  width: 25%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 100%;
  height: 100px;
  border: 4px solid
    ${(props) => {
      if (props.isSelected) return "green";
      return "#21212150";
    }};
  font-size: 50px;
  width: 100px;
`;

const FloorNameText = styled.p`
  font-size: 10px;
`;
const ElevatorButton = ({
  isSelected,
  handlePushFloor,
  floorName,
  floorRef,
}) => {
  return (
    <ButtonContainer>
      <Button
        onClick={handlePushFloor}
        isSelected={isSelected}
        value={floorRef}
      >
        {floorRef}
        <FloorNameText>{floorName}</FloorNameText>
      </Button>
    </ButtonContainer>
  );
};

export default ElevatorButton;
