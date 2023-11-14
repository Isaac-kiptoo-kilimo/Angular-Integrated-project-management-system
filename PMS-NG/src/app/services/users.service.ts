import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from '../interfaces/users';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  apiUrl='http://localhost:5200/users/checkUserDetails'

  constructor(private http: HttpClient) { }



  
  getUsers(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>('http://localhost:5200/users/', {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }



  getSingleUser(user_id:string): Observable<UserDetails> {
    return this.http.get<UserDetails>(` http://localhost:5200/users/single/${user_id}`, {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }




  // async checkDetails(){
  //   let token = localStorage.getItem('token') as string
  //   let res = await fetch('http://localhost:5200/users/checkUserDetails',{
  //     headers:{
  //       "Content-type": "application/json",
  //       "token": token
  //     }
  //   })

  //   let data = await res.json()

  //   let role = data.info.role

  //   console.log(role);
    

  //   return role
  // }
 
  checkDetails(): Observable<string> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

    return this.http.get<any>(this.apiUrl, { headers }).pipe(map(data => data.info.role));
  }

}
  




