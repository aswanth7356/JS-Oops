
var obj={ clg: 'luminar' , name: 'arun' , roll: 1 , dep: 'mearn'}            // key : 'values'

// var a=['luminar','arun',1,'mearn']  --> array object
// var a=[1,2,3,4]

console.log(obj);




// elements access in 2 types
console.log(obj['name']);
console.log(obj.clg);


console.log('.................. Loop Keys.......................');


for(var i in obj){
    console.log(i);                // output : keys
}


 
console.log('....................... Loop values ...........................');


for(var i in obj){
    console.log(obj[i]);           // output : values
}


console.log('................ add new elemnts .....................');

obj.age=22
console.log(obj);

// or

obj['place']="calicut"
console.log(obj);


console.log('.................... edit elemnts .....................');

obj.age=25
// or
obj["place"]="kochi"
console.log(obj);



console.log('.................... remove elemnts .....................');

delete obj.dep
// or
delete obj['roll']
console.log(obj);



console.log('.................... check key is prsnt or not .....................');

console.log("name" in obj);            // output will see true or false  (if present - true , not prsnt - false)