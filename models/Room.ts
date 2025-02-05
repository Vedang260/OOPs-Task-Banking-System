import { IRoom } from "../interfaces/IRoom";

// Room class is only implementing the getRoomDetailes method
// which follows the Single Responsibility Principle
export class Room implements IRoom{
    public roomNumber: number;
    public roomType: string;
    public price: number;

    constructor(roomNumber: number, roomType: string, price: number = 2500){
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.price = price;
    }

    getRoomNumber(): number{
        return this.roomNumber;
    }
    setRoomNumber(roomNumber: number): void{
        this.roomNumber = roomNumber;
    }
    getRoomType(): string{
        return this.roomType;
    }
    setRoomType(roomType: string): void{
        this.roomType = roomType;
    }
    getPrice(): number{
        return this.price;
    }
    setPrice(price: number): void{
        this.price = price;
    }
    getRoomDetails(): string {
        throw new Error("Method not implemented.");
    }
    
}