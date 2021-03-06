import { Injectable } from "@angular/core";

@Injectable()
export class ClaseService
{
    getProductos(){
        return PRODUCTOS;
    }
    
    getProductosByCategory(category){
      const CATEGORIAS = []
      PRODUCTOS.map(producto=>{
        (producto.category === category)?CATEGORIAS.push(producto):null
      })
      return CATEGORIAS;
    }

    getCart(){
      return CART;
    }

    getCartLength(){
      return CART.length;
    }
}

const CART= [
  
]

const PRODUCTOS= [
  {
    title:"Combo Familiar", 
    description: "Pizza gigante de un ingrediente,24 jugosas pechurricas y 16oz de nuestras exquisitas papas wedges!", 
    price: 500, 
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Munchy_Box.jpg', 
    category:'Boxes'
  },
  {
    title:"Combo GLASGOW",
    description: "Pizza gigante de un ingrediente,24 picantes hut wings,6 jugosas pechurricas y 16oz de nuestras exquisitas papas wedges!",
    price: 599,
    imageURL: 'https://farm3.static.flickr.com/2276/1918684402_1dd74e866d.jpg?v=0',
    category:'Boxes'
  },
  {
    title:"Combo Muchie",
    description: "Pizza gigante de un ingrediente,12 picantes hut wings,12 jugosas pechurricas y 16oz de nuestras exquisitas papas wedges",
    price: 549,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1R2-cLcvcoB1JZc2FWtIXbKaNxYcbu7szA&usqp=CAU',
    category:'Boxes'
  },
  {
    title:"Pan De Ajo Supremo",
    description: "Pan de ajo con capa de queso mozzarella.",
    price: 199,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PAN%20DE%20AJO.png',
    category:'Entradas'
  },
  {
    title:"Hot Wings",
    description: "Nuestras tradicionales alitas de pollo con sabor a salsa buffalo,acompañadas con aderezo ranchero.",
    price: 149,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/HUT%20WINGS.png',
    category:'Entradas'
  },
  {
    title:"Pechurricas",
    description: "Crujientes pechurricas de pollo acompañadas de salsa ranchera.",
    price: 229,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PECHURRRICAS.png',
    category:'Entradas'
  },
  {
    title:"Papas Wedges",
    description: "Gajos de papas con leve empanizado.",
    price: 80,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PAPAS%20WEDGES.png',
    category:'Entradas'
  },
  {
    title:"Pasta Alfredo",
    description: "Delicioso Linguinni con pollo y la mejor salsa Alfredo.",
    price: 199,
    imageURL: 'https://www.superama.com.mx/views/micrositio/recetas/images/comidaitaliana/pastaalfredo/Web_fotoreceta.jpg',
    category:'Pastas'
  },
  {
    title:"Pasta Tagliatelle",
    description: "La mejor pasta Tagliatelle.",
    price: 199,
    imageURL: 'https://i.pinimg.com/originals/79/80/1d/79801df4ae85acf912e41f2314ad74fd.jpg',
    category:'Pastas'
  },
  {
    title:"4 Estaciones",
    description: "Cuatro diferentes especialidades en una sola pizza: súper suprema, canadiense, pepperoni y jamón.",
    price: 319,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/001.jpg',
    category:'Pizza'
  },
  {
    title:"Super Suprema",
    description: "Elaborada con pepperoni, carne de res y cerdo, salchicha italiana, jamón, champiñones, aceitunas, cebolla y chile verde.",
    price: 280,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPER%20SUPREMA.jpg',
    category:'Pizza'
  },
  {
    title:"Canadiense",
    description: "Elaborada con pepperoni, jamón, carne de res y cerdo, salchicha italiana y bacon bits.",
    price: 280,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/CANADIENSE.jpg',
    category:'Pizza'
  },
  {
    title:"Pepperoni O Jamón Lovers",
    description: "Pepperoni o jamón en abundancia, queso 100% mozzarella.",
    price: 250,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PEPPERONI%20O%20JAMON%20LOVERS.jpg',
    category:'Pizza'
  },
  {
    title:"Calzone Supremo",
    description: "Combinación de carne de res y cerdo, pepperoni, champiñones, chile verde, cebolla y salsa barbacoa.",
    price: 115,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%20SUPREMO.png',
    category:'Calzoné'
  },
  {
    title:"Calzone Meat",
    description: "Combinación de jamón, carne de res y cerdo, queso mozzarella y salsa barbacoa.",
    price: 115,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%203.png',
    category:'Calzoné'
  },
  {
    title:"Calzone Meat",
    description: "Combinación de jamón, carne de res y cerdo, queso mozzarella y salsa barbacoa.",
    price: 115,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%203.png',
    category:'Calzoné'
  },{
    title:"Canadiense",
    description: "Elaborada con pepperoni, jamón, carne de res y cerdo, salchicha italiana y bacon bits.",
    price: 280,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/CANADIENSE.jpg',
    category:'Llevar'
  },{
    title:"Combo Familiar", 
    description: "Pizza gigante de un ingrediente,24 jugosas pechurricas y 16oz de nuestras exquisitas papas wedges!", 
    price: 500, 
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Munchy_Box.jpg', 
    category:'Llevar'
  },
  {
    title:"Pan De Ajo Supremo",
    description: "Pan de ajo con capa de queso mozzarella.",
    price: 199,
    imageURL: 'https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PAN%20DE%20AJO.png',
    category:'Llevar'
  },
]