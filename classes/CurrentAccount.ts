import { Account } from "./Account";
import { AccountType } from "../utils/AccountType";

export class CurrentAccount extends Account {
    private static readonly OVERDRAFT_LIMIT: number = 10000;

    constructor(pin: number, initialBalance: number = 0) {
        super(pin, AccountType.CURRENT, initialBalance);
    }

    // Override withdraw method to allow overdrafts
    public override withdraw(amount: number, pin: number): void {
        if (this.pin !== pin) {
            console.log("Invalid PIN.");
            return;
        }
        if (amount > 0 && amount <= this.balance + CurrentAccount.OVERDRAFT_LIMIT) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount or exceeds overdraft limit.");
        }
    }
}