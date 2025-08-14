import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from './user';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Task {
  id?:number;
  title?:string;
  description?:string;
  status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  dueDate?:Date;
  user?:User = new User();
}
