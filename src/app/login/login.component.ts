import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { MenuComponent } from '../menu/menu.component';
import { ToasterService } from '../toaster.service';
import { loginService } from './login.service';
import { userLogin } from './users.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: SocialAuthService,
    private router: Router,private loginse: loginService, private tos : ToasterService,
    private admin: MenuComponent) { }
  socialUser: SocialUser;
  userLogged: SocialUser;
  isLogged: boolean;
  isAdmin: boolean;
 
  prod:any
  password
  Correo
 
  ngOnInit(): void {

    this.authService.authState.subscribe(

      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null );
      }
    );
  }

  fnsubmit(data){
    this.loginse.addUsers(data).subscribe(()=> {
      
    })  
  }

loginu(data: userLogin):void{

  if(this.loginse.getByInfoVerificacion(data.Correo,data.password)){
    const user =this.loginse.getByInfoId(data.Correo)
    
      this.isLogged = true;
      this.loginse.setAdmin(user)
      this.loginse.setLogged()
      

    this.router.navigate(['/']);
    this.tos.success("Bienvenido " + data.Correo)
  }else{
    this.tos.success("Usuario no encontrado o datos no llenado completamente ")
  }
 
}
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data =>{
        this.socialUser = data;
        this.isLogged = true;
        
        this.router.navigate(['/']);
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data =>{
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
