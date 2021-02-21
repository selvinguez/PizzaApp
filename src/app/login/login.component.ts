import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: SocialAuthService,
    private router: Router,) { }
  socialUser: SocialUser;
  userLogged: SocialUser;
  isLogged: boolean;
  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null );
      }
    );
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data =>{
        console.log(data)
        this.socialUser = data;
        this.isLogged = true;
        this.router.navigate(['/']);
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data =>{
        console.log(data)
        this.socialUser = data;
        this.isLogged = true;
        this.router.navigate(['/']);
      }
    );
  }

  logOut(): void {
    this.authService.signOut().then(
      data => {
      
        this.isLogged = false;
      }
    );
  }

}
