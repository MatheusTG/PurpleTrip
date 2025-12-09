export type Room = {
  id: string;
  ownerId: string;
  addressId: string;

  title: string;
  description: string;
  imagePath: string;

  category: "house" | "hotel" | "apartment";

  doubleBeds: number;
  singleBeds: number;

  dailyPrice: number;

  cancellationPolicy: "flexible" | "moderate" | "strict";

  minimumStayDays: number;
  maximumStayDays: number;

  isBlocked: boolean;

  apartmentNumber: string;
  maximumGuests: number;

  createdAt: Date | null;
  updatedAt: Date | null;
};
