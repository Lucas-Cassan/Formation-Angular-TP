import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl='https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) {
    
   }


  getUsers()
  {
    return this.http.get<User[]>(this.baseUrl, {observe:'response'})
  }

  getUsers2()
  {
    let dd:User[]=[];
    let us= this.http.get<User[]>(this.baseUrl)
    us.subscribe(x=>{
      dd= x;
    })
    return dd;
  }

  getUser(id:number)
  {
    
     return this.http.get<User>(this.baseUrl+'/'+id)
  }
  addUser(data:any)
  {
      return this.http.post(this.baseUrl,data)
  }
}
