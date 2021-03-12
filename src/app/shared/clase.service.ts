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
      console.log(category)
      return this.http.get< Product[]>(`http://localhost:3000/category/`+category);
    }

    getProductoById(codigo: number){
      return PRODUCTOS.find(p => p.id === codigo);
    }

  addProducto(producto){
    let options = {
      headers: new HttpHeaders({
          "Content-Type": "application/json"
      })
     }
    
      toastr.success(`Producto ${producto.title} agregado`);
      console.log(producto)
      return this.http.post('http://localhost:3000/productos',JSON.stringify(producto),options);
   
  }

  editProducto(producto){
    toastr.success(`Producto ${producto.title} Modificado`)
    
    PRODUCTOS[producto.id] = producto;
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