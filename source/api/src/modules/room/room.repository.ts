import { and, eq, gte, ilike, lte } from "drizzle-orm";
import { RequestQuerystringDefault } from "fastify";
import db from "../../infra/database";
import { rooms } from "../../infra/db/schema";
import { RepositoryBase } from "../../shared/repositories/repository.base";
import { Room, RoomFilters } from "./room.types";

export class RoomRepository extends RepositoryBase<Room> {
  constructor() {
    super(rooms);
  }

  private static parseNumericFilter(value: string | undefined): number | undefined {
    if (value === undefined) return undefined;
    const num = parseInt(value);
    return isNaN(num) ? undefined : num;
  }

  override async getAsync(query?: RequestQuerystringDefault): Promise<Room[]> {
    const { minPrice, maxPrice, singleBeds, doubleBeds, stayDays, guestsNumber, title } = (query || {}) as RoomFilters;

    const conditions = [];

    // Filtro de preço mínimo
    const minPriceNum = RoomRepository.parseNumericFilter(minPrice);
    if (minPriceNum !== undefined) {
      conditions.push(gte(rooms.dailyPrice, minPriceNum));
    }

    // Filtro de preço máximo
    const maxPriceNum = RoomRepository.parseNumericFilter(maxPrice);
    if (maxPriceNum !== undefined) {
      conditions.push(lte(rooms.dailyPrice, maxPriceNum));
    }

    // Filtro de camas de solteiro
    const singleBedsNum = RoomRepository.parseNumericFilter(singleBeds);
    if (singleBedsNum !== undefined) {
      conditions.push(singleBedsNum === 0 ? eq(rooms.singleBeds, 0) : gte(rooms.singleBeds, singleBedsNum));
    }

    // Filtro de camas de casal
    const doubleBedsNum = RoomRepository.parseNumericFilter(doubleBeds);
    if (doubleBedsNum !== undefined) {
      conditions.push(doubleBedsNum === 0 ? eq(rooms.doubleBeds, 0) : gte(rooms.doubleBeds, doubleBedsNum));
    }

    // Filtro de dias de estadia
    const stayDaysNum = RoomRepository.parseNumericFilter(stayDays);
    if (stayDaysNum !== undefined) {
      conditions.push(gte(rooms.maximumStayDays, stayDaysNum));
      conditions.push(lte(rooms.minimumStayDays, stayDaysNum));
    }

    // Filtro de máximo de hóspedes
    const guestsNumberNum = RoomRepository.parseNumericFilter(guestsNumber);
    if (guestsNumberNum !== undefined) {
      conditions.push(gte(rooms.maximumGuests, guestsNumberNum));
    }

    // Filtro de título
    if (title !== undefined && title.trim() !== "") {
      conditions.push(ilike(rooms.title, `%${title}%`));
    }

    const rows = await db
      .select()
      .from(this.table)
      .where(conditions.length > 0 ? and(...conditions) : undefined);

    return rows as Room[];
  }
}
