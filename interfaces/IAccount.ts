export interface IAccount{
    accountNumber: number;

    deposit(amount: number): void;
    withdraw(amount: number, pin: number): void;
    getBalance(pin: number): number;
}