import { IPayment } from "../interfaces/IPayment";
// this demonstrates Open-Close Principle
export class PaymentService {
  constructor(private paymentMethod: IPayment) {}

  processPayment(amount: number): void {
    this.paymentMethod.pay(amount);
  }
}
