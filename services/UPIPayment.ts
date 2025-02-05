import { Payment } from "../interfaces/IPayment";

export class UPIPayment implements Payment{
    pay(amount: number): void {
        console.log(`Paid ${amount} using UPIchna.`);
    }
}