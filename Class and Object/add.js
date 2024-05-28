
// Adding two numbers



class Adding{
    setValues(num1,num2){
        this.number1=num1
        this.number2=num2
    }
    display(){
        console.log(this.number1+this.number2);
    }
}

var numAdd=new Adding()
numAdd.setValues(4,6)
numAdd.display()