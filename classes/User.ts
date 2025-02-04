import { IUser } from "../interfaces/IUser";
import { IAccount } from "../interfaces/IAccount";

export class User implements IUser {
    public readonly username: string;
    public readonly password: string;
    public accounts: IAccount[] = [];

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    public addAccount(account: IAccount): void {
        this.accounts.push(account);
    }
}