import { style } from "@angular/animations";
import { Injectable } from "@angular/core";
import { ProductosComponent } from "../productos/productos.component";
import { ToasterService } from "../toaster.service";
declare let toastr;
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Product } from "./clase.module";
import { map } from "rxjs/operators";
@Injectable()
export class ClaseService
{
  constructor(private http: HttpClient) {
    
   
  }
    getProductos(): Observable< Product[]>{
        return this.http.get< Product[]>('http://localhost:3000/productos');
    }
    getProductosByCategory(category): Observable< Product[]>{
      return this.http.get< Product[]>(`http://localhost:3000/category/`+category);
    }

    getProductoById(codigo: number): Observable<Product[]>{
      
      return this.http.get<Product[]>('http://localhost:3000/productos/'+codigo);
    }

  addProducto(producto){
    let options = {
      headers: new HttpHeaders({
          "Content-Type": "application/json"
      })
     }
    
      toastr.success(`Producto ${producto.title} agregado`);
      return this.http.post('http://localhost:3000/productos',JSON.stringify(producto),options);
   
  }

  editProducto(producto){
    let options = {
      headers: new HttpHeaders({
          "Content-Type": "application/json"
      })
     }
    toastr.success(`Producto ${producto.title} Modificado`)
    
    PRODUCTOS[producto.id] = producto;
    return this.http.put('http://localhost:3000/productos/'+producto.id,JSON.stringify(producto),options);
   }   

   getCountid(){
    
   }

   getCart(){
    return CART;
  }

  getCartLength(){
    return CART.length;
  }

  addToCart(producto){
    CART.push(producto);
  }

  deleteFromCartById(index){
    CART.splice(index, 1);
  }

}

const CART= [
  
]

const PRODUCTOS= []