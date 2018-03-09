import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { GithubRoutingModule } from './github-routing.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoryCardComponent } from './repository-card/repository-card.component';

import { UsersService } from './shared/users.service';
import { RepositoriesService } from './shared/repositories.service';

@NgModule({
  imports: [SharedModule, GithubRoutingModule],
  declarations: [
    UserListComponent,
    UserCardComponent,
    PaginationBarComponent,
    RepositoriesComponent,
    RepositoryCardComponent,
  ],
  providers: [UsersService, RepositoriesService],
})
export class GithubModule {}
