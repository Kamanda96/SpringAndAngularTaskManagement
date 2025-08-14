import { Component } from '@angular/core';
import {TaskService} from '../../service/taskService';
import {User} from '../../model/user';
import {Task} from '../../model/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task:Task[] = new Array<Task>()

  constructor(private taskService:TaskService) {
  }

  ngOnInit() :void{
  this.taskService.getAllTasks().subscribe(data => {
    this.task = data
    console.log(data)
  })
}

}
