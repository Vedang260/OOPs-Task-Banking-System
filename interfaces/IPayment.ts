// using an interface to allow new payment methods
export interface IPayment{
    pay(amount: number): void;
}