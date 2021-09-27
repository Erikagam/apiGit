import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {NavigationExtras, Router} from '@angular/router'
import { query } from '@angular/animations';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) { }
  navigation: NavigationExtras
  f: NgForm;
  gitUserName: string;
  gitPassword: string;
  reposInformacion :any;
  ngOnInit(): void {
  }

  onSubmit(f: NgForm){ 
    this.gitUserName = f.controls['username'].value
    this.gitPassword = f.controls['password'].value
    setTimeout(() => {
      this.signInGit(this.gitUserName)
    }, 1000)
  }

  signInGit(username){
    return this.authService.loginWithGitHub(username).subscribe(data => {
      this.reposInformacion = JSON.stringify(data)
      this.cookieService.put('repos', this.reposInformacion)
      this.router.navigate(['/user'])
      
    })
  }


}
