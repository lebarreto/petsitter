import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateChecklistsService from '@modules/checklists/services/CreateChecklistsService';
import AppError from '@shared/errors/AppError';
import ListChecklistsService from '@modules/checklists/services/ListChecklistsService';

export default class ChecklistsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { pet_id, user_id, questions } = request.body;

    const createChecklist = container.resolve(CreateChecklistsService);
    const checklist = await createChecklist.execute({
      pet_id,
      user_id,
      questions
    });

    return response.json(classToClass(checklist));
  }


  public async listById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findChecklist = container.resolve(ListChecklistsService);
    const checklist = await findChecklist.listById(id)

    return response.json(classToClass(checklist));
  }

  public async listByOwner(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findChecklist = container.resolve(ListChecklistsService);
    const checklists = await findChecklist.listByOwner(id)

    return response.json(classToClass(checklists));
  }

  public async listByPet(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findChecklist = container.resolve(ListChecklistsService);
    const checklists = await findChecklist.listByPet(id)

    return response.json(classToClass(checklists));
  }
}
