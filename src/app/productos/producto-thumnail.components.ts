import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'clase-thumbnail',
    template: `
        
        <div  class="container p-3 my-3 bg-dark text-white " >
            <h2>{{clase.title}}</h2>
            <img class="rounded-circle" width="250" height="150" src="{{clase.imageURL}}" alt="{{clase.descripcion}}" >
            <div><span>Precio: {{clase.price}}</span></div>
            <button  class="btn btn-light"  [routerLink]="['/EditarProductos', clase.id ]" >Edit</button>

        </div>
    `,
    styles: [`
    .pad-left{
        margin-left: 20px;
    }    
    .colorverde span{
        color: green;
        font-weight: bold;
    }
    .myDiv {
        border: 5px outset red;
        background-color: lightblue;    
        text-align: center;
      }
    `]
})
export class ProductoThumbnailComponent
{
    @Input() clase:any
    @Output() eventClase = new EventEmitter()

    clickMe(){
        this.eventClase.emit(this.clase.title);
    }
}