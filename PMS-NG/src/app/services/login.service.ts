import { Injectable } from '@angular/core';
import { userLogin } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: any;
  // checkDetails() {
  //   throw new Error('Method not implemented.');
  // }

  constructor() { }

  async login(userLogins: userLogin){
    let response = await fetch('http://localhost:5200/users/login', {
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(userLogins)
    })

    const data = await response.json()
    let token = data.token
    localStorage.setItem('token', token)
    

    console.log(token);
    
    

    return data
  }

}
