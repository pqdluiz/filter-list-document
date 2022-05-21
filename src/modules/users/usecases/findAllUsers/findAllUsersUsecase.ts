import { Users } from 'modules/users/http/typeorm/entities/users';
import { IFilterQuery } from 'shared/helpers/filter/typeorm/FilterBuilder';
import { IUsersRepository } from '../../repositories/IUsersRepository';

import { inject, injectable } from 'tsyringe';

export interface IResponse {
  total: number;
  total_page: number;
  result: Users[];
}

@injectable()
export class FindAllUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(query: IFilterQuery): Promise<IResponse> {
    const [result, total] = await this.usersRepository.findAll(query);

    const response: IResponse = {
      result,
      total,
      total_page: Math.ceil(total / query.per_page),
    };

    return response;
  }
}

