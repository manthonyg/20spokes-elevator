import React from "react";
import ElevatorPanel from "./ElevatorPanel";
import ElevatorDoor from "./ElevatorDoor";
import styled from "styled-components";
import PropTypes from "prop-types";

const FLOORS = [
  { name: "pool", ref: "9" },
  { name: "studio", ref: "8" },
  { name: "court", ref: "7" },
  { name: "conference", ref: "6" },
  { name: "tech", ref: "5" },
  { name: "meeting", ref: "4" },
  { name: "study", ref: "3" },
  { name: "office", ref: "2" },
  { name: "kitchen", ref: "1" },
];

const ElevatorContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-image: url("https://picsum.photos/seed/picsum/1000/1000");
  background-size: cover;
`;
const Elevator = ({
  handlePushFloor,
  currentFloor,
  isTraveling,
  floorQueue,
}) => {
  return (
    <ElevatorContainer>
      <ElevatorPanel
        floorQueue={floorQueue}
        handlePushFloor={handlePushFloor}
        floors={FLOORS}
        currentFloor={currentFloor}
        isTraveling={isTraveling}
      />
      <ElevatorDoor isTraveling={isTraveling} />
    </ElevatorContainer>
  );
};

Elevator.propTypes = {
  handlePushFloor: PropTypes.func,
  currentFloor: PropTypes.number,
  isTraveling: PropTypes.bool,
  floorQueue: PropTypes.array,
};

export default Elevator;
