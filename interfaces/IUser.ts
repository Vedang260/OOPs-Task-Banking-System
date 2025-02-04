import { IAccount } from "./IAccount";

export interface IUser{
    username: string,
    password: string,
    accounts: IAccount[];

    getUsername(): string;
    setUsername(username: string): void;
    getPassword(): string;
    setPassword(password: string): void;
    addAccount(account: IAccount): void;
}