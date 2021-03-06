import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { ClaseService } from "../shared/clase.service";
import { loginService } from '../login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userLogged: SocialUser;
  isLogged: boolean;
  isAdmin: boolean;
  isNormalLogged:boolean;
  cartLength:number;

  constructor(    private authService: SocialAuthService, private router: Router,public user:loginService, public ClaseService:ClaseService) { }


  ngOnInit(): void {
    this.isAdmin = this.user.getadmin2()
    this.isNormalLogged = this.user.getLogged()
    this.cartLength = this.ClaseService.getCartLength()
    this.authService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null );
      }
    );
  }

 
  logOut(): void {
    this.authService.signOut()
      
        this.router.navigate(['/login']);
      
    
  }
  
  NormallogOut(): void {
        this.user.setLogged()
        this.router.navigate(['/login']);
    
  }

}
