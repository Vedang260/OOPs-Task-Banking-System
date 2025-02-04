import { User } from "../classes/User";

export class AuthService {
    private users: User[] = [];

    public register(username: string, password: string): User {
        const user = new User(username, password);
        this.users.push(user);
        console.log("User is registered successfully");
        return user;
    }

    public login(username: string, password: string): User | null {
        const user = this.users.find(u => u.username === username && u.password === password);
        return user || null;
    }
}