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

  startHour:number = null;
  startMin:number = null;
  startAmPm:string = null;
  finishHour: number =null;
  finishMin:number = null;
  finishAmPm:string = null;

  constructor() { }

  ngOnInit() {
  }

  oneTimePresent():boolean{
      if(this.editComponent.saved){
          if(!isNaN(this.editComponent.startHour) && !isNaN(this.editComponent.startMin)
            && isNaN(this.editComponent.finishHour)  && isNaN(this.editComponent.finishMin)){
                return true;
          }else if(isNaN(this.editComponent.startHour) && isNaN(this.editComponent.startMin)
            && !isNaN(this.editComponent.finishHour) && !isNaN(this.editComponent.finishMin)){
                return true;
          }else{
                return false;
        }
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
      if(!isNaN(this.editComponent.startHour) && !isNaN(this.editComponent.startMin)
           && this.editComponent.saved == true){
              return true;
      }else{
        return false;
      }
  }

  finishTimePresent():boolean{
      if(!isNaN(this.editComponent.finishHour) && !isNaN(this.editComponent.finishMin)
           && this.editComponent.saved == true){
              return true;
      }else{
        return false;
      }
  }
}
