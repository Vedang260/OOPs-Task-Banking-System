export interface IAccount{
    accountNumber: number;
    balance: number; 
    PIN:  number;

    deposit(amount: number): void;
    withdraw(amount: number, pin: number): void;
    getAccountNumber(): number;
    setAccountNumber(accountNumber: number): void;
    getBalance(pin: number): number;
    setBalance(amount: number): void;
    setPIN(pin: number): void;
    getPIN(): number;
}