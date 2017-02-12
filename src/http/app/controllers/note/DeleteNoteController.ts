import { JsonController, Delete, Param } from 'routing-controllers';
import { ApiController } from './../ApiController';

import { UseCase } from './../../../../application/use-cases/delete-note/UseCase';
import { Command } from './../../../../application/use-cases/delete-note/Command';
import { Responder } from './../../../../application/use-cases/delete-note/Responder';


@JsonController()
export class DeleteNoteController extends ApiController implements Responder {

  public status: boolean = false;

  @Delete('/notes/:id')
  async deleteNote(@Param('id') id: string) {
    const addNoteUseCase = this.getDeleteNoteUseCase();
    const deleteNoteCommand = new Command(id);
    await addNoteUseCase.execute(deleteNoteCommand, this);

    return this.status;
  }

  async noteDeleted() {
    this.status = true;
  }

  async noteNotDeleted(error: Error) {
    throw error;
  }

  private getDeleteNoteUseCase(): UseCase {
    return this.getUseCase('deleteNote');
  }
}
