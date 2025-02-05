import { IPayment } from "../interfaces/IPayment";

export class CreditCardPayment implements IPayment{
    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}