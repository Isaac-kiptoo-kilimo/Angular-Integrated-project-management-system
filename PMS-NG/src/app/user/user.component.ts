import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../interfaces/users';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: UserDetails;
  user_id!: string ;

  constructor(
    private userservice: UsersService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.user_id = params['user_id'];
      console.log(this.user_id);
      
      this.getSingleUser();
    });
  }

  getSingleUser() {
    let token = localStorage.getItem('token') as string
    console.log(token[0]);
  
    if (token) {
      this.userservice.getSingleUser(this.user_id).subscribe(
        (user) => {
          console.log(user);
          console.log(this.user_id);
          
          this.user = user;
        },
        (error) => {
          console.error('Error fetching single user:', error);
        }
      );
    } else {
      
      this.router.navigate(['/login']);
    }
  }
}
