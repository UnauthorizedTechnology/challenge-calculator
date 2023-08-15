challengeCalculator = (values) => {

  // if input is a string, convert it to an array
  if (typeof values == "string") {

    // check if there is a custom delimiter 

    if (values.slice(0, 2) == "//") {
      let delimitersArray = []
      // remove // from start of string
      values = values.substring(2)

      // set temp single delimiter string
      let delimiter = ""
      // set var to just the delimiters part of the input
      let delimitersString = values.substr(0, values.indexOf("\n"))
      values = values.substring(delimitersString.length + 1)

      // read each char in just the delimiters
      for (i = 0; i < delimitersString.length; i++) {

        // if it is the start of a new delimiter, continue
        if (delimitersString[i] == "[") {
          continue
        }
        // if it is the end of a delimiter, push it to the array and reset the temp variable
        else if (delimitersString[i] == "]") {
          delimitersArray.push(delimiter)
          delimiter = ""
        }
        // if it is the last item and not a "]", meaning it is a single char 
        else if (i == delimitersString.length - 1) {
          delimitersArray.push(delimitersString[i])
        }
        // if it is apart of a delimiter, push its char to the temp string
        else {
          delimiter += delimitersString[i]
        }
      }

      // replace custom delimiter with comma
      for (i = 0; i < delimitersArray.length; i++) {
        values = values.replaceAll(delimitersArray[i], ",");
      }
    }

    // takes a new line character and converts it into a comma
    values = values.replaceAll(/(\r\n|\r|\n)/g, ',');
    values = values.split(",")
  }

  // set temporary var for total
  let runningTotal = 0
  let runningTotalArray = []
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
    runningTotalArray.push(values[i])
  };

  // throw exception if the input contained negative numbers
  if (negativeValues.length > 0) {
    throw new Error(`Negative numbers were included in the input and they are not allowed. Negative numbers provided: ${negativeValues}`)
  }

  return (runningTotal, PrintFormula(runningTotalArray, runningTotal))
};

PrintFormula = (runningTotalArray, runningTotal) => {

  let formula = ""
  for (item = 0; item < runningTotalArray.length; item++) {
    formula += runningTotalArray[item]

    if (item == runningTotalArray.length - 1) {
      formula += ` = ${runningTotal}`
    }
    else {
      formula += "+"

    }
  }
  return formula
}

module.exports = { challengeCalculator, PrintFormula }