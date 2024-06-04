class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    (this.accountNumber = accountNumber),
      (this.accountHolder = accountHolder),
      (this.balance = balance);
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("You don't have sufficient funds to withdraw");
    } else {
      this.balance -= amount;
    }
  }
  getBalance() {
    return this.balance;
  }
}

const andrejBankAccount = new BankAccount(1, "Andrej", 3000);
andrejBankAccount.deposit(200);
console.log(andrejBankAccount);
andrejBankAccount.withdraw(1000);
console.log(andrejBankAccount);
andrejBankAccount.withdraw(3000);
console.log(andrejBankAccount.getBalance());

const anotherPerson = new BankAccount(2, "Marko", 5);
anotherPerson.withdraw(2);
console.log(anotherPerson);
anotherPerson.deposit(10);
console.log(anotherPerson.getBalance());
