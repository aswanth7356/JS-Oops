
// instance

class Student{
    setValue(name,age,standard,place){
        this.name=name
        this.age=age
        this.standard=standard
        this.place=place
    }
    displayStudent(){
        console.log("student name is",this.name);
        console.log("student age is",this.age);
        console.log("student standard is",this.standard);
        console.log("student place is",this.place);
    }
}

var std1=new Student()
std1.setValue("tom",14,2,"USA")
std1.displayStudent()

var std2=new Student()
std2.setValue("Rick",45,5,"Africa")
std2.displayStudent()