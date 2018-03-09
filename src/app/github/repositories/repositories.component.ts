import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, tap, combineLatest } from 'rxjs/operators';

import { Repository } from '../shared/repository.model';
import { RepositoriesService } from '../shared/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  repositories: Observable<Repository[]>;
  totalPages: number;
  currentPage: number;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly repositoriesServices: RepositoriesService,
  ) {}

  ngOnInit() {
    this.repositories = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('userName')),
      switchMap(username => this.repositoriesServices.getOf(username)),
      tap(
        repositories => (this.totalPages = Math.ceil(repositories.length / 4)),
      ),
      combineLatest(
        this.route.queryParamMap.pipe(
          map(queryParamMap => {
            if (!queryParamMap.has('page')) {
              return 1;
            }
            return +queryParamMap.get('page');
          }),
          tap(page => (this.currentPage = page)),
        ),
      ),
      map(([repositories, virtualPage]) => {
        const offsetStart = (virtualPage - 1) * 4;
        const offsetEnd = offsetStart + 4;
        return repositories.slice(offsetStart, offsetEnd);
      }),
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    // changes the route without moving from the current view
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: page,
      },
      queryParamsHandling: 'merge',
    });
  }
}
