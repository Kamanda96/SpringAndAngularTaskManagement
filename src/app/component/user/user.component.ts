import { Component } from '@angular/core';
import {User} from '../../model/user';
import {TaskService} from '../../service/taskService';
import {UsersService} from '../../service/usersService';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user:User[] = new Array<User>()

  constructor(private userService:UsersService) {
  }

  ngOnInit() :void{
    this.userService.getAllUsers().subscribe(data => {
      this.user = data
      console.log(data)
    });
  }
}
