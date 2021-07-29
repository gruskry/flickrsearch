import { DataModel } from './../models/data.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private httpClient: HttpClient) { }
  key = 'e81e21ef77e3a9a6d01ae1c33a5344a1';

  setQueryParams(keyword:string) {
    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&text=${keyword}&format=json&nojsoncallback=1`
  }

  getData(keyword:string): Observable<DataModel> {
    return this.httpClient.get<DataModel>(this.setQueryParams(keyword)).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error data. ${error.statusText || "Unknown"}`
        );
      })
    );
  }
}
