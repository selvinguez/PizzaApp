import { Component } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { ClaseService } from "../shared/clase.service"

@Component({
  
    templateUrl: './editarProducto.components.html',
    styles: [`
    .pad-left{
        margin-left: 20px;
    }
    
`]

})
export class EditarProductoComponent
{
   
    Product
    title: FormControl
    description : FormControl
    price : FormControl
    imageURL :FormControl
    category : FormControl
    profileForm2: FormGroup
    isDirty: boolean = true;

    constructor(private claseService: ClaseService,
      private route: ActivatedRoute, private router: Router) {
        this.Product = this.claseService.getProductoById(+this.route.snapshot.params['myid'])
        this.title = new FormControl(this.Product.title, [
          Validators.required, 
       
        ])
        this.description = new FormControl(this.Product.description ,[
          Validators.required, 
       
        ])
        this.price = new FormControl(this.Product.price, [
          Validators.required, 
       
        ])
        this.imageURL = new FormControl(this.Product.imageURL, [
          Validators.required, 
       
        ])
        this.category = new FormControl(this.Product.category ,[
          Validators.required, 
       
        ])
        this.profileForm2 = new FormGroup({
          title: this.title,
          description: this.description,
          price: this.price,
          imageURL: this.imageURL,
          category: this.category
          
      })
      
    }
    

    fnProduct(data){
      this.Product.title = data.title
      this.Product.description = data.description
      this.Product.price = data.price
      this.Product.imageURL = data.imageURL
      this.Product.category = data.category
      this.claseService.editProducto(this.Product);
      this.isDirty = false;
      console.log(this.claseService.getCountid())
    }

    cancel(){
      this.router.navigateByUrl('lista');
  }
  
  regresar(){
    this.router.navigateByUrl('lista');
}
}