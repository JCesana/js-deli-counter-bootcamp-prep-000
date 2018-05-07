var katzDeli = [];

function takeANumber(customerLine, name) {
  customerLine.push(name);
  return `Welcome, ${name}. You are number ${customerLine.length} in line.`;
}

function nowServing(customerLine) {
  var nextCustomer = customerLine[0];
  
  if (customerLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    customerLine.shift();
    return nextCustomer;
  }
}

function currentLine(customerLine) {
  var line = "The line is currently: ";
  
  if (customerLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < customerLine.length; i++) {
      line += `${i + 1} ${customerLine[i]}, `;
    }
  }
}