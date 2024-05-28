
// constructor

class Bank{
    bankName="SBI"

    constructor(name,acno){
        this.name=name
        this.acno=acno
        this.balance=0
        console.log(this.name,"your",this.bankName,"account created successfully");
    }
    deposit(amount){
        this.balance=this.balance+amount
        console.log("your account has been credited with amount",amount);
        this.balanceCheck()
    }
    withdraw(amnt){
        if(amnt>this.balance){
            console.log("Insufficient balance");
        }else{
            this.balance=this.balance-amnt
            console.log("your account has been debited with amount",amnt);
            this.balanceCheck()
        }
    }
    balanceCheck(){
        console.log("your current balance is",this.balance);
    }
}

var ac1=new Bank("anu",456852132322)
// ac1.accountCreate("anu",456852132322)
ac1.balanceCheck()
ac1.deposit(1000)
ac1.withdraw(500)
ac1.deposit(2000)