import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    name: '',
    email: '',
    password: '',
    dob: '',
    phonenumber: '',
    gender: ''

  };

  resp: any;
 
  constructor(private router: Router, private testServ: TestService) { }

  ngOnInit(): void {
  }

  register() {
    if (!this.user.name || !this.user.dob || !this.user.email || !this.user.phonenumber || !this.user.password ) {
      alert('fields are required');
      return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)) {
      alert('Invalid email');
      return false;
    }
    if (!/^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(this.user.phonenumber)) {
      alert('Enter 10 digit mobile number');
      return false;
    }
    if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(this.user.password)) {
      alert('Password must have atleast a number and special character')
    }
    console.log(this.user.name);
    console.log(this.user.email);
    console.log(this.user.password);
    console.log(this.user.phonenumber);
    this.testServ.register(this.user).subscribe((resp) => {
      console.log(resp);
      if (this.resp.msg('Successful')) {
        window.alert('User registered successfully');
        this.router.navigate(['/login']);
      } else {
        window.alert('User already exist!');
      }
    });
  }
}
