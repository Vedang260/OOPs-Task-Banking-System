import { Account } from "./Account";
import { AccountType } from "../utils/AccountType";

export class FixedDepositAccount extends Account {
    private static readonly PENALTY_RATE: number = 0.1; // 10% penalty for early withdrawal
    private maturityDate: Date;

    constructor(pin: number, initialBalance: number, maturityDate: Date) {
        super(pin, AccountType.FIXED_DEPOSIT, initialBalance);
        this.maturityDate = maturityDate;
    }

    // Getter for maturityDate
    public getMaturityDate(): Date {
        return this.maturityDate;
    }

    // Override withdraw method to apply penalties for early withdrawal
    public override withdraw(amount: number, pin: number): void {
        if (this.pin !== pin) {
            console.log("Invalid PIN.");
            return;
        }
        if (new Date() < this.maturityDate) {
            const penalty = amount * FixedDepositAccount.PENALTY_RATE;
            console.log(`Early withdrawal penalty: ${penalty}`);
            amount += penalty;
        }
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient balance.");
        }
    }
}