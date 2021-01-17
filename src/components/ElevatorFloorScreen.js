// Elevator floor screen needs to be able to display the current floor of an elevator
// Simple text output on the screen based on the current floor
import React from "react";
import styled from "styled-components";

const FloorScreen = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 1rem;
  font-size: 3rem;
  justify-content: center;
  height: 100px;
  border: 2px solid #313131;
`;
const ElevatorFloorScreen = ({ currentFloor }) => {
  return <FloorScreen>Floor: {currentFloor}</FloorScreen>;
};

export default ElevatorFloorScreen;
