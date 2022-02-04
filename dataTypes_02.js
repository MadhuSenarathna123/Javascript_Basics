// array
// three types of create arrays
//---------01
var motorBikes = [];
//---------02
var airplanes = new Array('airBus', 'boeing');
//---------03
var car = ['toyota', 'nissan','honda',2,25,null,false,'False']
car

car[2]
console.log(airplanes[1])
console.log(car[0])
console.log(car[1])

//array properties - length
console.log(car.length);

/* array methods 
*push("insert something as a last property"), 
*pop(remove last item from the array), 
*shift(remove 1st item from the array), 
*unshift(insert something as a 1st item), 
*indexOf(search matching item index) 
*/

motorBikes.push("HONDA")
motorBikes.push("fz")
motorBikes.push("ct100")
motorBikes.push("9t")
console.log(motorBikes);

motorBikes.pop()
console.log(motorBikes);

motorBikes.shift()
console.log(motorBikes);

motorBikes.unshift("honda")
console.log(motorBikes);

console.log(motorBikes.indexOf("ct100"))

console.log(motorBikes.length)