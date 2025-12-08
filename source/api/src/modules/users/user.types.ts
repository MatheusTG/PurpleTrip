export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  birthDate?: Date | string | null;
  photoPath?: string | null;
  passwordHash: string;
  isBanned: boolean;
  profileType: "QUEST" | "HOST" | "ADMIN";
  createdAt: Date | number;
  updatedAt: Date | number;
};
