import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private _HttpClient: HttpClient) {}
  getTrending(mediatype:any): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=85204a8cc33baf447559fb6d51b18313`
    );
  }
  getdetails(mediatype:string,id:number):Observable<any>
  {
  return this._HttpClient.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=85204a8cc33baf447559fb6d51b18313&language=en-US`);  
  }
  discover(mediaType:string,pagenumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=85204a8cc33baf447559fb6d51b18313&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagenumber}&with_watch_monetization_types=flatrate`)
  }
  
}
