import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiUrl = 'https://api.giphy.com/v1/gifs/random';
  private apiKey = '3u7j7vcOh2OUZ0y167KJJEY8frDWm52r';

  constructor(private http: HttpClient) {}

  getRandomGif(tag: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('tag', tag);

    return this.http.get(this.apiUrl, { params });
  }
}
