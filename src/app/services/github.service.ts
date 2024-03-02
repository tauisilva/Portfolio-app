import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../env/env';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private api = `${environment.API_GITHUB}`;
  private http = inject(HttpClient);
  constructor() { }

  getAll() {
    return this.http.get<any>(`${this.api}/users/${environment.USER_GITHUB}/repos`);
  }

  getImg(url: string): Observable<string | null> {
    return this.http.get(url, { responseType: 'text' })
      .pipe(map((html: string) => this.extractImage(html)));
  }

  private extractImage(html: string): string | null {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const metaTags = doc.querySelectorAll('meta[property="og:image"], meta[property="twitter:image"]');
    const firstTag = metaTags[0] as HTMLMetaElement | undefined;

    return firstTag ? firstTag.content : null;
  }

}
