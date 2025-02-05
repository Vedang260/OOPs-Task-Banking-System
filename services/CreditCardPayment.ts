import { Payment } from "../interfaces/IPayment";

export class CreditCardPayment implements Payment{
    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}