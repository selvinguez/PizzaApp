import { Injectable } from "@angular/core";

@Injectable()
export class ClaseService
{
    getProductos(){
        return PRODUCTOS;
    }
}

const PRODUCTOS= [
  {title:"Pizza Mania", price: 25, imageURL: '../../assets/boxes.png'},
  {title:"Pizza 4 Full Mix", price: 99, imageURL: '../../assets/llevar.png'},
  {title:"Pizza Personal", price: 49, imageURL: '../../assets/pizza.png'}
]