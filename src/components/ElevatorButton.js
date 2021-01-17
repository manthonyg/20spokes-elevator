import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const ElevatorButton = ({
  isSelected,
  isTraveling,
  handlePushFloor,
  floorName,
  floorRef,
}) => {
  return (
    <ButtonContainer>
      <Button
        onClick={handlePushFloor}
        isSelected={isSelected}
        disabled={isTraveling}
        value={floorRef}
      >
        {floorRef}
      </Button>
    </ButtonContainer>
  );
};

ElevatorButton.propTypes = {
  isTraveling: PropTypes.bool,
  isSelected: PropTypes.bool,
  handlePushFloor: PropTypes.func,
  floorName: PropTypes.string,
  floorRef: PropTypes.string,
};

export default ElevatorButton;
