challengeCalculator = (values) => {

  // if input is a string, convert it to an array
  if (typeof values == "string") {
    // takes a new line character and converts it into a comma
    values = values.replaceAll(/(\r\n|\r|\n)/g, ',');
    values = values.split(",")
  }

  // set temporary var for total
  let runningTotal = 0
  // go through each item in the parameters
  for (i = 0; i < values.length; i++) {
    // if char is empty
    if (values[i].length == 0) {
      values[i] = 0;
    }
    // check if value is not a number, set it to 0
    else if (isNaN(values[i])) {
      values[i] = 0;
    }
    // otherwise, convert it to a number
    else {
      values[i] = Number(values[i])
    }

    // if it is the first item, set runningTotal equal to it
    if (i == 0) {
      runningTotal = values[i]
    }
    // else, add it
    else {
      runningTotal += values[i]
    }
  };

  return runningTotal
};

module.exports = { challengeCalculator }