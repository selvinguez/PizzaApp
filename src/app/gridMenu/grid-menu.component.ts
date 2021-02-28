import {Component} from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  img: string;
  index: number;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'grid-menu',
  templateUrl: 'grid-menu.component.html',  
  styleUrls: ['grid-menu.component.css'],
})
export class GridMenu {
  tiles: Tile[] = [
    {text:"Boxes", img: '../../assets/boxes.png', cols: 1, rows: 1, index:0},
    {text:"Entradas", img: '../../assets/entradas.png', cols: 1, rows: 1, index:1},
    {text:"Calzones", img: '../../assets/Calzon.jpg', cols: 1, rows: 1, index:2},
    {text:"Llevar", img: '../../assets/llevar.png', cols: 1, rows: 1, index:3},
    {text:"Pastas", img: '../../assets/pastas.png', cols: 1, rows: 1, index:4},
    {text:"Pizza", img: '../../assets/pizza.png', cols: 1, rows: 1, index:5},
  ];
}
