export class Todolist {

    listName ?: string; // name of the list
    tempActivity ?: string; // name of the list
    showDropdown ?: boolean;
    color ?: string;

    constructor(name: string,showDropdown: boolean, color: string) {
      this.listName = name;
      this.tempActivity = "";
      this.showDropdown = showDropdown;
      this.color = "default";
    }
}