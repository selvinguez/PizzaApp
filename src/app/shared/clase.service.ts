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
    if(!PRODUCTOS.find(p => p.title === producto.title )){
      PRODUCTOS.push(producto);
      toastr.success(`Producto ${producto.title} agregado`);
  }else{
    toastr.success(`El producto con title  ${producto.title} ya existe`);
  }
  }

  editProducto(producto){
    toastr.success(`Producto ${producto.title} Modificado`)
    
    PRODUCTOS[producto.id] = producto;
   }   

   getCountid(){
     return PRODUCTOS.length
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

const PRODUCTOS= [
  {
    id:0,
    title:"Combo Familiar", 
    description: "Pizza gigante de un ingrediente,24 jugosas pechurricas y 16oz de nuestras exquisitas papas wedges!", 
    price: 500, 
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Munchy_Box.jpg', 
    category:'Boxes',
    isEnabled: true
  },
  {
    id:1,
    title:"Combo GLASGOW",
    description: "Pizza gigante de un ingrediente,24 picantes hut wings,6 jugosas pechurricas y 16oz de nuestras exquisitas papas wedges!",
    price: 599,
    imageURL: 'https://farm3.static.flickr.com/2276/1918684402_1dd74e866d.jpg?v=0',
    category:'Boxes',
    isEnabled: true
  },
  {
    id:2,
    title:"Combo Muchie",
    description: "Pizza gigante de un ingrediente,12 picantes hut wings,12 jugosas pechurricas y 16oz de nuestras exquisitas papas wedges",
    price: 549,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1R2-cLcvcoB1JZc2FWtIXbKaNxYcbu7szA&usqp=CAU',
    category:'Boxes',
    isEnabled: true
  },
  {
    id:3,
    title:"Pan De Ajo Supremo",
    description: "Pan de ajo con capa de queso mozzarella.",
    price: 199,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PAN%20DE%20AJO.png',
    category:'Entradas',
    isEnabled: true
  },
  {
    id:4,
    title:"Hot Wings",
    description: "Nuestras tradicionales alitas de pollo con sabor a salsa buffalo,acompañadas con aderezo ranchero.",
    price: 149,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/HUT%20WINGS.png',
    category:'Entradas',
    isEnabled: true
  },
  {
    id:5,
    title:"Pechurricas",
    description: "Crujientes pechurricas de pollo acompañadas de salsa ranchera.",
    price: 229,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PECHURRRICAS.png',
    category:'Entradas',
    isEnabled: true
  },
  {
    id:6,
    title:"Papas Wedges",
    description: "Gajos de papas con leve empanizado.",
    price: 80,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PAPAS%20WEDGES.png',
    category:'Entradas',
    isEnabled: true
  },
  {
    id:7,
    title:"Pasta Alfredo",
    description: "Delicioso Linguinni con pollo y la mejor salsa Alfredo.",
    price: 199,
    imageURL: 'https://www.superama.com.mx/views/micrositio/recetas/images/comidaitaliana/pastaalfredo/Web_fotoreceta.jpg',
    category:'Pastas',
    isEnabled: true
  },
  {
    id:8,
    title:"Pasta Tagliatelle",
    description: "La mejor pasta Tagliatelle.",
    price: 199,
    imageURL: 'https://i.pinimg.com/originals/79/80/1d/79801df4ae85acf912e41f2314ad74fd.jpg',
    category:'Pastas',
    isEnabled: true
  },
  {
    id:9,
    title:"4 Estaciones",
    description: "Cuatro diferentes especialidades en una sola pizza: súper suprema, canadiense, pepperoni y jamón.",
    price: 319,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/001.jpg',
    category:'Pizza',
    isEnabled: true
  },
  {
    id:10,
    title:"Super Suprema",
    description: "Elaborada con pepperoni, carne de res y cerdo, salchicha italiana, jamón, champiñones, aceitunas, cebolla y chile verde.",
    price: 280,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPER%20SUPREMA.jpg',
    category:'Pizza',
    isEnabled: true
  },
  {
    id:11,
    title:"Canadiense",
    description: "Elaborada con pepperoni, jamón, carne de res y cerdo, salchicha italiana y bacon bits.",
    price: 280,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/CANADIENSE.jpg',
    category:'Pizza',
    isEnabled: true
  },
  {
    id:12,
    title:"Pepperoni O Jamón Lovers",
    description: "Pepperoni o jamón en abundancia, queso 100% mozzarella.",
    price: 250,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PEPPERONI%20O%20JAMON%20LOVERS.jpg',
    category:'Pizza',
    isEnabled: true
  },
  {
    id:13,
    title:"Calzone Supremo",
    description: "Combinación de carne de res y cerdo, pepperoni, champiñones, chile verde, cebolla y salsa barbacoa.",
    price: 115,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%20SUPREMO.png',
    category:'Calzoné',
    isEnabled: true
  },
  {
    id:14,
    title:"Calzone Meat",
    description: "Combinación de jamón, carne de res y cerdo, queso mozzarella y salsa barbacoa.",
    price: 115,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%203.png',
    category:'Calzoné',
    isEnabled: true
  },
  {
    id:15,
    title:"Canadiense",
    description: "Elaborada con pepperoni, jamón, carne de res y cerdo, salchicha italiana y bacon bits.",
    price: 280,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/CANADIENSE.jpg',
    category:'Llevar',
    isEnabled: true
  },{
    id:16,
    title:"Combo Familiar", 
    description: "Pizza gigante de un ingrediente,24 jugosas pechurricas y 16oz de nuestras exquisitas papas wedges!", 
    price: 500, 
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Munchy_Box.jpg', 
    category:'Llevar',
    isEnabled: true
  },
  {
    id:17,
    title:"Pan De Ajo Supremo",
    description: "Pan de ajo con capa de queso mozzarella.",
    price: 199,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PAN%20DE%20AJO.png',
    category:'Llevar',
    isEnabled: true
  },
]