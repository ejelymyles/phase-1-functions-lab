function distanceFromHqInBlocks(someValue){
    if (someValue > 42){
        return someValue - 42;
    } else {
        return 42 - someValue;
    }
}

function distanceFromHqInFeet(someValue){
  const blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
}

function distanceTravelledInFeet(start, destination){
    const distance = destination - start;
    if (distance >= 0){
        return distance * 264;
    } else {
        return (distance * 264) * -1;
    }
}

function calculatesFarePrice (start, destination){
    const footDistance = distanceTravelledInFeet(start, destination);
    if (footDistance <= 400){
        return 0;
    } else if (footDistance <= 2000){
        return (footDistance - 400) * 0.02;
    } else if (footDistance <= 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}