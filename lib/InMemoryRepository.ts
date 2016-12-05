interface Idwise {
  id: number;
}

export class InMemoryRepository<T extends Idwise> {

  private repo: Array<T> = [];
  
  add(item: T): number {
    return this.repo.push(item);
  }

  findById(id: number): T {
    return this.repo.find(item => item.id === id);
  }

  getAll(): Array<T> {
    return this.repo;
  }
}


