


class A{
    methoda(){    
        console.log("inside A class");
    }
}

class B extends A{
    methodb(){    
        console.log("inside B class");
   }
}
class C extends B{
    methodc(){
        console.log("inside C class");
    }
}

var objb=new C()
objb.methodc()
objb.methodb()
objb.methoda()
