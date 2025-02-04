import { IBank } from "../interfaces/IBank";
import { IAccount } from "../interfaces/IAccount";

export class Bank implements IBank {
    public readonly bankName: string;
    public accounts: IAccount[] = [];

    constructor(bankName: string) {
        this.bankName = bankName;
    }

    public addAccount(account: IAccount): void {
        this.accounts.push(account);
    }
}