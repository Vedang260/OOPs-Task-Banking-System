import { Account } from "../classes/Account";
import { CurrentAccount } from "../classes/CurrentAccount";
import { SavingsAccount } from "../classes/SavingsAccount";

export class AccountService {
    public createAccount(pin: number, initialBalance: number = 0, accType: number): Account | undefined{
        if(accType == 1){
            return new SavingsAccount(pin, initialBalance);
        }
        else if(accType == 2){
            return new CurrentAccount(pin, initialBalance);
        }
        return undefined;
    }
}