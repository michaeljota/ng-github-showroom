import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';

import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    GithubRoutingModule
  ],
  declarations: [UserListComponent]
})
export class GithubModule { }
