/**
 * @description returns the difference in floors from current floor to destination floor
 * @param {*} currentFloor number representing current floor
 * @param {*} closestFloor a number representing next closest floor from current
 */
export const getDifferenceInFloors = (currentFloor, closestFloor) => {
  return Math.abs(closestFloor - currentFloor);
};

/**
 * @description returns the closest next floor to the current floor in terms of travel time
 * @param {*} queue array of numbers representing floors
 * @param {*} currentFloor number representing current floor
 */
export const findClosestFloor = (queue, currentFloor) => {
  const possibleFloors = queue.filter(
    (floor) => Number(floor) !== currentFloor
  );
  if (possibleFloors.length > 0) {
    return possibleFloors.reduce((prev, curr) => {
      return Math.abs(curr - currentFloor) < Math.abs(prev - currentFloor)
        ? curr
        : prev;
    });
  }
};

/**
 * @description iterates through the queue and filters it for elements that are not the floor to remove
 * @param {*} floorToRemove number representing floor to remove off of floor queue
 * @param {*} queue array of numbers representing floor queue
 */
export const removeFloorFromQueue = (floorToRemove, queue) => {
  const newFloorQueue = queue.filter((floor) => floor !== floorToRemove);
  return newFloorQueue;
};

/**
 * @description checks the floor against the current queue to see if the floor is selected
 * @param {*} floorQueue array of numbers representing floor queue
 * @param {*} floor number representing the floor to check against the floor queue
 */
export const checkIfFloorSelected = (floorQueue, floor) => {
  if (floorQueue.includes(floor)) {
    return true;
  }
  return false;
};
