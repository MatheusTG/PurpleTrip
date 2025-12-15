export type Room = {
  id: string;
  host: string;
  title: string;
  address: {
    id: string;
    cep: string;
    country: string;
    state: string;
    city: string;
    district: string;
    street: string;
    number: string;
    complement: string;
  };
  description: string;
  imagePath: string;
  category: "casa" | "hotel" | "apartamento";
  singleBeds: number;
  doubleBeds: number;
  dailyPrice: number;
  cancellationPolicy: "flexible" | "hard";
  minimumStayDays: number;
  maximumStayDays: number;
  blocked: boolean;
  apartment_number?: string;
  maximum_guests: number;
  number_of_single_bed: number;
  number_of_double_bed: number;
  policies: {
    id: string;
    name: string;
    icon: string;
    type: "amenity" | "restriction";
  }[];
  rating: number;
  numberOfReviews: number;
};

export type RoomFilters = {
  minPrice?: string;
  maxPrice?: string;
  guestsNumber?: string;
  stayDays?: string;
  singleBeds?: string;
  doubleBeds?: string;
  title?: Room["title"];
};
