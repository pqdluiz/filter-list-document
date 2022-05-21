import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import FilterBuilder, { IFilterQuery } from "shared/helpers/filter/typeorm/FilterBuilder";
import { Users } from "../entities/users";

import { getRepository, Repository } from "typeorm";

export class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<Users>;

  constructor() {
    this.ormRepository = getRepository(Users);
  }

  public async findAll(query: IFilterQuery): Promise<[Users[], number]> {
    const filterQueryBuilder = new FilterBuilder<Users>(
      this.ormRepository,
      query,
      "users"
    );

    const queryBuilder = filterQueryBuilder.build();
    const result = await queryBuilder.getManyAndCount();

    return result;
  }

  public async create({ name, email }: Users): Promise<Users> {
    const user = this.ormRepository.create({
      name,
      email,
    });

    return await this.ormRepository.save(user);
  }
}

