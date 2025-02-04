import { User } from './User.ts';

export class BankingSystem{
    users: User[]
//    banks: Bank[]
    
    public constructor(){
        this.users = [];
    }

    // Add a new User to the system
    addUser(username: string, password: string){
        const newUser = new User(username, password);
        this.users.push(newUser);
        console.log("New user is Registered Successfully");
        console.log("Please Login to continue");
    }

    loginUser(username: string, password: string){
        const user = this.users.find()
    }
}