import { Retro } from './../../../modules/retro/domain/retro';
import { RetroFactory } from './../../../modules/retro/domain/RetroFactory';
import { RetroRepository } from './../../../modules/retro/domain/RetroRepository';
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
      const retro = RetroFactory.create(command.getRetro());
      const addedretro = await this.retroRepository.add(retro);

      responder.retroSuccessfullyCreated(addedretro);
    } catch (e) {
      responder.retroNotCreated(e.getErrors());
    }
  }

}
