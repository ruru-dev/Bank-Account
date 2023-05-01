//create a class called BankAccount
class BankAccount {

  constructor(_accountNumber, _owner)
  {
    this.accountNumber = _accountNumber;
    this.owner = _owner;
  }

  transactions = [];

  //gets the balance
  balance() {
    if(this.transactions.length == 0) {
      console.log('No history')
    }

    else if (this.transactions.length == 1) {
      console.log(this.transactions[0].amount)
    }
    else {
      let sum = 0;
      for (let index = 0; index < this.transactions.length; index++) {
        
        sum += this.transactions[index].amount
        
      }
          console.log('Sum: ' + sum)
    }

  }

  //gets the deposit
  deposit(amt) {
    let currTransaction = new Transaction(amt, this.owner)
    this.transactions.push(currTransaction)
  }

  charge(payee, amt) {
    let currTransaction = new Transaction(amt*-1, payee)
    this.transactions.push(currTransaction)
  }

}


class Transaction {
  constructor(_amount, _payee)
  {
    this.amount = _amount;
    this.payee = _payee;

    const d = new Date();
    this.date = d.getDay();
  }

  date = ''
}

let myFirstBankAccount = new BankAccount('account', 'Rachel')

myFirstBankAccount.deposit(12)
myFirstBankAccount.deposit(20)
myFirstBankAccount.charge('Starbucks', 6)
myFirstBankAccount.balance()
