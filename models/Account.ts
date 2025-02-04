import { IAccount } from "../interfaces/IAccount";

export abstract class Account implements IAccount{
    private static accountCounter: number = 0;
    public readonly accountNumber: number;
    private balance: number;
    private readonly pin: number;

    constructor(pin: number, initialBalance: number = 0) {
        Account.accountCounter++;
        this.accountNumber = Number(`${Account.accountCounter}`.padStart(10, '0'));
        this.balance = initialBalance;
        this.pin = pin;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    public withdraw(amount: number, pin: number): void {
        if (this.pin !== pin) {
            console.log("Invalid PIN.");
            return;
        }
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient balance.");
        }
    }

    public getBalance(pin: number): number {
        if (this.pin !== pin) {
            console.log("Invalid PIN.");
            return -1;
        }
        return this.balance;
    }
}