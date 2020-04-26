const logItems = function(array) {
  let message;
  for (const arr of array) {
    const elementNumber = array.indexOf(arr) + 1;
    message = `${elementNumber} - ${arr}`;
    console.log(message);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
