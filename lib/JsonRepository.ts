import * as fs from 'fs';


interface QueryParam {
  key: string;
  value: any;
}

interface ObjectFactory<T> {
  create(data: any) : T;
}

export class JsonRepository<T> {

  private repo: Array<any>;
  private filePath: string;
  private objectFactory: ObjectFactory<T>;

  constructor(filePath: string, objectFactory: ObjectFactory<T>) {
    this.repo = [];
    this.filePath = filePath;
    this.objectFactory = objectFactory;
  }

  private async saveState() {
    return new Promise<void>((resolve, reject) => {
      const content = JSON.stringify(this.repo);
      fs.appendFile(this.filePath, content, 'utf8', (err: any) => 
        err ? reject(err) : resolve()
      );
    });
  }

  async init() {
    const a = new Promise<Array<any>>(() => {});

    this.repo = await new Promise<Array<any>>((resolve, reject) => {
      fs.readFile(this.filePath, 'utf8', (err: any, data: string) => {
        if (err) {
          reject(err);
          return;
        }
      
        try {
          const items = JSON.parse(data);
          const instances = items.map(this.objectFactory.create);

          resolve(instances);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  
  async add(item: any): Promise<any> {
    const objectToStore = Object.assign({}, item, {
      id: String(this.repo.length + 1)
    });

    const instance = this.objectFactory.create(objectToStore);
    this.repo.push(instance);
    await this.saveState();

    return Promise.resolve(instance);
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
    await this.saveState();

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
    const editedInstance = this.objectFactory.create(editedItem);

    this.repo = [
      ...this.repo.slice(0, index),
      editedInstance,
      ...this.repo.slice(index + 1)
    ];

    await this.saveState();

    return Promise.resolve(editedInstance);
  }

}
