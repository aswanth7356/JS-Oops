
// inheritance - used to oru class ne motham mattoru class il call cheyyan

// single inheritance
// if single parent then it is single inheritance


class A{           // parent class / super class / base class
    methoda(){   
        console.log("inside A class");
    }
}

class B extends A{     // child class / sub class / derived class
    methodb(){    
        console.log("inside B class");
   }
}

var objb=new B()
objb.methodb()
objb.methoda()