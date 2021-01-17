import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

ElevatorFloorScreen.propTypes = {
  currentFloor: PropTypes.number,
};

export default ElevatorFloorScreen;
