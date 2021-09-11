import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { data } from '../models/data';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  url="https://api.unsplash.com/search/photos/?query=key&client_id=j3AErycq5W3N4ckGZTgBCn387nw3nI2hWyHHDAMbGMc";
  constructor( private http:HttpClient) {}
  getPhotos(keyword:string){
    return this.http.get<data>(this.url.replace("key",keyword));
  }
}
