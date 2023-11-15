class BankAccount{
    constructor(name , balance){
           this.name = name ;
           this.balance = balance ;

    }
    checkBalance(){
        console.log(`Account balance for ${this.name} is Rs. ${this.balance}`);
    } ;

    deposit(depositedMoney ){
        if(depositedMoney <0 ){
          return  console.log('Invalid Deposit amount . Please enter a positive ammount .');
        }
        this.balance += depositedMoney ;
        console.log(`Depoisted Rs. ${depositedMoney}. New Balance : Rs.${this.balance} `);

        
    }

    withdraw(withdrawmoney){
        if(withdrawmoney <0 ){
         return   console.log('Invalid Deposit amount . Please enter a positive ammount .');}
            if(withdrawmoney > this.balance){
              return  console.log(`Insufficient Fundsfor withdrawal.`);
            }
         this.balance -= withdrawmoney ;
         console.log(`Withdrawn Rs. ${withdrawmoney} . New Balance : ${this.balance}`);
    
} }

const myAccount =  new BankAccount('Mithub S' , 1000) ;
myAccount.checkBalance();

myAccount.deposit(500) ;
myAccount.deposit(-50) ;

myAccount.withdraw(200) ;
myAccount.withdraw(1500);
myAccount.withdraw(-50);

myAccount.checkBalance();


