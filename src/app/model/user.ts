import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from './task';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class User {
  id?:number;
  fullName?:string;
  email?:string;
  task?:Task[] = new Array<Task>();
}
