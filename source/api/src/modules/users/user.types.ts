export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  photoPath: string;
  passwordHash: string;
  isBanned: boolean;
  profileType: "QUEST" | "HOST" | "ADMIN";
  createdAt: number;
  updatedAt: number;
};
