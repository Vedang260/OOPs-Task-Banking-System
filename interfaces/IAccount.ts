export interface IAccount{
    accountNumber: string;
    balance: number; 
    PIN:  number;
    
    deposit(amount: number): void;
    withdraw(amount: number, pin: number): void;
    getBalance(pin: number): number;
}