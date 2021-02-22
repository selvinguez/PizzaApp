import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { ProductosComponent } from './productos/productos.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { TabGroupComponent } from './tab/tab.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card-component';
import {MatBadgeModule} from '@angular/material/badge';
import { BadgeIconComponent } from './badgeIcon/badge-icon-component';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridMenu } from './gridMenu/grid-menu.component';
import {ClaseService} from './shared/clase.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    MenuComponent,
    HomeComponent,
    ProductosComponent,
    LoginComponent,
    TabGroupComponent,
    CardComponent,
    BadgeIconComponent,
    GridMenu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
 
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatGridListModule,
    
 
    BrowserAnimationsModule
  ],
  providers: [
    ClaseService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1025114942345-be6ugi6j3eooo0rtivtce84tb85o6ol2.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('741424296508725')
          }
        ]
      } as SocialAuthServiceConfig,
    },   MenuComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
