import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private httpClient: HttpClient) { }
  key = 'e81e21ef77e3a9a6d01ae1c33a5344a1';
  
  setQueryParams(keyword:string) {
    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&text=${keyword}}&format=json&nojsoncallback=1`
  }

  getData(keyword:string) {
    return this.httpClient.get(this.setQueryParams(keyword))
  }
}
