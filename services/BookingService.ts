import { Booking } from "../models/Booking";
import { IPayment } from "../interfaces/IPayment";

/*
    Here, BookingService depends on IPayment
    and not on specific Payment Service.
    This shows the Dependency Inversion Principle.
*/
export class BookingService {
  constructor(private paymentMethod: IPayment) {}

  completeBooking(booking: Booking): void {
    console.log("Booking confirmed:", booking);
    this.paymentMethod.pay(booking.calculateTotalPrice());
  }
}
