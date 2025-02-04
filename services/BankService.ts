import { Bank } from "../classes/Bank";

export class BankService {
    private banks: Bank[] = [];

    public createBank(bankName: string): Bank {
        const bank = new Bank(bankName);
        this.banks.push(bank);
        return bank;
    }
}