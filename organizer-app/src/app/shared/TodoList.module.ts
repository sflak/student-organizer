import { TodoItem } from '../shared/TodoItem.module';
export class TodoList {
  constructor(public label: string, public list: TodoItem[]) {}
}
