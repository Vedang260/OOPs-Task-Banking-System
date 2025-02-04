import {Account} from './Account';
import { AccountType } from '../utils/AccountType';

export class SavingsAccount extends Account{
    private static readonly INTEREST_RATE: number = 0.05;

    constructor(pin: number, initialBalance: number = 0) {
        super(pin, AccountType.SAVINGS, initialBalance);
    }

    // Method to calculate interest
    public calculateInterest(): number {
        return this.balance * SavingsAccount.INTEREST_RATE;
    }
}