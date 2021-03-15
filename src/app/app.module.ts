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
import { loginService } from './login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterService } from './toaster.service';
import { CrearProductoComponent} from './CrearProducto/crearProducto.components';
import { ClaseRouteDeactivator } from './CrearProducto/desactivator.components';
import { ProductoThumbnailComponent } from './productos/producto-thumnail.components';
import { EditarProductoComponent } from './editarProducto/editarProducto.components';
import {CheckoutComponent} from './checkout/checkout.component'
import { ClaseListResolver } from './shared/claseresolver.service';
import { ClaseListResolver2 } from './shared/claseresolver2.service';
import { DetailProductoComponent } from './clase-datails/clase_details.components';
import { ClaseListResolver3 } from './shared/claseresolver3.service';
import { EmailService } from '../app/email.service';
import {EmailFormComponent} from './sendEmail/form.component'

@NgModule({
  declarations: [
  AppComponent,
  ProductosComponent,
  MenuComponent,
  HomeComponent,
  LoginComponent,
  TabGroupComponent,
  CardComponent,
  BadgeIconComponent,
  GridMenu,
  CrearProductoComponent,
  ProductoThumbnailComponent,
  EditarProductoComponent,
  CheckoutComponent,
  DetailProductoComponent,
  EmailFormComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatGridListModule,
    BrowserAnimationsModule,
    
   
   
  ],
  providers: [
    ClaseService,
    loginService,
    ToasterService,
    MenuComponent,
    ClaseRouteDeactivator,
    ClaseListResolver,
    ClaseListResolver2,
    ClaseListResolver3,
    EmailService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
         // ToasterService,
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
    },   MenuComponent,
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
