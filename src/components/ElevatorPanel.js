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
const ElevatorPanel = ({ floors, handlePushFloor }) => {
  return (
    <PanelContainer>
      <ElevatorFloorScreen></ElevatorFloorScreen>
      <Panel>
        {floors.map((floor, i) => (
          <ElevatorButton
            handlePushFloor={handlePushFloor}
            floorNumber={floors.length - i}
            floorRef={floors[floors.length - i - 1]?.ref}
          />
        ))}
      </Panel>
    </PanelContainer>
  );
};

export default ElevatorPanel;
