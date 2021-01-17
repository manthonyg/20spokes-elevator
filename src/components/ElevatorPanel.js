import React from "react";
import ElevatorButton from "./ElevatorButton";
import ElevatorFloorScreen from "./ElevatorFloorScreen";
import styled from "styled-components";
import { checkIfFloorSelected } from "../helpers";
import PropTypes from "prop-types";

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

const ElevatorPanel = ({
  isTraveling,
  floors,
  currentFloor,
  handlePushFloor,
  floorQueue,
}) => {
  return (
    <PanelContainer>
      <ElevatorFloorScreen currentFloor={currentFloor} />
      <Panel>
        {floors.map((floor, i) => (
          <ElevatorButton
            key={floor?.name}
            isSelected={checkIfFloorSelected(floorQueue, floor?.ref)}
            isTraveling={isTraveling}
            handlePushFloor={handlePushFloor}
            floorRef={floor?.ref}
          />
        ))}
      </Panel>
    </PanelContainer>
  );
};

ElevatorPanel.propTypes = {
  floors: PropTypes.array,
  handlePushFloor: PropTypes.func,
  currentFloor: PropTypes.number,
  isTraveling: PropTypes.bool,
  floorQueue: PropTypes.array,
};

export default ElevatorPanel;
