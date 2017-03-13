interface QueryParam {
  key: string;
  value: any;
}

export class InMemoryRepository {

  private repo: Array<any>;

  constructor() {
    this.repo = [];
  }
  
  async add(item: any): Promise<any> {
    item.id = String(this.repo.length + 1);
    this.repo.push(item);
    return Promise.resolve(item);
  }

  async findById(id: string): Promise<any> {
    const item = this.repo.find(item => item.id === id);
    return Promise.resolve(item);
  }

  async findBy(query: QueryParam): Promise<Array<any>> {
    const items = await this.repo.filter(item => {
      return item[query.key] === query.value;
    });

    return items;
  }

  async getAll(): Promise<Array<any>> {
    return Promise.resolve(this.repo);
  }

  async delete(id: string): Promise<Boolean> {
    let index = -1;
    const { length } = this.repo;
    
    for (let i = 0; i < length; i++) {
      if (this.repo[i].getId() === id) {
        index = i;
        break; 
      }
    }

    if (index === -1) {
      throw new Error(`Item with ${id} not found!`);
    }

    this.repo = [
      ...this.repo.slice(0, index),
      ...this.repo.slice(index + 1)
    ];

    return Promise.resolve(true);
  }

  async edit(item: any): Promise<any> {
    const { id } = item;
    const { length } = this.repo;
    let index = -1;
    
    for (let i = 0; i < length; i++) {
      if (this.repo[i].getId() === id) {
        index = i;
        break; 
      }
    }

    if (index === -1) {
      throw new Error(`Item with ${id} not found!`);
    }

    const editedItem = Object.assign({}, this.repo[index], item);

    this.repo = [
      ...this.repo.slice(0, index),
      editedItem,
      ...this.repo.slice(index + 1)
    ];

    return Promise.resolve(editedItem);
  }

}
