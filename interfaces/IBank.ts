import { IAccount } from "./IAccount";

export interface IBank{
    bankName: string,
    accounts: IAccount[]
    
    getBankName(): string;
    setBankName(): string;
    getAccounts(): IAccount[];
    addAccount(account: IAccount): void;
}