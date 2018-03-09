import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { GithubRoutingModule } from './github-routing.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';
import { UsersService } from './shared/users.service';

@NgModule({
  imports: [
    SharedModule,
    GithubRoutingModule
  ],
  declarations: [UserListComponent, UserCardComponent, PaginationBarComponent],
  providers: [UsersService]
})
export class GithubModule { }
