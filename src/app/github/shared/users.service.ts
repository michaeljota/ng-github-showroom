import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

import { User } from './user.model';

@Injectable()
export class UsersService {
  private readonly uri = 'https://api.github.com/users';

  constructor(private readonly http: HttpClient) {}

  getAll(offset: number = 0) {
    return this.http
      .get<User[]>(`${this.uri}?since=${offset}`)
      .pipe(
        map(users => users.slice(0, 4)),
        catchError(this.handleError<User[]>('getAllUsers', [])),
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
