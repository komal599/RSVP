import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from 'src/app/users';

@Injectable({
  providedIn: 'root'
})
export class TabledataServiceService {

  constructor(private _http:HttpClient) { }

  

  url:string = "http://localhost:4200/Users";
  getUsers(){
   return this._http.get<Users[]>(this.url);

  }
}
