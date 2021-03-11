import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './CrearProducto/crearProducto.components';
import { ClaseRouteDeactivator } from './CrearProducto/desactivator.components';
import { EditarProductoComponent } from './editarProducto/editarProducto.components';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { TabGroupComponent } from './tab/tab.component';
import {CheckoutComponent} from './checkout/checkout.component'
import { ClaseListResolver } from './shared/claseresolver.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'CrearProductos', component: CrearProductoComponent,canDeactivate: [ClaseRouteDeactivator]},
  {path: 'EditarProductos/:myid',component:EditarProductoComponent,canDeactivate: [ClaseRouteDeactivator]},
  {path: 'lista', component: ProductosComponent, resolve: {productos: ClaseListResolver}},
  {path: 'categories/:index/:category', component: TabGroupComponent, resolve: {productos: ClaseListResolver}},
  {path: 'checkout', component: CheckoutComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
