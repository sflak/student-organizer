export class Todolist {

    listName ?: string; // name of the list
    tempActivity ?: string; // name of the list

    constructor(name: string) {
      this.listName = name;
      this.tempActivity = "";
    }
}