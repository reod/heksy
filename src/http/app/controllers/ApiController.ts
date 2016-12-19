import { JsonController, Get } from 'routing-controllers';
import { InMemoryNoteRepository } from './../../../modules/note/infrastructure/persistance/in-memory/InMemoryNoteRepository';
import { MongoNoteRepository } from './../../../modules/note/infrastructure/persistance/mongo/MongoNoteRepository';

import { UseCase as ListNoteUseCase } from './../../../application/use-cases/list-notes/UseCase';
import { UseCase as AddNoteUseCase } from './../../../application/use-cases/add-note/UseCase';

@JsonController()
export class ApiController {

  private useCases: Map<string, any> = new Map<string, any>();
  public static inMemoryNoteRepository: InMemoryNoteRepository = new InMemoryNoteRepository();
  public static mongoNoteRepository: MongoNoteRepository = new MongoNoteRepository();

  constructor() {
    // const repo = ApiController.inMemoryNoteRepository;
    const repo = ApiController.mongoNoteRepository;
    this.useCases.set('listNotes', new ListNoteUseCase(repo));
    this.useCases.set('addNote', new AddNoteUseCase(repo));
  }

  getUseCase(name: string): any {
    return this.useCases.get(name);
  } 
}
