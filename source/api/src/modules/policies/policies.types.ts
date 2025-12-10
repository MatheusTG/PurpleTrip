export type Policie = {
  id: string;
  roomId: string;
  name: string;
  icon?: string;
  type: "amenity" | "restriction";
  createdAt: Date | number;
  updatedAt: Date | number;
};
