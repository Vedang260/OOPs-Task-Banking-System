// src/main.ts
import { Room } from "./models/Room";
import { Booking } from "./models/Booking";
import { BookingService } from "./services/BookingService";
import { CreditCardPayment } from "./services/CreditCardPayment";

const room = new Room(101, "Deluxe", 150);
const checkInDate = new Date(2025, 1, 4); // Year: 2025, Month: February (1), Day: 4
const booking = new Booking("B123", "John Doe", room, checkInDate, 3);

const paymentMethod = new CreditCardPayment();
const bookingService = new BookingService(paymentMethod);

bookingService.completeBooking(booking);
