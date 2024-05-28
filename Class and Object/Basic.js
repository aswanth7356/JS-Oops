
class Person{                                                                             // Person {..} ==> class name (first letter should be capital)
    // methods()functions , attributes(datas)
    read(){                                                                               // read() -> methods
        console.log("the person is reading");
    }
    walk(){
        console.log("the person is walking");
    }
}
var pe1=new Person()                                                                    // var pe1=new Person() ==> object (oru class nte ullil ethra objects venelum create cheyyam)    [ pe1 is the reference ]
pe1.walk()                                                                              
pe1.read()
pe1.walk()

console.log("......................");

var pe2=new Person()                                                                    // pe2 ==> another object
pe2.read()
pe2.walk()


console.log(".......................");


console.log(typeof(pe1));    // object



console.log(".......................");




var a=[1,2,3]
console.log(typeof(a));   //  object            [ Array is an object ]

// class Array{
//     map(){

//     }
// }

// a=[1,2,3]
// a.map