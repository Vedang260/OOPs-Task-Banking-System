// using an interface to allow new payment methods
export interface Payment{
    pay(amount: number): void;
}