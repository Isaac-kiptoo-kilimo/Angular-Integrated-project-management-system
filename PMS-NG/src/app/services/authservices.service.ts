import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails  } from '../interfaces/users';
import { userLogin } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {
  // login(data: userLogin) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http:HttpClient) { }
  createUser(user:UserDetails ){
    this.http.post('http://localhost:5200/users/register',user).subscribe(res=>{
      return res
      // console.log(res);
      
    })
  }
  
  logInUser(user:userLogin ){
    this.http.post('http://localhost:5200/users/login',user).subscribe(res=>{
      // let token = res.token
      // localStorage.setItem('token', token)
  
      // console.log(token);
      
      return res;
    })
  }

  // login(userLogins: userLogin): Observable<any> {
  //   return this.http.post(this.apiUrl, userLogins);
  // }
}

