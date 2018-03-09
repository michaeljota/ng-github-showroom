import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Repository } from './repository.model';

@Injectable()
export class RepositoriesService {
  private readonly uri = 'https://api.github.com/users';

  constructor(private readonly http: HttpClient) {}

  getOf(user: string) {
    return this.http
      .get<Repository[]>(`${this.uri}/${user}/repos`)
      .pipe(
        catchError(this.handleError<Repository[]>(`getReposOf: ${user}`, [])),
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T = void>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
