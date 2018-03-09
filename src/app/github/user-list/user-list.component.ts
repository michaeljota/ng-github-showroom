import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../shared/user.model';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private readonly usersServices: UsersService) {}

  ngOnInit() {
    this.users = this.usersServices.getAll();
  }

  onPageChange(page: number) {
    const offset = (page - 1 ) * 4;
    this.users = this.usersServices.getAll(offset);
  }
}
