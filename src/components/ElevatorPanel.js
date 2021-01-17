// Elevator panel stores all of the buttons and should be able to render more or less based on the amount of floors
import React from "react";
import ElevatorButton from "./ElevatorButton";
import ElevatorFloorScreen from "./ElevatorFloorScreen";
import styled from "styled-components";

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cccccc;
  justify-content: space-between;
`;
const Panel = styled.div`
  width: 30vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  align-content: flex-end;
  padding: 2rem;
  background-color: #cccccc;
`;
const ElevatorPanel = ({ floors, handlePushFloor, floorQueue }) => {
  const checkIfFloorSelected = (floorQueue, floor) => {
    if (floorQueue.includes(floor)) {
      return true;
    }
    return false;
  };

  return (
    <PanelContainer>
      <ElevatorFloorScreen />
      <Panel>
        {floors.map((floor, i) => (
          <ElevatorButton
            isSelected={checkIfFloorSelected(floorQueue, floor?.ref)}
            handlePushFloor={handlePushFloor}
            floorName={floor?.name}
            floorRef={floor?.ref}
          />
        ))}
      </Panel>
    </PanelContainer>
  );
};

export default ElevatorPanel;
