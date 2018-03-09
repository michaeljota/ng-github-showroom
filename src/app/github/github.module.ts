import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';

@NgModule({
  imports: [
    CommonModule,
    GithubRoutingModule
  ],
  declarations: [UserListComponent, UserCardComponent, PaginationBarComponent]
})
export class GithubModule { }
