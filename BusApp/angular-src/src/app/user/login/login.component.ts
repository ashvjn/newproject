import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  user = {
    email: '',
    password: ''
  };

  resp: any;
  constructor(private router: Router, private testServ: TestService) { }

  ngOnInit(): void {
  }
  validate() {
    if (!this.user.email || !this.user.password  ) {
       alert('fields are required');
       return false;
    }
    this.testServ.auth(this.user).subscribe((resp) => {
      console.log(resp);
      if (resp) {
        alert('Logged in successfully');
        this.router.navigate(['/plan']);
      } else {
        alert('Incorrect email or password');
      }
    });

  }
}
