export class User {
    public username: string;
    private password: string;

    public constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }
}