import { IBooking } from "../interfaces/IBooking";
import { Room } from "./Room";

// Booking class is only implementing the calculateTotalPrice method
// which shows the functionality of Single Responsibility Principle
export class Booking implements IBooking{
    private bookingId: string;
    private customerName: string;
    private room: Room;
    private bookingDate: Date;
    private numberOfDays: number;

    constructor(bookingId: string, customerName: string, room: Room, bDate: Date, n: number){
        this.bookingId = bookingId;
        this.customerName = customerName;
        this.room = room;
        this.bookingDate = bDate;
        this.numberOfDays = n;
    }
    
    calculateTotalPrice(): number {
        return this.room.getPrice()*this.numberOfDays;
    }
    
}