import { IAccount } from "./IAccount";

export interface IBank{
    bankName: string,
    accounts: IAccount[]

    addAccount(account: IAccount): void;
}