import { AuthService } from "./services/AuthService";
import { BankService } from "./services/BankService";
import { SavingsAccount } from "./classes/SavingsAccount";
import { CurrentAccount } from "./classes/CurrentAccount";
import { AccountType } from "./utils/AccountType";
import * as readline from "readline";
import process from "process";
import { User } from "./classes/User";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const authService = new AuthService();
const bankService = new BankService();

let currentUser: User | null = null;

function mainMenu() {
    console.log("\nWelcome to Banking System");
    console.log("\n1. Register\n2. Login\n3. Exit");
    rl.question("Choose an option: ", (choice) => {
        switch (choice) {
            case "1":
                register();
                break;
            case "2":
                login();
                break;
            case "3":
                rl.close();
                break;
            default:
                console.log("Invalid choice.");
                mainMenu();
        }
    });
}

function register() {
    rl.question("Enter username: ", (username) => {
        rl.question("Enter password: ", (password) => {
            authService.register(username, password);
            console.log("Registration successful. Please login.");
            mainMenu();
        });
    });
}

function login() {
    rl.question("Enter username: ", (username) => {
        rl.question("Enter password: ", (password) => {
            currentUser = authService.login(username, password);
            if (currentUser) {
                console.log("Login successful.");
                userMenu();
            } else {
                console.log("Invalid credentials.");
                mainMenu();
            }
        });
    });
}

function userMenu() {
    console.log("\n1. Create Account\n2. Deposit\n3. Withdraw\n4. Check Balance\n5. Logout");
    rl.question("Choose an option: ", (choice) => {
        switch (choice) {
            case "1":
                createAccount();
                break;
            case "2":
                deposit();
                break;
            case "3":
                withdraw();
                break;
            case "4":
                checkBalance();
                break;
            case "5":
                currentUser = null;
                console.log("Logged out.");
                mainMenu();
                break;
            default:
                console.log("Invalid choice.");
                userMenu();
        }
    });
}

function createAccount() {
    console.log("\n1. Savings Account\n2. Current Account");
    rl.question("Choose account type: ", (type) => {
        rl.question("Enter PIN: ", (pin) => {
            rl.question("Enter initial balance: ", (initialBalance) => {
                let account;
                switch (type) {
                    case "1":
                        account = new SavingsAccount(Number(pin), Number(initialBalance));
                        break;
                    case "2":
                        account = new CurrentAccount(Number(pin), Number(initialBalance));
                        break;
                    default:
                        console.log("Invalid account type.");
                        userMenu();
                        return;
                }
                currentUser?.addAccount(account);
                console.log("Account created successfully.");
                userMenu();
            });
        });
    });
}

function deposit() {
    rl.question("Enter account number: ", (accountNumber) => {
        rl.question("Enter amount: ", (amount) => {
            const account = currentUser?.accounts.find(acc => Number(acc.accountNumber) === Number(accountNumber));
            if (account) {
                account.deposit(Number(amount));
            } else {
                console.log("Account not found.");
            }
            userMenu();
        });
    });
}

function withdraw() {
    rl.question("Enter account number: ", (accountNumber) => {
        rl.question("Enter PIN: ", (pin) => {
            rl.question("Enter amount: ", (amount) => {
                const account = currentUser?.accounts.find(acc => Number(acc.accountNumber) === Number(accountNumber));
                if (account) {
                    account.withdraw(Number(amount), Number(pin));
                } else {
                    console.log("Account not found.");
                }
                userMenu();
            });
        });
    });
}
function checkBalance() {
    rl.question("Enter account number: ", (accountNumber) => {
        rl.question("Enter PIN: ", (pin) => {
            const account = currentUser?.accounts.find(acc => Number(acc.accountNumber) === Number(accountNumber));
            if (account) {
                const balance = account.getBalance(Number(pin));
                if (balance !== -1) {
                    console.log(`Balance: ${balance}`);
                }
            } else {
                console.log("Account not found.");
            }
            userMenu();
        });
    });
}

mainMenu();
// Deposit, Withdraw, and Check Balance functions remain the same as before.