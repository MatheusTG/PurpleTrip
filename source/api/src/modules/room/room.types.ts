import { Address } from "../address/address.types";
import { Policie } from "../policies/policies.types";

export type Room = {
  id: string;
  ownerId: string;
  title: string;
  addressId: string;
  description: string;
  imagePath: string;
  category: "house" | "hotel" | "apartment";
  singleBeds: number;
  doubleBeds: number;
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

export type RoomResponse = Room & {
  address: Address;
  policies: Policie[];
};
