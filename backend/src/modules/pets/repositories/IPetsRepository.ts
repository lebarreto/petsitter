import Pets from "../infra/typeorm/entities/Pets";
import ICreatePetDTO from "../dtos/ICreatePetDTO";
import IFindPetByOwnerDTO from "../dtos/IFindPetByOwnerDTO";

export default interface IPetsRepository {
  findById(id: string): Promise<Pets | undefined>;
  findByOwnerId(user_id: string): Promise<IFindPetByOwnerDTO[]>;
  create(data: ICreatePetDTO): Promise<Pets>;
  save(pet: Pets): Promise<Pets>;
}
