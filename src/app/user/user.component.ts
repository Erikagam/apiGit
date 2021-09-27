import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { CookieService } from 'ngx-cookie';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { }
  repositorios:any;
  ngOnInit(): void {
   this.repositorios = this.cookieService.get('repos')
  }

}
