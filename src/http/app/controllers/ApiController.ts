import { JsonController, Get } from 'routing-controllers';
import { InMemoryNoteRepository } from './../../../modules/note/infrastructure/persistance/in-memory/InMemoryNoteRepository';
import { UseCase as ListNoteUseCase } from './../../../application/use-cases/list-notes/UseCase';
import { UseCase as AddNoteUseCase } from './../../../application/use-cases/add-note/UseCase';

@JsonController()
export class ApiController {

  private useCases: Map<string, any> = new Map<string, any>();
  public static inMemoryRepository: InMemoryNoteRepository = new InMemoryNoteRepository();

  constructor() {
    this.useCases.set('listNotes', new ListNoteUseCase(ApiController.inMemoryRepository));
    this.useCases.set('addNote', new AddNoteUseCase(ApiController.inMemoryRepository));
  }

  getUseCase(name: string): any {
    return this.useCases.get(name);
  } 
}
