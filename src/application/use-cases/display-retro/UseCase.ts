import { Retro } from './../../../modules/retro/domain/retro';
import { RetroRepository } from './../../../modules/retro/domain/retroRepository';
import { ValidationException } from './../../../shared-domain/ValidationException';
import { Command } from './Command';
import { Responder } from './Responder';


export class UseCase {

  private retroRepository: RetroRepository;

  constructor(retroReository: RetroRepository) {
    this.retroRepository = retroReository;
  }

  async execute(command: Command, responder: Responder) {
    try {
      const id = command.getId();
      const retro = await this.retroRepository.findById(id);
      responder.retroSuccessfullyFound(retro);
    } catch (e) {
      responder.retroNotFound();
    }
  }

}
