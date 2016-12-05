import { JsonController, Get } from 'routing-controllers';
import { InMemoryNoteRepository } from './../../../modules/note/infrastructure/persistance/in-memory/InMemoryNoteRepository';
import { UseCase as ListNoteUseCase } from './../../../application/use-cases/list-notes/UseCase';

@JsonController()
export class ApiController {

  private useCases: Map<string, any> = new Map<string, any>();

  constructor() {
    this.useCases.set('listNotes', new ListNoteUseCase(new InMemoryNoteRepository));
  }

  getUseCase(name: string): any {
    return this.useCases.get(name);
  }
}
