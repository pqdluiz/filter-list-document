import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import { CreateUserUseCase } from "./createUsersUsecase";

export class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    const user = await createUserUseCase.execute({
      name,
      email,
    });

    return response
      .status(201)
      .json({ success: true, user: classToClass(user) });
  }
}
