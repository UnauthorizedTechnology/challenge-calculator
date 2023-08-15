challengeCalculator = (values) => {

  // if input is a string, convert it to an array
  if (typeof values == "string") {

    // check if there is a custom delimiter 

    if (values.slice(0, 2) == "//") {
      let delimiter
      // remove // from start of string
      values = values.substring(2)
      delimiter = values[0]

      // takes the custom delimiter and converts it to a comma
      values = values.replaceAll(delimiter, ",")
    }

    // takes a new line character and converts it into a comma
    values = values.replaceAll(/(\r\n|\r|\n)/g, ',');
    values = values.split(",")
  }

  // set temporary var for total
  let runningTotal = 0
  // initalize an empty array to hold the possible negative numbers
  let negativeValues = []
  // go through each item in the parameters
  for (i = 0; i < values.length; i++) {

    // convert string to number
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

    // check if value is negative, add to exeption list and skip over the rest of the loop
    if (values[i] < 0) {
      negativeValues.push(values[i])
      continue
    }

    // check if number is greater than 1000, if so set it to 0
    if (values[i] > 1000) {
      values[i] = 0
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

  // throw exception if the input contained negative numbers
  if (negativeValues.length > 0) {
    throw new Error(`Negative numbers were included in the input and they are not allowed. Negative numbers provided: ${negativeValues}`)
  }

  return runningTotal
};

module.exports = { challengeCalculator }