import { Component, OnInit, Input, Output } from '@angular/core';

import { TodoItem} from '../../../shared/TodoItem.module';
import { AfterViewInit, ViewChild } from '@angular/core';

import {EditEventComponent} from './edit-event/edit-event.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() timeStart: number;
  @Output() timeEnd: number;
  @ViewChild(EditEventComponent) editComponent: EditEventComponent;

  constructor() { }

  ngOnInit() {
  }

  onlyStartTimePresent():boolean{
        if(this.editComponent.startHour!=null && this.editComponent.startMin!=null && this.editComponent.startAmPm!=null
            && this.editComponent.finishHour==null  && this.editComponent.finishMin==null && this.editComponent.finishAmPm == null){
                return true;
        }else{
            return false;
        }
    }
    onlyFinishTimePresent():boolean{
        if(this.editComponent.startHour==null && this.editComponent.startMin==null && this.editComponent.startAmPm == null
            && this.editComponent.finishHour!=null && this.editComponent.finishMin!=null && this.editComponent.finishAmPm!=null){
                return true;
        }else{
                return false;
        }
  }

  bothTimesPresent():boolean{
      if(this.startTimePresent() && this.finishTimePresent()){
        return true;
      }else{
            return false;
      }
    }

  startTimePresent():boolean{
      if(this.editComponent.startHour!=null && this.editComponent.startMin!=null
          &&this.editComponent.startAmPm!=null){
              return true;
      }else{
              return false;
      }
  }

  finishTimePresent():boolean{
      if(this.editComponent.finishHour!=null && this.editComponent.finishMin!=null
          && this.editComponent.finishAmPm != null){
            return true;
      }else{
            return false;
      }
  }
}
