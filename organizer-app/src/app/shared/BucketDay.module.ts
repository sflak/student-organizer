import {TodoItem} from './TodoItem.module';
export class BucketDay {
  constructor (public theDate: Date, public todoItems: TodoItem []) {}

  changeDate(d): void {
      this.theDate = d;
  }
}
