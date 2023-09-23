function distanceFromHqInBlocks(location) {
  const hqStreet = 42;
  return Math.abs(location - hqStreet);
}

// Code your solution in this file!

function distanceFromHqInFeet(location) {
  const hqStreet = 42;
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(location - hqStreet);
  const distanceInFeet = distanceInBlocks * feetPerBlock;
  return distanceInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  const distanceInFeet = distanceInBlocks * feetPerBlock;
  return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(destination - start);
  const distanceInFeet = distanceInBlocks * feetPerBlock;

  if (distanceInFeet <= 400) {
      return 0; 
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      
      return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; 
  } else {
      return 'cannot travel that far'; 
  }
}








