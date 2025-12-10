export type Address = {
  id: string;
  cep: string;
  neighborhood: string;
  street: string;
  number?: string;
  complement?: string;
  createdAt: Date | number;
  updatedAt: Date | number;
};
