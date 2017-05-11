export class Activity {

    name : string; // holds task. Example "Read Chaper 4 in Chem Book"

    priority : string; // holds how an important task. scale 1 - 10
    // alphabet determines ties with priority

    listname: string; // name of list

    time: string; // time

    button : string; // true if hidden. false otherwise

    constructor(itemName: string, listNum: string, priorityNum:string) {
      this.name = itemName;
      this.time = "hi"
      this.priority = priorityNum;
      this.button = "false";
      this.listname = listNum;
    }

}