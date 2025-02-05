import { Room } from "./Room";
// This shows the Liskov-Substitution Principle
// as Different types of rooms are extending the parent room class
// but having their  own features
// i.e. they are replacing the parent Room class
export class SuiteRoom extends Room {
  constructor(roomNumber: number, price: number) {
    super(roomNumber, "Suite", price);
  }

  getLuxuryService(): string {
    return "Enjoy free spa & complimentary breakfast.";
  }
}
