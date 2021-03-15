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
import { ClaseListResolver2 } from './shared/claseresolver2.service';
import { ClaseListResolver3 } from './shared/claseresolver3.service';
import { DetailProductoComponent } from './clase-datails/clase_details.components';
import {EmailFormComponent} from './sendEmail/form.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},//reviews
  {path: 'Productos/:myid',component: DetailProductoComponent,resolve: {productos: ClaseListResolver2,reviews: ClaseListResolver3}},
  {path: 'CrearProductos', component: CrearProductoComponent,canDeactivate: [ClaseRouteDeactivator]},
  {path: 'EditarProductos/:myid',component:EditarProductoComponent,canDeactivate: [ClaseRouteDeactivator],resolve: {productos: ClaseListResolver2}},
  {path: 'lista', component: ProductosComponent, resolve: {productos: ClaseListResolver}},
  {path: 'categories/:index/:category', component: TabGroupComponent, resolve: {productos: ClaseListResolver}},
  {path: 'sendMail', component: EmailFormComponent},

  {path: 'checkout', component: CheckoutComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
