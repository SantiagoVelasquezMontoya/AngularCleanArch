import { IUserModel } from './../../models/user/user.model';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { CreateUserGateway } from '../../models/user/gateway/user.gateway';

@Injectable()
export class PostCreateUserUseCase {
  constructor(private createUserGateway: CreateUserGateway) {}

  invoke(params: any): Observable<IUserModel | null> {
    return this.createUserGateway.createUser(params).pipe(
      catchError(() => {
        return of(null);
      })
    );
  }
}
