
// over-riding - same method name and same number of parameters


class Parent{
    buyphone(){  //0
        console.log("buy nokia");
    }
}
class Child extends Parent{
    buyphone(){  //0
        console.log("buy iphone");
    }
}

obj=new Child()
obj.buyphone()
// last created method overrides all other method