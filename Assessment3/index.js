// //creating the base class complete with properties and methods

class BankAccount {
    //Properties
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = String(accountNumber);
        this.accountHolder = String(accountHolder);
        this.balance = balance;

    }
    //Methods
    getAccountNumber= ()=>{
        return "Account Number: " + this.accountNumber;
    }
    getAccountHolder= ()=>{
        return "Account Holder: " + this.accountHolder;
    }
    getBalance= () =>{
        return "Balance: " + this.balance;
    }
    deposit= (amount)=>{
        let new_amount = this.balance += amount;
        return "Amount Deposited: " + new_amount;
    }
    withdraw= (amount)=>{

        if(amount<= this.balance){
            amount -= this.balance;
            return "Amount Withdrawn: " + amount;
        }
        else{
            return "Sorry, you have insufficient funds."
        }
    }

}

//Savings account class
class SavingsAccount extends BankAccount{
    //interestRate property
    constructor(accountNumber, accountHolder, balance, interestRate){
        super(accountNumber, accountHolder, balance);
        
        this.interestRate = interestRate;
    }
    //method for interest calculation
    calculateInterest= () =>{
        let interestAmount = (this.balance * this.interestRate) / 100;
        return `Interest Amount: ${interestAmount}`; 
    };
}

//Checking account class
class CheckingAccount extends BankAccount{
    //property
    constructor(accountNumber, accountHolder, balance, overdraftLimit){
        super(accountNumber, accountHolder, balance);
        this.overdraftLimit= overdraftLimit;
    }
    //method
    withdraw = (amount) =>{
        if(amount<= this.balance){
            amount -= this.balance;
            return "Amount Withdrawn with overdraft: " + amount;
        }
        else if(amount<= (this.balance + this.overdraftLimit)){
            amount -= this.balance;
            return "Amount Withdrawn with overdraft: " + amount;
        }
        else{
            return "Sorry, you have insufficient funds."
        }
    }


}


console.log("Taking the details of Bonventure Bosire:\n\n");
// let my_info = ["123", "Kabura", 50];

const BankAccount1 = new BankAccount("987654", "Bonventure Bosire", 1200, 50, 90);

const savingsAccount = new SavingsAccount("987654", "Bonventure Bosire", 1200, 50, 90);

console.log("From the bank account function: ");
console.log("");
console.log(BankAccount1.getAccountNumber());

console.log(BankAccount1.getAccountHolder());

console.log(BankAccount1.deposit(50));

console.log(BankAccount1.withdraw(50));

console.log(BankAccount1.getBalance());
console.log("");

console.log("From the savings account function: ");
console.log("");
console.log(`Savings Account Number: ${savingsAccount.accountNumber}`);
console.log(`Savings Account Holder: ${savingsAccount.accountHolder}`); 
console.log(`Savings Account Balance: ${savingsAccount.balance}`);
console.log(`Savings Account Deposit: ${savingsAccount.deposit(500)}`);
console.log(`Savings Account Interest: ${savingsAccount.calculateInterest()}`);
console.log("");



console.log("From the Checking Account function:\n\n");
console.log("Taking the details of Abel Koton:\n");
// Create a CheckingAccount instance
const checkingAccount = new CheckingAccount("789012", "Abel Koton", 2000, 1000);
console.log(`Checking Account Number: ${checkingAccount.accountNumber}`);
console.log(`Checking Account Holder: ${checkingAccount.accountHolder}`);
console.log(`Checking Account Balance: ${checkingAccount.balance}`);
console.log(`Checking Account Overdraft Limit: ${checkingAccount.overdraftLimit}`);
console.log(`Checking Account Withdrawals:\n`); 

console.log(`Withdrawing 1500:\n${checkingAccount.withdraw(1500)}`);
console.log(`Checking Account Balance: ${checkingAccount.balance}`); 

console.log(`Withdrawing 1000:\n${checkingAccount.withdraw(1000)}`); 
console.log(`Checking Account Balance: ${checkingAccount.balance}`); 

console.log(`Withdrawing 1000:\n${checkingAccount.withdraw(1000)}`);
console.log(`Checking Account Balance: ${checkingAccount.balance}`); 






