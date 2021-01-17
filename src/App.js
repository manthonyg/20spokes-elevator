import { useState, useEffect, useRef } from "react";
import Elevator from "./components/Elevator";
import {
  getDifferenceInFloors,
  findClosestFloor,
  removeFloorFromQueue,
} from "./helpers";

function App() {
  // The model/state

  const TRAVEL_TIME = 1000; // ms per floor

  const [currentFloor, setCurrentFloor] = useState(1);
  const [isTraveling, setIsTraveling] = useState(false);
  const [floorQueue, setFloorQueue] = useState([]);
  const floorRef = useRef();
  floorRef.current = currentFloor;

  // Controller

  const travelDown = (travelInterval, closestFloor) => {
    setCurrentFloor((floor) => floor - 1);
    if (Number(floorRef.current) === Number(closestFloor)) {
      clearInterval(travelInterval);
      // remove current floor from queue
      setFloorQueue(removeFloorFromQueue(closestFloor, floorQueue));
      // elevator can move again
      setIsTraveling(false);
    }
  };
  const travelUp = (travelInterval, closestFloor) => {
    setCurrentFloor((floor) => floor + 1);
    if (Number(floorRef.current) === Number(closestFloor)) {
      clearInterval(travelInterval);
      // remove current floor from queue
      setFloorQueue(removeFloorFromQueue(closestFloor, floorQueue));
      // elevator can move again
      setIsTraveling(false);
    }
  };

  const toggleTraveling = () => {
    setIsTraveling(!isTraveling);
  };

  useEffect(() => {
    //check to see if there are any floors in queue
    if (floorQueue.length >= 1) {
      //set the state of the elevator to traveling
      toggleTraveling();

      //determine the next floor to visist based on the shortest path from current floor
      const closestFloor = findClosestFloor(floorQueue, currentFloor);

      //calculate the difference in floors to get from current floor to the next closest floor
      const floorsToTravel = getDifferenceInFloors(currentFloor, closestFloor);
      console.log({ floorsToTravel });

      //determine if the closest floor is above or below the current floor
      if (closestFloor < currentFloor) {
        const travelInterval = setInterval(() => {
          travelDown(travelInterval, closestFloor);
        }, TRAVEL_TIME);
      } else if (closestFloor > currentFloor) {
        const travelInterval = setInterval(() => {
          travelUp(travelInterval, closestFloor);
        }, TRAVEL_TIME);
      } else {
        toggleTraveling();
      }
    }
  }, [floorQueue]);

  const handlePushFloor = (event) => {
    const floor = event.target.value;
    if (!floorQueue.includes(floor)) {
      setFloorQueue(floorQueue.concat(floor));
    }
  };

  return (
    <>
      <Elevator
        handlePushFloor={handlePushFloor}
        currentFloor={currentFloor}
        isTraveling={isTraveling}
        floorQueue={floorQueue}
      />
    </>
  );
}

export default App;
