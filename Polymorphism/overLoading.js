
// overloading - method name are same but number of parameters are different

class A{
    methoda(){   // 0
        console.log("first method");
    }
    methoda(n){  //1
        console.log("second method",n);
    }
}

var obja=new A()
obja.methoda()   // first method
obja.methoda(5)  // secod method



/*
output
------

second method undefined
second method 5

second method only works because javaScript doesn't support overloading

*/ 