
// instance variables - instance keyword -> this

class Person{
    setValues(name,age,location){
        this.name=name
        this.age=age
        this.place=location
    }
    displayPerson(){
        console.log("person name is",this.name);
        console.log("person age is",this.age);
        console.log("person place is",this.place);
    }
}

var pe1=new Person()
pe1.setValues("anu",24,"calicut")
pe1.displayPerson()



var pe2=new Person()
pe2.setValues("amal",21,"kochi")
pe2.displayPerson()
