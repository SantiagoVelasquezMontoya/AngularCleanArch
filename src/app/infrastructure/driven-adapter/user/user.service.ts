import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CreateUserGateway } from 'src/app/domain/models/user/gateway/user.gateway';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService extends CreateUserGateway {
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {
    super();
  }

  createUser(params: any): Observable<any> {
    return this.http.post<any>(
      'https:/jsonplaceholder.typicode.com/users',
      params,
      {
        headers: this.httpHeaders,
      }
    );
  }
}
