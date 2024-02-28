import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../env/env';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private api = `${environment.GIT_Api}`;
  private http = inject(HttpClient);
  constructor() { }

  getAll(user: string) {
    return this.http.get<any>(`${this.api}/users/${user}/repos`);
  }

}
