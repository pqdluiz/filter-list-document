import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToclass } from "class-validator";

import { FindAllUsersUseCase } from "./findAllUsersUsecase";
import { parseQueryFilters } from "shared/helpers/filter/parsers/parseQueryFilters";

export class FindAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(FindAllUsersUseCase);
    const user = await createUserUseCase.execute(
      parseQueryFilters(request.query)
    );

    return response
      .status(201)
      .json({ success: true, user: classToclass(user) });
  }
}
