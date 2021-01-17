// A user should be able to view the current floor of the elevator at any given time. The elevator

// should take 1 second to move 1 floor.

// The user should receive a message that the elevator is now at their desired floor.

// It’s up to you whether you would like to create a full application or a command-line tool.

import { useEffect, useState } from "react";
import ElevatorButton from "./components/ElevatorButton";
import ElevatorPanel from "./components/ElevatorPanel";
import Elevator from "./components/Elevator";

function App() {
  // The model

  const TRAVEL_TIME = 1000; // ms per floor

  const FLOORS = [
    // might not need the accessible bool flag
    { name: "basement", ref: "b", accessible: true },
    { name: "kitchen", ref: "1", accessible: true },
    { name: "office", ref: "2", accessible: true },
    { name: "basement", ref: "3", accessible: true },
    { name: "kitchen", ref: "4", accessible: true },
    { name: "office", ref: "5", accessible: true },
    { name: "basement", ref: "6", accessible: true },
    { name: "kitchen", ref: "7", accessible: true },
    { name: "office", ref: "8", accessible: true },
  ];
  const [currentFloor, setCurrentFloor] = useState(1);
  const [isTraveling, setIsTraveling] = useState(false);
  const [floorQueue, setFloorQueue] = useState([]);

  // Controller

  const handlePushFloor = (event) => {
    const floor = event.target.value;
    if (!floorQueue.includes(floor)) {
      setFloorQueue(floorQueue.concat(floor));
      console.log("YOU ADDED", floor);
    } else {
      console.log(floor, "ALREADY EXISTS IN QUEUE");
    }
  };

  console.log({ floorQueue });

  const toggleTraveling = () => {
    setIsTraveling(!isTraveling);
  };

  return (
    <>
      <button onClick={toggleTraveling}>Toggle door</button>
      <Elevator
        handlePushFloor={handlePushFloor}
        // handleIsTraveling={handleIsTraveling}
        currentFloor={currentFloor}
        isTraveling={isTraveling}
        floorQueue={floorQueue}
      />
    </>
  );
}

export default App;
