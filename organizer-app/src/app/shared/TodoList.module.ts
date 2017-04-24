import { TodoItem } from './TodoItem.module';
export class TodoList {
  constructor(public label: string, public list: TodoItem[]) {}
}
