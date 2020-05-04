import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed = false;

  constructor(private cookieService : CookieService, private router : Router) { }

  ngOnInit(): void {
    if (this.cookieService.get('userId') == ''){
      this.router.navigateByUrl('login');
    }
  }

  logout(){
    this.cookieService.set('userId', '');
    this.router.navigateByUrl('login');
  }

}
