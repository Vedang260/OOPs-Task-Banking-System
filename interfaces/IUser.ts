import { IAccount } from "./IAccount";

export interface IUser{
    username: string,
    password: string,
    accounts: IAccount[];

    addAccount(account: IAccount): void;
}