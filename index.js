var katzDeli = [];

function takeANumber(currentLine, name) {
  currentLine.push(name);
}

function nowServing() {
  var nextCustomer = currentLine[0];
  
  if (currentLine.length === 0) {
    return "There"
  }
  
  currentLine.shift();
  nowServing
  return nextCustomer;
}