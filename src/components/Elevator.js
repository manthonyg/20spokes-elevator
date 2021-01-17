// The kind of info that elevator needs to be passed is

// currentFloor
// floorQueue
// isTraveling
//
import React, { useState } from "react";
import ElevatorPanel from "./ElevatorPanel";
import ElevatorDoor from "./ElevatorDoor";
import styled from "styled-components";

const FLOORS = [
  { name: "pool", ref: "9" },
  { name: "pool", ref: "8" },
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
`;
const Elevator = ({
  handlePushFloor,
  handleIsTraveling,
  currentFloor,
  isTraveling,
  floorQueue,
}) => {
  const [elevatorInfo, setElevatorInfo] = useState({
    floors: FLOORS,
    travelTime: 100,
  });

  return (
    <ElevatorContainer>
      <ElevatorPanel
        floorQueue={floorQueue}
        handlePushFloor={handlePushFloor}
        floors={FLOORS}
      />
      <ElevatorDoor isTraveling={isTraveling} />
    </ElevatorContainer>
  );
};

export default Elevator;
