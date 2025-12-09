export type Policie = {
  id: string;
  room_id: string;
  name: string;
  icon?: string;
  type: "amenity" | "restriction";
  createdAt: Date | number;
  updatedAt: Date | number;
};
