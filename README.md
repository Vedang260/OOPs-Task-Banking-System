# Hotel Management System - SOLID Principles

This project demonstrates the **SOLID** principles in **TypeScript** using a **Hotel Management System**. Below is a breakdown of where each SOLID principle is applied in the project.

---

## **1. Single Responsibility Principle (SRP)** 🏗️
> **A class should have only one reason to change.**

✅ **Implemented in:**
- `Room.ts` (Handles only room details)
- `Booking.ts` (Handles only booking logic)
- `PaymentService.ts` (Handles only payment processing)

📌 **Example:**
```typescript
export class Room {
  constructor(public roomNumber: number, public type: string, public price: number) {}

  getRoomDetails(): string {
    return `Room ${this.roomNumber} - ${this.type} - $${this.price}/night`;
  }
}
```

Each class has a single responsibility and does not mix concerns.

---

## **2. Open/Closed Principle (OCP)** 🚀
> **A class should be open for extension but closed for modification.**

✅ **Implemented in:**
- `IPayment.ts` (Defines an interface for payment methods)
- `CreditCardPayment.ts`, `UPIPayment.ts` (Extend payment functionality without modifying existing code)

📌 **Example:**
```typescript
export interface IPayment {
  pay(amount: number): void;
}

export class CreditCardPayment implements IPayment {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card.`);
  }
}
```

New payment methods can be added by implementing `IPayment` without modifying existing classes.

---

## **3. Liskov Substitution Principle (LSP)** 🔄
> **Derived classes should be substitutable for their base classes.**

✅ **Implemented in:**
- `SuiteRoom.ts` extends `Room.ts`

📌 **Example:**
```typescript
export class SuiteRoom extends Room {
  constructor(roomNumber: number, price: number) {
    super(roomNumber, "Suite", price);
  }
  
  getLuxuryService(): string {
    return "Enjoy free spa & complimentary breakfast.";
  }
}
```

The `SuiteRoom` class extends `Room` without changing its behavior, ensuring substitutability.

---

## **4. Interface Segregation Principle (ISP)** 📑
> **Clients should not be forced to depend on interfaces they do not use.**

✅ **Implemented in:**
- `IRoom.ts` (Defines room-specific behaviors)
- `IBooking.ts` (Defines booking-specific behaviors)

📌 **Example:**
```typescript
export interface IRoom {
  getRoomDetails(): string;
}

export interface IBooking {
  calculateTotalPrice(): number;
}
```

Interfaces are divided based on functionality, preventing classes from implementing methods they don’t need.

---

## **5. Dependency Inversion Principle (DIP)** 🔗
> **Depend on abstractions, not concrete implementations.**

✅ **Implemented in:**
- `BookingService.ts` depends on `IPayment` abstraction instead of a concrete payment method.

📌 **Example:**
```typescript
export class BookingService {
  constructor(private paymentMethod: IPayment) {}

  completeBooking(booking: Booking): void {
    console.log("Booking confirmed:", booking);
    this.paymentMethod.pay(booking.calculateTotalPrice());
  }
}
```

High-level `BookingService` depends on the `IPayment` abstraction rather than a specific implementation.

---

## **Conclusion** 🎯

This project follows **SOLID** principles, making it:
✅ Maintainable  
✅ Scalable  
✅ Testable  
✅ Extendable  
