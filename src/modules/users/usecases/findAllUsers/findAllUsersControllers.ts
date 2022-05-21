import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import { FindAllUsersUseCase } from "./findAllUsersUsecase";
import { parseQueryFilters } from "../../../../shared/helpers/filter/parsers/parseQueryFilters";

export class FindAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(FindAllUsersUseCase);
    const user = await createUserUseCase.execute(
      parseQueryFilters(request.query)
    );

    return response
      .status(201)
      .json({ success: true, user: classToClass(user) });
  }
}
