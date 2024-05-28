
class A{           // parent class
    methoda(){    
        console.log("inside A class");
    }
}

class B{  // parent class

    methodb(){    
        console.log("inside B class");
   }
}

// class C extends A,B{   ====>  WE CAN GET A ERROR HERE                    // child class of A and B

//         methodb(){    
//             console.log("inside B class");
//        }
//     }


var objb=new B()
objb.methodb()
objb.methoda()