
// same things kitttan(luminar,mearn) class attributes um edkam , method attributes ayitum edkam

class Student{
    
    clg="luminar"                     // class attributes
     
    setValue(name,roll){
        this.name=name                // method attribute
        this.roll=roll                // method attribute

        this.dep="mearn"              // method attribute ayitum call cheyyam
    }
    displayStudent(){
        console.log(this.name,this.roll,this.clg,this.dep)
    }
}

var std1=new Student()
std1.setValue("arun",1)
std1.displayStudent()

var std2=new Student()
std2.setValue("neha",2)
std2.displayStudent()