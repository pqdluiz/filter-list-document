import { IFilterQuery } from "shared/helpers/filter/typeorm/FilterBuilder";
import { Users } from "../http/typeorm/entities/users";

export interface IUsersRepository {
  findAll(query: IFilterQuery): Promise<[Users[], number]>;
  create({ name, email }: Users): Promise<Users>;
}
