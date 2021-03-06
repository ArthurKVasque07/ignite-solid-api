import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationsController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationsRepository = new SpecificationRepository();
const createSpecificationsUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationsController = new CreateSpecificationController(createSpecificationsUseCase);

export { createSpecificationsController }
