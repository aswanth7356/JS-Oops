

var car={name:'Honda City' , manufacture: 'Honda' , price: 1400000}

// display car name
// check manufacture is present or not
// increase the current car price by 200000
// add varient - manual/automatic
// add available colors - white , grey , black



// display car name

console.log(car.name);



// check manufacture is present or not

console.log("manufacture" in car);



// increase the current car price by 200000

car.price+=200000
console.log(car);



// add varient - manual/automatic

car.varient="automatic"
console.log(car);



// add available colors - white , grey , black

car.availableColors=['white','grey','black']
console.log(car);



