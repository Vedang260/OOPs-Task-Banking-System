import { IPayment } from "../interfaces/IPayment";

export class UPIPayment implements IPayment{
    pay(amount: number): void {
        console.log(`Paid ${amount} using UPIchna.`);
    }
}